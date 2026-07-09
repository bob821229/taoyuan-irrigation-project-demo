// 埤塘
export const thirdLayerWaterStorageDetails = [
  {
    id: 'pound_03009001',
    title: '光復圳1-1號池',
    percent: 57,
    storage: 3.78,
    maxStorage: 6.67,
    time: '115/05/15 16:00',
    unit: '萬噸',
  },
  {
    id: 'pound_03009002',
    title: '光復圳1-2號池',
    percent: 26,
    storage: 2.56,
    maxStorage: 9.67,
    time: '115/05/15 16:00',
    unit: '萬噸',
  },
  {
    id: 'pound_03009003',
    title: '光復圳1-3號池',
    percent: 33,
    storage: 3.53,
    maxStorage: 10.56,
    time: '115/05/15 16:00',
    unit: '萬噸',
  },
  {
    id: 'pound_03009004',
    title: '光復圳1-4號池',
    percent: 38,
    storage: 4.22,
    maxStorage: 11.1,
    time: '115/05/15 16:00',
    unit: '萬噸',
  },
]

// 水位流量計
export const thirdLayerCanalMonitorDetails = [
  {
    id: 'sensor_03009001',
    name: '光復圳前',
    time: '115/05/15 16:00',
    waterLevel: 0.8,
    waterLevelUnit: 'm',
    waterLevelAlertThreshold: 1.2,
    flow: 1.1,
    flowUnit: 'cms',
  },
  {
    id: 'sensor_03009002',
    name: '光復圳圓井退水門',
    time: '115/05/15 16:00',
    waterLevel: 0.8,
    waterLevelUnit: 'm',
    waterLevelAlertThreshold: 1.2,
    flow: 2,
    flowUnit: 'cms',
  },
  {
    id: 'sensor_03009006',
    name: '光復圳1支線取水後',
    time: '115/05/15 16:00',
    waterLevel: 0.8,
    waterLevelUnit: 'm',
    waterLevelAlertThreshold: 1.2,
    flow: 0.5,
    flowUnit: 'cms',
  },
  {
    id: 'sensor_03009005',
    name: '光復圳1支線取水',
    time: '115/05/15 16:00',
    waterLevel: 0.8,
    waterLevelUnit: 'm',
    waterLevelAlertThreshold: 1.2,
    flow: 0.8,
    flowUnit: 'cms',
  },
]
export const thirdLayerMapDetails = {
  waterStorages: thirdLayerWaterStorageDetails,
  canalMonitors: thirdLayerCanalMonitorDetails,
}
