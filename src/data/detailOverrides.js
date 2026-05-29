export const detailOverrides = {
  stn: {
    '03009001': {
      name: '湖口站',
      availableTabs: ['irrigation', 'waterSource', 'crop'],
      irrigationGroupCount: 53,
      irrigationArea: 3621,
      directIrrigationGroupCount: 0,
      directIrrigationArea: 0,
      groups: [
        { name: '光復圳1-1號池塘小組', irrigationArea: 78.86, isDirectIrrigation: false },
        { name: '光復圳1-2號池塘小組', irrigationArea: 33.31, isDirectIrrigation: false },
        { name: '光復圳1-3號池塘小組', irrigationArea: 35.05, isDirectIrrigation: false },
        { name: '光復圳1-4號池塘小組', irrigationArea: 53.41, isDirectIrrigation: false },
        { name: '...', irrigationArea: '...', isDirectIrrigation: null },
        { name: '...', irrigationArea: '...', isDirectIrrigation: null },
      ],
      pondCount: 65,
      maxStorage: 911,
      effectiveStorage: 236,
      storageRate: 26,
      ponds: [
        { name: '光復圳1-1號池', maxStorage: 6.67, time: '115/05/15 16時', effectiveStorage: 3.78, storageRate: 57 },
        { name: '光復圳1-2號池', maxStorage: 9.67, time: '115/05/15 16時', effectiveStorage: 2.56, storageRate: 26 },
        { name: '光復圳1-3號池', maxStorage: 10.56, time: '115/05/15 14時', effectiveStorage: 3.53, storageRate: 33 },
        { name: '光復圳1-4號池', maxStorage: 11.14, time: '115/05/15 12時', effectiveStorage: 4.22, storageRate: 38 },
        { name: '...', maxStorage: '...', time: '115/05/15 10時', effectiveStorage: '...', storageRate: '...' },
        { name: '...', maxStorage: '...', time: '115/05/15 08時', effectiveStorage: '...', storageRate: '...' },
      ],
      waterSource: {
        rows: [
          { sourceType: '渠道', sourceName: '光復圳1支線' },
          { sourceType: '河水堰', sourceName: '社子溪02號河水堰', intakeDirection: '左岸', riverSystem: '社子溪', branchLine: '-', waterSource: '社子溪' },
          { sourceType: '埤塘', sourceName: '光復圳1-1號池' },
        ],
      },
      crop: {
        floodedAreaDate: '115/3/5',
        recentFloodedArea: 2878,
        researchAverage: { firstSeason: 1372, secondSeason: 1027 },
        agencyAverage: { firstSeason: 1054, secondSeason: 1372 },
        years: ['111', '112', '113', '114', '115'],
        rows: [
          {
            name: '光復圳1-1號池塘小組',
            floodedArea: 20,
            researchFirstSeason: ['...', '...', '...', '...', '...'],
            researchSecondSeason: ['...', '...', '...', '...', '...'],
            agencyFirstSeason: ['...', '...', '...', '...', '...'],
            agencySecondSeason: ['...', '...', '...', '...', '...'],
          },
          {
            name: '光復圳1-2號池塘小組',
            floodedArea: 18,
            researchFirstSeason: ['...', '...', '...', '...', '...'],
            researchSecondSeason: ['...', '...', '...', '...', '...'],
            agencyFirstSeason: ['...', '...', '...', '...', '...'],
            agencySecondSeason: ['...', '...', '...', '...', '...'],
          },
          {
            name: '光復圳1-3號池塘小組',
            floodedArea: 15,
            researchFirstSeason: ['...', '...', '...', '...', '...'],
            researchSecondSeason: ['...', '...', '...', '...', '...'],
            agencyFirstSeason: ['...', '...', '...', '...', '...'],
            agencySecondSeason: ['...', '...', '...', '...', '...'],
          },
          {
            name: '光復圳1-4號池塘小組',
            floodedArea: 33,
            researchFirstSeason: ['...', '...', '...', '...', '...'],
            researchSecondSeason: ['...', '...', '...', '...', '...'],
            agencyFirstSeason: ['...', '...', '...', '...', '...'],
            agencySecondSeason: ['...', '...', '...', '...', '...'],
          },
          {
            name: '...',
            floodedArea: '...',
            researchFirstSeason: ['...', '...', '...', '...', '...'],
            researchSecondSeason: ['...', '...', '...', '...', '...'],
            agencyFirstSeason: ['...', '...', '...', '...', '...'],
            agencySecondSeason: ['...', '...', '...', '...', '...'],
          },
          {
            name: '...',
            floodedArea: '...',
            researchFirstSeason: ['...', '...', '...', '...', '...'],
            researchSecondSeason: ['...', '...', '...', '...', '...'],
            agencyFirstSeason: ['...', '...', '...', '...', '...'],
            agencySecondSeason: ['...', '...', '...', '...', '...'],
          },
        ],
      },
      location: {
        name: '湖口站',
        address: '桃園管理處湖口工作站灌區',
        latitude: 24.943750,
        longitude: 121.110114,
      },
    },
  },
  branch: {
    '03009001': {
      rawId: 'branch__03009001',
      name: '1支線',
      availableTabs: ['irrigation', 'waterSource', 'crop'],
      irrigationGroupCount: 4,
      irrigationArea: 200.63,
      directIrrigationGroupCount: 0,
      directIrrigationArea: 0,
      groups: [
        { name: '光復圳1-1號池塘小組', irrigationArea: 78.86, isDirectIrrigation: false },
        { name: '光復圳1-2號池塘小組', irrigationArea: 33.31, isDirectIrrigation: false },
        { name: '光復圳1-3號池塘小組', irrigationArea: 35.05, isDirectIrrigation: false },
        { name: '光復圳1-4號池塘小組', irrigationArea: 53.41, isDirectIrrigation: false },
      ],
      pondCount: 4,
      maxStorage: 38.04,
      effectiveStorage: 14.09,
      storageRate: 37,
      ponds: [
        { name: '光復圳1-1號池', maxStorage: 6.67, time: '115/05/15 16時', effectiveStorage: 3.78, storageRate: 57 },
        { name: '光復圳1-2號池', maxStorage: 9.67, time: '115/05/15 16時', effectiveStorage: 2.56, storageRate: 26 },
        { name: '光復圳1-3號池', maxStorage: 10.56, time: '115/05/15 14時', effectiveStorage: 3.53, storageRate: 33 },
        { name: '光復圳1-4號池', maxStorage: 11.14, time: '115/05/15 12時', effectiveStorage: 4.22, storageRate: 38 },
      ],
      waterSource: {
        rows: [
          { sourceType: '渠道', sourceName: '光復圳1支線' },
          { sourceType: '河水堰', sourceName: '社子溪02號河水堰', intakeDirection: '左岸', riverSystem: '社子溪', branchLine: '-', waterSource: '社子溪' },
          { sourceType: '埤塘', sourceName: '光復圳1-1號池' },
        ],
      },
      crop: {
        floodedAreaDate: '115/3/5',
        recentFloodedArea: 287,
        researchAverage: { firstSeason: 137, secondSeason: 102 },
        agencyAverage: { firstSeason: 105, secondSeason: 137 },
        years: ['111', '112', '113', '114', '115'],
        rows: [
          {
            name: '光復圳1-1號池塘小組',
            floodedArea: 20,
            researchFirstSeason: ['...', '...', '...', '...', '...'],
            researchSecondSeason: ['...', '...', '...', '...', '...'],
            agencyFirstSeason: ['...', '...', '...', '...', '...'],
            agencySecondSeason: ['...', '...', '...', '...', '...'],
          },
          {
            name: '光復圳1-2號池塘小組',
            floodedArea: 18,
            researchFirstSeason: ['...', '...', '...', '...', '...'],
            researchSecondSeason: ['...', '...', '...', '...', '...'],
            agencyFirstSeason: ['...', '...', '...', '...', '...'],
            agencySecondSeason: ['...', '...', '...', '...', '...'],
          },
          {
            name: '光復圳1-3號池塘小組',
            floodedArea: 15,
            researchFirstSeason: ['...', '...', '...', '...', '...'],
            researchSecondSeason: ['...', '...', '...', '...', '...'],
            agencyFirstSeason: ['...', '...', '...', '...', '...'],
            agencySecondSeason: ['...', '...', '...', '...', '...'],
          },
          {
            name: '光復圳1-4號池塘小組',
            floodedArea: 33,
            researchFirstSeason: ['...', '...', '...', '...', '...'],
            researchSecondSeason: ['...', '...', '...', '...', '...'],
            agencyFirstSeason: ['...', '...', '...', '...', '...'],
            agencySecondSeason: ['...', '...', '...', '...', '...'],
          },
        ],
      },
      location: {
        name: '光復圳1支線',
        address: '桃園管理處湖口工作站灌區',
        latitude: 24.943750,
        longitude: 121.110114,
      },
    },
  },
  grp: {
    '03009001': {
      name: '光復圳1-1號池小組',
      availableTabs: ['irrigation', 'waterSource', 'crop'],
      cropStage: '收割期',
      irrigationGroupCount: 1,
      irrigationArea: 78.86,
      directIrrigationGroupCount: 0,
      directIrrigationArea: 0,
      groups: [{ name: '光復圳1-1號池塘小組', irrigationArea: 78.86, isDirectIrrigation: false }],
      pondCount: 1,
      maxStorage: 6.67,
      effectiveStorage: 3.78,
      storageRate: 57,
      ponds: [{ name: '光復圳1-1號池', maxStorage: 6.67, time: '115/05/15 16時', effectiveStorage: 3.78, storageRate: 57 }],
      waterSource: {
        rows: [
          { sourceType: '渠道', sourceName: '光復圳1支線' },
          { sourceType: '河水堰', sourceName: '社子溪02號河水堰', intakeDirection: '左岸', riverSystem: '社子溪', branchLine: '-', waterSource: '社子溪' },
          { sourceType: '埤塘', sourceName: '光復圳1-1號池' },
        ],
      },
      crop: {
        floodedAreaDate: '115/3/5',
        recentFloodedArea: 20,
        researchAverage: { firstSeason: 15, secondSeason: 5 },
        agencyAverage: { firstSeason: 15, secondSeason: 5 },
        years: ['111', '112', '113', '114', '115'],
        rows: [
          {
            name: '光復圳1-1號池塘小組',
            floodedArea: 20,
            researchFirstSeason: ['...', '...', '...', '...', '...'],
            researchSecondSeason: ['...', '...', '...', '...', '...'],
            agencyFirstSeason: ['...', '...', '...', '...', '...'],
            agencySecondSeason: ['...', '...', '...', '...', '...'],
          },
        ],
      },
      location: {
        name: '光復圳1-1號池小組',
        address: '桃園管理處湖口工作站灌區',
        latitude: 24.943750,
        longitude: 121.110114,
      },
    },
    '03009002': {
      name: '光復圳1-2號池小組',
      availableTabs: ['irrigation', 'waterSource', 'crop'],
      cropStage: '本田期',
      irrigationGroupCount: 1,
      irrigationArea: 33.31,
      directIrrigationGroupCount: 0,
      directIrrigationArea: 0,
      groups: [{ name: '光復圳1-2號池塘小組', irrigationArea: 33.31, isDirectIrrigation: false }],
      pondCount: 1,
      maxStorage: 9.67,
      effectiveStorage: 2.56,
      storageRate: 26,
      ponds: [{ name: '光復圳1-2號池', maxStorage: 9.67, time: '115/05/15 16時', effectiveStorage: 2.56, storageRate: 26 }],
      waterSource: {
        rows: [
          { sourceType: '渠道', sourceName: '光復圳1支線' },
          { sourceType: '河水堰', sourceName: '社子溪02號河水堰', intakeDirection: '左岸', riverSystem: '社子溪', branchLine: '-', waterSource: '社子溪' },
          { sourceType: '埤塘', sourceName: '光復圳1-1號池' },
        ],
      },
      crop: {
        floodedAreaDate: '115/3/5',
        recentFloodedArea: 18,
        researchAverage: { firstSeason: 9, secondSeason: 9 },
        agencyAverage: { firstSeason: 9, secondSeason: 9 },
        years: ['111', '112', '113', '114', '115'],
        rows: [
          {
            name: '光復圳1-2號池塘小組',
            floodedArea: 18,
            researchFirstSeason: ['...', '...', '...', '...', '...'],
            researchSecondSeason: ['...', '...', '...', '...', '...'],
            agencyFirstSeason: ['...', '...', '...', '...', '...'],
            agencySecondSeason: ['...', '...', '...', '...', '...'],
          },
        ],
      },
      location: {
        name: '光復圳1-2號池小組',
        address: '桃園管理處湖口工作站灌區',
        latitude: 24.944100,
        longitude: 121.111200,
      },
    },
    '03009003': {
      name: '光復圳1-3號池小組',
      availableTabs: ['irrigation', 'waterSource', 'crop'],
      cropStage: '抽穗期',
      irrigationGroupCount: 1,
      irrigationArea: 35.05,
      directIrrigationGroupCount: 0,
      directIrrigationArea: 0,
      groups: [{ name: '光復圳1-3號池塘小組', irrigationArea: 35.05, isDirectIrrigation: false }],
      pondCount: 1,
      maxStorage: 10.56,
      effectiveStorage: 3.53,
      storageRate: 33,
      ponds: [{ name: '光復圳1-3號池', maxStorage: 10.56, time: '115/05/15 14時', effectiveStorage: 3.53, storageRate: 33 }],
      waterSource: {
        rows: [
          { sourceType: '渠道', sourceName: '光復圳1支線' },
          { sourceType: '河水堰', sourceName: '社子溪02號河水堰', intakeDirection: '左岸', riverSystem: '社子溪', branchLine: '-', waterSource: '社子溪' },
          { sourceType: '埤塘', sourceName: '光復圳1-1號池' },
        ],
      },
      crop: {
        floodedAreaDate: '115/3/5',
        recentFloodedArea: 35.05,
        researchAverage: { firstSeason: 15.05, secondSeason: 20 },
        agencyAverage: { firstSeason: 15.05, secondSeason: 20 },
        years: ['111', '112', '113', '114', '115'],
        rows: [
          {
            name: '光復圳1-3號池塘小組',
            floodedArea: 15,
            researchFirstSeason: ['...', '...', '...', '...', '...'],
            researchSecondSeason: ['...', '...', '...', '...', '...'],
            agencyFirstSeason: ['...', '...', '...', '...', '...'],
            agencySecondSeason: ['...', '...', '...', '...', '...'],
          },
        ],
      },
      location: {
        name: '光復圳1-3號池小組',
        address: '桃園管理處湖口工作站灌區',
        latitude: 24.944600,
        longitude: 121.112000,
      },
    },
    '03009004': {
      name: '光復圳1-4號池小組',
      availableTabs: ['irrigation', 'waterSource', 'crop'],
      cropStage: '整田插秧期',
      irrigationGroupCount: 1,
      irrigationArea: 53.41,
      directIrrigationGroupCount: 0,
      directIrrigationArea: 0,
      groups: [{ name: '光復圳1-4號池塘小組', irrigationArea: 53.41, isDirectIrrigation: false }],
      pondCount: 1,
      maxStorage: 11.14,
      effectiveStorage: 4.22,
      storageRate: 38,
      ponds: [{ name: '光復圳1-4號池', maxStorage: 11.14, time: '115/05/15 12時', effectiveStorage: 4.22, storageRate: 38 }],
      waterSource: {
        rows: [
          { sourceType: '渠道', sourceName: '光復圳1支線' },
          { sourceType: '河水堰', sourceName: '社子溪02號河水堰', intakeDirection: '左岸', riverSystem: '社子溪', branchLine: '-', waterSource: '社子溪' },
          { sourceType: '埤塘', sourceName: '光復圳1-1號池' },
        ],
      },
      crop: {
        floodedAreaDate: '115/3/5',
        recentFloodedArea: 53.41,
        researchAverage: { firstSeason: 23, secondSeason: 30.41 },
        agencyAverage: { firstSeason: 23, secondSeason: 30.41 },
        years: ['111', '112', '113', '114', '115'],
        rows: [
          {
            name: '光復圳1-4號池塘小組',
            floodedArea: 53.41,
            researchFirstSeason: ['...', '...', '...', '...', '...'],
            researchSecondSeason: ['...', '...', '...', '...', '...'],
            agencyFirstSeason: ['...', '...', '...', '...', '...'],
            agencySecondSeason: ['...', '...', '...', '...', '...'],
          },
        ],
      },
      location: {
        name: '光復圳1-4號池小組',
        address: '桃園管理處湖口工作站灌區',
        latitude: 24.945000,
        longitude: 121.112800,
      },
    },
  },
  pound: {
    '03009001': {
      name: '光復圳1-1號池',
      availableTabs: ['pond', 'irrigationSupply', 'waterSource', 'sensor', 'location'],
      irrigation: { area: 78.86, groupName: '光復圳1-1號池塘小組', isDirectIrrigation: false },
      irrigationSupply: {
        group: { area: 78.86, groupName: '光復圳1-1號池塘小組', isDirectIrrigation: false },
        pond: { count: 3, maxStorage: 31.33, effectiveStorage: 10.31, storageRate: 33, unit: '萬噸' },
      },
      pond: { count: 1, maxStorage: 6.67, effectiveStorage: 3.78, storageRate: 57, updatedAt: '115/05/15 16時', unit: '萬噸' },
      waterSource: {
        rows: [
          { sourceType: '渠道', sourceName: '光復圳1支線' },
          { sourceType: '河水堰', sourceName: '社子溪02號河水堰', intakeDirection: '左岸', riverSystem: '社子溪', branchLine: '-', waterSource: '社子溪' },
          { sourceType: '埤塘', sourceName: '光復圳1-1號池' },
        ],
      },
      crop: {
        floodedAreaDate: '115/3/5',
        recentFloodedArea: 20,
        researchAverage: { firstSeason: 15, secondSeason: 5 },
        agencyAverage: { firstSeason: 15, secondSeason: 5 },
        years: ['111', '112', '113', '114', '115'],
        rows: [],
      },
      sensor: { name: '光復圳1-1號池', time: '115/05/15 16時', maxStorage: 6.67, effectiveStorage: 3.78, storageUnit: '萬噸', storageRate: 57 },
      location: {
        name: '光復圳1-1號池',
        address: '桃園管理處湖口工作站灌區',
        latitude: 24.94764,
        longitude: 121.0985,
      },
    },
    '03009002': {
      name: '光復圳1-2號池',
      availableTabs: ['pond', 'irrigationSupply', 'waterSource', 'sensor', 'location'],
      irrigation: { area: 33.31, groupName: '光復圳1-2號池塘小組', isDirectIrrigation: false },
      irrigationSupply: {
        group: { area: 33.31, groupName: '光復圳1-2號池塘小組', isDirectIrrigation: false },
        pond: { count: 3, maxStorage: 31.33, effectiveStorage: 10.31, storageRate: 33, unit: '萬噸' },
      },
      pond: { count: 1, maxStorage: 9.67, effectiveStorage: 2.56, storageRate: 26, updatedAt: '115/05/15 16時', unit: '萬噸' },
      waterSource: {
        rows: [
          { sourceType: '渠道', sourceName: '光復圳1支線' },
          { sourceType: '河水堰', sourceName: '社子溪02號河水堰', intakeDirection: '左岸', riverSystem: '社子溪', branchLine: '-', waterSource: '社子溪' },
          { sourceType: '埤塘', sourceName: '光復圳1-1號池' },
        ],
      },
      crop: {
        floodedAreaDate: '115/3/5',
        recentFloodedArea: 18,
        researchAverage: { firstSeason: 9, secondSeason: 9 },
        agencyAverage: { firstSeason: 9, secondSeason: 9 },
        years: ['111', '112', '113', '114', '115'],
        rows: [],
      },
      sensor: { name: '光復圳1-2號池', time: '115/05/15 16時', maxStorage: 9.67, effectiveStorage: 2.56, storageUnit: '萬噸', storageRate: 26 },
      location: {
        name: '光復圳1-2號池',
        address: '桃園管理處湖口工作站灌區',
        latitude: 24.95497,
        longitude: 121.0898,
      },
    },
    '03009003': {
      name: '光復圳1-3號池',
      availableTabs: ['pond', 'irrigationSupply', 'waterSource', 'sensor', 'location'],
      irrigation: { area: 35.05, groupName: '光復圳1-3號池塘小組', isDirectIrrigation: false },
      irrigationSupply: {
        group: { area: 35.05, groupName: '光復圳1-3號池塘小組', isDirectIrrigation: false },
        pond: { count: 3, maxStorage: 31.33, effectiveStorage: 10.31, storageRate: 33, unit: '萬噸' },
      },
      pond: { count: 1, maxStorage: 10.56, effectiveStorage: 3.53, storageRate: 33, updatedAt: '115/05/15 16時', unit: '萬噸' },
      waterSource: {
        rows: [
          { sourceType: '渠道', sourceName: '光復圳1支線' },
          { sourceType: '河水堰', sourceName: '社子溪02號河水堰', intakeDirection: '左岸', riverSystem: '社子溪', branchLine: '-', waterSource: '社子溪' },
          { sourceType: '埤塘', sourceName: '光復圳1-1號池' },
        ],
      },
      crop: {
        floodedAreaDate: '115/3/5',
        recentFloodedArea: 35.05,
        researchAverage: { firstSeason: 15.05, secondSeason: 20 },
        agencyAverage: { firstSeason: 15.05, secondSeason: 20 },
        years: ['111', '112', '113', '114', '115'],
        rows: [],
      },
      sensor: { name: '光復圳1-3號池', time: '115/05/15 16時', maxStorage: 10.56, effectiveStorage: 3.53, storageUnit: '萬噸', storageRate: 33 },
      location: {
        name: '光復圳1-3號池',
        address: '桃園管理處湖口工作站灌區',
        latitude: 24.96168,
        longitude: 121.0855,
      },
    },
    '03009004': {
      name: '光復圳1-4號池',
      availableTabs: ['pond', 'irrigationSupply', 'waterSource', 'sensor', 'location'],
      irrigation: { area: 53.41, groupName: '光復圳1-4號池塘小組', isDirectIrrigation: false },
      irrigationSupply: {
        group: { area: 53.41, groupName: '光復圳1-4號池塘小組', isDirectIrrigation: false },
        pond: { count: 3, maxStorage: 31.33, effectiveStorage: 10.31, storageRate: 33, unit: '萬噸' },
      },
      pond: { count: 1, maxStorage: 11.14, effectiveStorage: 4.22, storageRate: 38, updatedAt: '115/05/15 16時', unit: '萬噸' },
      waterSource: {
        rows: [
          { sourceType: '渠道', sourceName: '光復圳1支線' },
          { sourceType: '河水堰', sourceName: '社子溪02號河水堰', intakeDirection: '左岸', riverSystem: '社子溪', branchLine: '-', waterSource: '社子溪' },
          { sourceType: '埤塘', sourceName: '光復圳1-1號池' },
        ],
      },
      crop: {
        floodedAreaDate: '115/3/5',
        recentFloodedArea: 53.41,
        researchAverage: { firstSeason: 23, secondSeason: 30.41 },
        agencyAverage: { firstSeason: 23, secondSeason: 30.41 },
        years: ['111', '112', '113', '114', '115'],
        rows: [],
      },
      sensor: { name: '光復圳1-4號池', time: '115/05/15 16時', maxStorage: 11.14, effectiveStorage: 4.22, storageUnit: '萬噸', storageRate: 38 },
      location: {
        name: '光復圳1-4號池',
        address: '桃園管理處湖口工作站灌區',
        latitude: 24.96377,
        longitude: 121.0804,
      },
    },
  },
  sensor: {
    '03009001': {
      name: '光復圳前',
      availableTabs: ['sensor', 'media', 'location'],
      sensor: { name: '光復圳前', time: '115/05/15 16時', waterLevel: 0.8, waterLevelUnit: 'm', flow: 0.5, flowUnit: 'cms' },
      media: {
        images: [
          { title: 'sensor_03009001_1', url: '/images/sensor_03009001/1.png' },
        ],
      },
      location: {
        name: '光復圳前',
        address: '桃園管理處湖口工作站灌區',
        latitude: 24.94391,
        longitude: 121.1153,
      },
    },
    '03009002': {
      name: '光復圳圓井退水門',
      availableTabs: ['sensor', 'media', 'location'],
      sensor: { name: '光復圳圓井退水門', time: '115/05/15 16時', waterLevel: 0.8, waterLevelUnit: 'm', flow: 0.5, flowUnit: 'cms' },
      media: {
        images: [
          { title: 'sensor_03009002_1', url: '/images/sensor_03009002/1.png' },
        ],
      },
      location: {
        name: '光復圳圓井退水門',
        address: '桃園管理處湖口工作站灌區',
        latitude: 24.94401,
        longitude: 121.1092,
      },
    },
    '03009005': {
      name: '光復圳1支線取水',
      availableTabs: ['sensor', 'media', 'location'],
      sensor: { name: '光復圳1支線取水', time: '115/05/15 16時', waterLevel: 0.8, waterLevelUnit: 'm', flow: 0.5, flowUnit: 'cms' },
      media: {
        images: [
          { title: 'sensor_03009005_1', url: '/images/sensor_03009005/1.png' },
        ],
      },
      location: {
        name: '光復圳1支線取水',
        address: '桃園管理處湖口工作站灌區',
        latitude: 24.94704,
        longitude: 121.1032,
      },
    },
    '03009006': {
      name: '光復圳1支線取水後',
      availableTabs: ['sensor', 'media', 'location'],
      sensor: { name: '光復圳1支線取水後', time: '115/05/15 16時', waterLevel: 0.8, waterLevelUnit: 'm', flow: 0.5, flowUnit: 'cms' },
      media: {
        images: [
          { title: 'sensor_03009006_1', url: '/images/sensor_03009006/1.png' },
        ],
      },
      location: {
        name: '光復圳1支線取水後',
        address: '桃園管理處湖口工作站灌區',
        latitude: 24.94657,
        longitude: 121.1032,
      },
    },
  },
  weir: {
    '03009001': {
      name: '社子溪01號河水堰',
      availableTabs: ['weir', 'irrigationSupply', 'media', 'location'],
      weir: { intakeDirection: '左岸', riverSystem: '社子溪', branchLine: '-', waterSource: '社子溪' },
      irrigationSupply: {
        group: { area: 68.36, groupName: '光復圳1支線灌區', isDirectIrrigation: false },
        pond: { count: 3, maxStorage: 31.33, effectiveStorage: 10.31, storageRate: 33, unit: '萬噸' },
      },
      media: {
        images: [
          { title: 'weir_03009001_1', url: '/images/weir_03009001/1.png' },
        ],
      },
      location: {
        name: '社子溪01號河水堰',
        address: '桃園管理處湖口工作站灌區',
        latitude: 24.94097,
        longitude: 121.1147,
      },
    },
    '03009002': {
      name: '光復圳1-社子溪02號河水堰',
      availableTabs: ['weir', 'irrigationSupply', 'media', 'location'],
      weir: { intakeDirection: '左岸', riverSystem: '社子溪', branchLine: '-', waterSource: '社子溪' },
      irrigationSupply: {
        group: { area: 68.36, groupName: '光復圳1支線灌區', isDirectIrrigation: false },
        pond: { count: 3, maxStorage: 31.33, effectiveStorage: 10.31, storageRate: 33, unit: '萬噸' },
      },
      media: {
        images: [
          { title: 'weir_03009002_1', url: '/images/weir_03009002/1.png' },
        ],
      },
      location: {
        name: '光復圳1-社子溪02號河水堰',
        address: '桃園管理處湖口工作站灌區',
        latitude: 24.94776,
        longitude: 121.1052,
      },
    },
    '03009003': {
      name: '社子溪03號河水堰',
      availableTabs: ['weir', 'irrigationSupply', 'media', 'location'],
      weir: { intakeDirection: '左岸', riverSystem: '社子溪', branchLine: '-', waterSource: '社子溪' },
      irrigationSupply: {
        group: { area: 35.05, groupName: '光復圳1-3號池塘小組', isDirectIrrigation: false },
        pond: { count: 1, maxStorage: 10.56, effectiveStorage: 3.53, storageRate: 33, unit: '萬噸' },
      },
      media: {
        images: [
          { title: 'weir_03009003_1', url: '/images/weir_03009003/1.png' },
          { title: 'weir_03009003_2', url: '/images/weir_03009003/2.png' },
        ],
      },
      location: {
        name: '社子溪03號河水堰',
        address: '桃園管理處湖口工作站灌區',
        latitude: 24.96058,
        longitude: 121.0941,
      },
    },
    '03009004': {
      name: '社子溪04號河水堰',
      availableTabs: ['weir', 'irrigationSupply', 'media', 'location'],
      weir: { intakeDirection: '左岸', riverSystem: '社子溪', branchLine: '-', waterSource: '社子溪' },
      irrigationSupply: {
        group: { area: 53.41, groupName: '光復圳1-4號池塘小組', isDirectIrrigation: false },
        pond: { count: 1, maxStorage: 11.14, effectiveStorage: 4.22, storageRate: 38, unit: '萬噸' },
      },
      media: {
        images: [
          { title: 'weir_03009004_1', url: '/images/weir_03009004/1.png' },
          { title: 'weir_03009004_2', url: '/images/weir_03009004/2.png' },
        ],
      },
      location: {
        name: '社子溪04號河水堰',
        address: '桃園管理處湖口工作站灌區',
        latitude: 24.96615,
        longitude: 121.0862,
      },
    },
  },
  divwork: {
    '03009001': {
      name: '分水工03009001',
      availableTabs: ['media', 'location', 'monitor'],
      monitor: { imageUrl: 'https://ai.iatyu.nat.gov.tw/video/Image/03020202' },
      media: {
        images: [
          { title: 'divwork_03009001_1', url: '/images/divwork_03009001/1.png' },
          { title: 'divwork_03009001_2', url: '/images/divwork_03009001/2.jpg' },
          { title: 'divwork_03009001_3', url: '/images/divwork_03009001/3.jpg' },
        ],
      },
      location: {
        name: '分水工03009001',
        address: '桃園管理處湖口工作站灌區',
        latitude: 24.943750,
        longitude: 121.110114,
      },
    },
  },
}

export const detailMockRecords = Object.entries(detailOverrides).flatMap(([type, recordsById]) => {
  return Object.entries(recordsById).map(([id, record]) => {
    const payload = { type, id }

    return {
      ...record,
      rawId: record.rawId ?? `${type}_${id}`,
      type,
      id,
      detailKey: `${payload.type}_${payload.id}`,
    }
  })
})

