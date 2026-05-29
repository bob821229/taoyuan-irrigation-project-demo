import { detailMockRecords } from './detailOverrides'

export const detailRecords = detailMockRecords

export const detailRecordMap = new Map(
  detailRecords.map((record) => [record.detailKey, record]),
)
