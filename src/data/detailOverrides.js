const mediaImages = [
  { title: 'weir_03009001', url: '/images/weir_03009001.png' },
  { title: 'weir_03009002', url: '/images/weir_03009002.png' },
  { title: 'weir_03009003', url: '/images/weir_03009003.png' },
]

export const detailOverrides = {
  stn: {
    '03009001': {
      location: {
        latitude: 24.943750,
        longitude: 121.110114,
      },
    },
  },
  branch: {
    '03009001': {
      waterSource: {
        fromCanalCount: 1,
        fromWeirCount: 1,
        fromPondCount: 1,
        rows: [
          { no: 1, sourceType: '渠道', sourceName: '光復圳1支線' },
          { no: 2, sourceType: '河水堰', sourceName: '社子溪02號河水堰' },
          { no: 3, sourceType: '埤塘', sourceName: '光復圳1-1號池' },
        ],
      },
      location: {
        latitude: 24.943750,
        longitude: 121.110114,
      },
    },
  },
  grp: {
    '03009001': {
      location: {
        latitude: 24.943750,
        longitude: 121.110114,
      },
    },
    '03009002': {
      location: {
        latitude: 24.944100,
        longitude: 121.111200,
      },
    },
    '03009003': {
      location: {
        latitude: 24.944600,
        longitude: 121.112000,
      },
    },
    '03009004': {
      location: {
        latitude: 24.945000,
        longitude: 121.112800,
      },
    },
  },
  pound: {
    '03009001': {
      sensor: {
        name: '光復圳1-1號池',
        time: '115/05/15 16:00',
        effectiveStorage: 3.78,
        storageUnit: '萬噸',
        storageRate: 57,
      },
      location: {
        latitude: 24.94764,
        longitude: 121.0985,
      },
    },
    '03009002': {
      sensor: {
        name: '光復圳1-2號池',
        time: '115/05/15 16:00',
        effectiveStorage: 2.56,
        storageUnit: '萬噸',
        storageRate: 26,
      },
      location: {
        latitude: 24.95497,
        longitude: 121.0898,
      },
    },
    '03009003': {
      sensor: {
        name: '光復圳1-3號池',
        time: '115/05/15 16:00',
        effectiveStorage: 3.53,
        storageUnit: '萬噸',
        storageRate: 33,
      },
      location: {
        latitude: 24.96168,
        longitude: 121.0855,
      },
    },
    '03009004': {
      sensor: {
        name: '光復圳1-4號池',
        time: '115/05/15 16:00',
        effectiveStorage: 4.22,
        storageUnit: '萬噸',
        storageRate: 38,
      },
      location: {
        latitude: 24.96377,
        longitude: 121.0804,
      },
    },
  },
  sensor: {
    '03009001': {
      sensor: {
        name: '光復圳前',
        time: '115/05/15 16:00',
        waterLevel: 0.8,
        waterLevelUnit: 'm',
        flow: 0.5,
        flowUnit: 'cms',
      },
      media: {
        images: mediaImages,
      },
      location: {
        latitude: 24.94391,
        longitude: 121.1153,
      },
    },
    '03009002': {
      sensor: {
        name: '光復圳圓井退水門',
        time: '115/05/15 16:00',
        waterLevel: 0.8,
        waterLevelUnit: 'm',
        flow: 0.5,
        flowUnit: 'cms',
      },
      media: {
        images: mediaImages,
      },
      location: {
        latitude: 24.94401,
        longitude: 121.1092,
      },
    },
    '03009005': {
      sensor: {
        name: '光復圳1支線取水',
        time: '115/05/15 16:00',
        waterLevel: 0.8,
        waterLevelUnit: 'm',
        flow: 0.5,
        flowUnit: 'cms',
      },
      media: {
        images: mediaImages,
      },
      location: {
        latitude: 24.94704,
        longitude: 121.1032,
      },
    },
    '03009006': {
      sensor: {
        name: '光復圳1支線取水後',
        time: '115/05/15 16:00',
        waterLevel: 0.8,
        waterLevelUnit: 'm',
        flow: 0.5,
        flowUnit: 'cms',
      },
      media: {
        images: mediaImages,
      },
      location: {
        latitude: 24.94657,
        longitude: 121.1032,
      },
    },
  },
  weir: {
    '03009001': {
      media: {
        images: mediaImages,
      },
      location: {
        latitude: 24.94097,
        longitude: 121.1147,
      },
    },
    '03009002': {
      media: {
        images: mediaImages,
      },
      location: {
        latitude: 24.94776,
        longitude: 121.1052,
      },
    },
    '03009003': {
      media: {
        images: mediaImages,
      },
      location: {
        latitude: 24.96058,
        longitude: 121.0941,
      },
    },
    '03009004': {
      media: {
        images: mediaImages,
      },
      location: {
        latitude: 24.96615,
        longitude: 121.0862,
      },
    },
  },
  divwork: {
    '03009001': {
      media: {
        images: mediaImages,
      },
      location: {
        latitude: 24.943750,
        longitude: 121.110114,
      },
    }
  },
}
