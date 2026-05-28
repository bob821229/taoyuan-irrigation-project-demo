import { canalMonitorDetails } from './canalMonitorDetails'
import { detailOverrides } from './detailOverrides'
import { stationDetails } from './stationDetails'
import { waterStorageDetails } from './waterStorageDetails'
import { createDetailKey, normalizeSvgDetailId } from '../utils/svgDetailId'

const fallbackLocation = {
  address: '桃園管理處湖口工作站灌區',
  latitude: 24.943750,
  longitude: 121.110114,
}

const fakeWaterSource = {
  fromCanalCount: 1,
  fromWeirCount: 1,
  fromPondCount: 1,
  rows: [
    { no: 1, sourceType: '渠道', sourceName: '光復圳1支線' },
    { no: 2, sourceType: '河水堰', sourceName: '社子溪02號河水堰' },
    { no: 3, sourceType: '埤塘', sourceName: '光復圳1-1號池' },
  ],
}

const fakeMedia = {
  images: [
    {
      title: '現地照片',
      description: '假資料，待後續串接影像來源。',
      url: '/images/weir_03009001.png',
    },
    {
      title: '水源設施照片',
      description: '假資料，待後續串接影像來源。',
      url: '/images/weir_03009002.png',
    },
    {
      title: '周邊環境照片',
      description: '假資料，待後續串接影像來源。',
      url: '/images/weir_03009003.png',
    },
  ],
}

const createFakeWaterLevelMeterInfo = ({
  meterName = '光復圳1支線取水',
  time = '115/05/15 16:00',
  waterLevel = 0.8,
  flow = 0.5,
} = {}) => ({
  name: meterName,
  time,
  waterLevel,
  waterLevelUnit: 'm',
  flow,
  flowUnit: 'cms',
})

const createFakePondSensorInfo = ({
  pondName = '光復圳1-1號池',
  time = '115/05/15 16:00',
  effectiveStorage = 78,
  storageRate = 38,
} = {}) => ({
  name: pondName,
  time,
  effectiveStorage,
  storageUnit: '萬噸',
  storageRate,
})

const getPayloadFromLegacyId = (legacyId) => normalizeSvgDetailId(legacyId)

const isPlainObject = (value) => {
  return value !== null && typeof value === 'object' && !Array.isArray(value)
}

const mergeDetailRecord = (baseRecord, overrideRecord = {}) => {
  const mergedRecord = { ...baseRecord }

  Object.entries(overrideRecord).forEach(([key, value]) => {
    if (isPlainObject(value) && isPlainObject(baseRecord[key])) {
      mergedRecord[key] = mergeDetailRecord(baseRecord[key], value)
      return
    }

    mergedRecord[key] = value
  })

  return mergedRecord
}

const getDetailOverride = ({ type, id }) => {
  return detailOverrides[type]?.[id] ?? {}
}

const getStationAvailableTabs = (type) => {
  if (type === 'weir') {
    return ['media', 'location']
  }

  return ['irrigation', 'pond', 'waterSource', 'crop']
}

const overrideOnlyTypeTabs = {
  divwork: ['media', 'location'],
}

const createOverrideOnlyRecords = () => {
  return Object.entries(detailOverrides).flatMap(([type, recordsById]) => {
    const availableTabs = overrideOnlyTypeTabs[type]

    if (!availableTabs) {
      return []
    }

    return Object.entries(recordsById).map(([id, overrideRecord]) => {
      const payload = { type, id }
      const baseRecord = {
        rawId: `${type}_${id}`,
        type,
        id,
        detailKey: createDetailKey(payload),
        name: overrideRecord.name ?? `${type}_${id}`,
        availableTabs,
        media: fakeMedia,
        location: {
          ...fallbackLocation,
          name: overrideRecord.name ?? `${type}_${id}`,
        },
      }

      return mergeDetailRecord(baseRecord, overrideRecord)
    })
  })
}

const createStationRecord = (detail) => {
  const payload = getPayloadFromLegacyId(detail.id)

  const baseRecord = {
    ...detail,
    rawId: detail.id,
    type: payload.type,
    id: payload.id,
    detailKey: createDetailKey(payload),
    availableTabs: getStationAvailableTabs(payload.type),
    waterSource: {
      ...fakeWaterSource,
    },
    media: fakeMedia,
    location: {
      ...fallbackLocation,
      name: detail.name,
    },
  }

  return mergeDetailRecord(baseRecord, getDetailOverride(payload))
}

const createPondRecord = (detail) => {
  const payload = getPayloadFromLegacyId(detail.id)

  const baseRecord = {
    rawId: detail.id,
    type: payload.type,
    id: payload.id,
    detailKey: createDetailKey(payload),
    name: detail.title,
    availableTabs: ['irrigation', 'pond', 'waterSource', 'crop', 'sensor', 'location'],
    irrigation: {
      area: 78.86,
      groupName: '光復圳1-1號池塘小組',
      isDirectIrrigation: false,
    },
    pond: {
      count: 1,
      maxStorage: detail.maxStorage,
      effectiveStorage: detail.storage,
      storageRate: detail.percent,
      updatedAt: detail.time,
      unit: detail.unit,
    },
    waterSource: {
      ...fakeWaterSource,
    },
    crop: {
      floodedAreaDate: '115/3/5',
      recentFloodedArea: 20,
      researchAverage: { firstSeason: 15, secondSeason: 5 },
      agencyAverage: { firstSeason: 15, secondSeason: 5 },
      years: ['111', '112', '113', '114', '115'],
      rows: [],
    },
    sensor: createFakePondSensorInfo({
      pondName: detail.title,
      time: detail.time,
      effectiveStorage: detail.storage,
      storageRate: detail.percent,
    }),
    location: {
      ...fallbackLocation,
      name: detail.title,
    },
  }

  return mergeDetailRecord(baseRecord, getDetailOverride(payload))
}

const createSensorRecord = (detail) => {
  const payload = getPayloadFromLegacyId(detail.id)

  const baseRecord = {
    rawId: detail.id,
    type: payload.type,
    id: payload.id,
    detailKey: createDetailKey(payload),
    name: detail.name,
    availableTabs: ['sensor', 'media', 'location'],
    sensor: createFakeWaterLevelMeterInfo({
      meterName: detail.name,
      time: detail.time,
      waterLevel: detail.waterLevel,
      flow: detail.flow,
    }),
    media: fakeMedia,
    location: {
      ...fallbackLocation,
      name: detail.name,
    },
  }

  return mergeDetailRecord(baseRecord, getDetailOverride(payload))
}

export const detailRecords = [
  ...stationDetails.map(createStationRecord),
  ...waterStorageDetails.map(createPondRecord),
  ...canalMonitorDetails.map(createSensorRecord),
  ...createOverrideOnlyRecords(),
]

export const detailRecordMap = new Map(
  detailRecords.map((record) => [record.detailKey, record]),
)
