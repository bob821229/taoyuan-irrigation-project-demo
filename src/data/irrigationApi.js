const yearColumns = ['111', '112', '113', '114', '115']

const createDetail = (id, title, areaName) => ({
  id,
  type: 'detail',
  dialogTitle: title,
  tabs: [
    {
      name: 'basic',
      label: '基本資料',
      expandLabel: '展開基本資料表格',
      summary: [
        { label: '名稱：', value: areaName },
        { label: '埤塘數量：', value: '53', unit: '口' },
        { label: '灌溉面積：', value: '3,621', unit: '公頃' },
        { label: '目前異常：', value: '0', unit: '件' },
        { label: '資料時間：', value: '115/05/15 16:00' },
      ],
      tables: [
        {
          headerRows: [
            [
              { label: '序號' },
              { label: '名稱' },
              { label: '灌溉面積(公頃)' },
              { label: '狀態' },
            ],
          ],
          rows: [
            ['1', `${areaName}-1`, '78.86', '正常'],
            ['2', `${areaName}-2`, '33.31', '正常'],
            ['3', `${areaName}-3`, '35.05', '正常'],
            ['4', `${areaName}-4`, '53.41', '正常'],
          ],
        },
      ],
    },
    {
      name: 'pond',
      label: '埤塘資料',
      expandLabel: '展開埤塘資料表格',
      summary: [
        { label: '埤塘數量：', value: '65', unit: '口' },
        { label: '最大蓄水量：', value: '11,500', unit: '萬噸' },
        { label: '有效蓄水量：', value: '7,128', unit: '萬噸' },
        { label: '蓄水率：', value: '62', unit: '%' },
      ],
      tables: [
        {
          headerRows: [
            [
              { label: '序號' },
              { label: '名稱' },
              { label: '最大蓄水量(萬噸)' },
              { label: '有效蓄水量(萬噸)' },
              { label: '蓄水率(%)' },
            ],
          ],
          rows: [
            ['1', `${areaName}蓄水池-1`, '6.67', '3.78', '57'],
            ['2', `${areaName}蓄水池-2`, '9.67', '2.56', '26'],
            ['3', `${areaName}蓄水池-3`, '10.56', '3.53', '33'],
            ['4', `${areaName}蓄水池-4`, '11.14', '4.22', '38'],
          ],
        },
      ],
    },
    {
      name: 'crop',
      label: '作物資料',
      expandLabel: '展開作物資料表格',
      summaryClass: 'crop-detail-list',
      tableWrapClass: 'crop-table-wrap',
      summary: [
        { label: '本期作申報面積：', value: '2,878', unit: '公頃' },
        {
          label: '水稻輪作面積：',
          lines: [
            { value: '一期作 1,372', unit: '公頃' },
            { value: '二期作 1,027', unit: '公頃' },
          ],
        },
      ],
      tables: [
        {
          tableClass: 'crop-table',
          headerRows: [
            [
              { label: '序號', rowspan: 2 },
              { label: '名稱', rowspan: 2 },
              { label: '申報面積', rowspan: 2 },
              { label: '近五年一期作', colspan: 5 },
              { label: '近五年二期作', colspan: 5 },
            ],
            [
              ...yearColumns.map((year) => ({ label: year })),
              ...yearColumns.map((year) => ({ label: year })),
            ],
          ],
          rows: [
            ['1', `${areaName}-1`, '20', '18', '19', '20', '21', '20', '16', '17', '17', '18'],
            ['2', `${areaName}-2`, '18', '17', '18', '18', '19', '18', '15', '15', '16', '16'],
            ['3', `${areaName}-3`, '15', '14', '15', '15', '16', '15', '12', '13', '13', '14'],
          ],
        },
      ],
    },
  ],
})

export const irrigationRecords = [
  createDetail('ISTD303009001', '湖口工作站', '湖口工作站'),
  createDetail('ISTD603009001', '光復圳灌區', '光復圳灌區'),
  createDetail('ISTD403009001', '光復圳一支線 1 號', '光復圳一支線 1 號'),
  createDetail('ISTD403009002', '光復圳一支線 2 號', '光復圳一支線 2 號'),
  createDetail('ISTD403009003', '光復圳一支線 3 號', '光復圳一支線 3 號'),
  createDetail('ISTD403009004', '光復圳一支線 4 號', '光復圳一支線 4 號'),
  {
    id: 'ISTD003009024',
    type: 'water-storage',
    name: '1-1號池',
    level: 57,
    storage: 3.78,
    maxStorage: 6.67,
  },
  {
    id: 'ISTD003009025',
    type: 'water-storage',
    name: '1-2號池',
    level: 26,
    storage: 2.56,
    maxStorage: 9.67,
  },
  {
    id: 'ISTD003009026',
    type: 'water-storage',
    name: '1-3號池',
    level: 33,
    storage: 3.53,
    maxStorage: 10.56,
  },
  {
    id: 'ISTD003009027',
    type: 'water-storage',
    name: '1-4號池',
    level: 38,
    storage: 4.22,
    maxStorage: 11.14,
  },
  {
    id: 'ISTD003009001',
    type: 'flow-info',
    name: '光復圳前',
    time: '115/05/15 16:00',
    waterLevel: '0.8m',
    flow: '0.5cms',
  },
  {
    id: 'ISTD003009002',
    type: 'flow-info',
    name: '光復圳前',
    time: '115/05/15 16:00',
    waterLevel: '0.8m',
    flow: '0.5cms',
  },
  {
    id: 'ISTD003009006',
    type: 'flow-info',
    name: '光復圳前',
    time: '115/05/15 16:00',
    waterLevel: '0.8m',
    flow: '0.5cms',
  },
  {
    id: 'ISTD003009005',
    type: 'flow-info',
    name: '光復圳前',
    time: '115/05/15 16:00',
    waterLevel: '0.8m',
    flow: '0.5cms',
  },
]

const wait = () => new Promise((resolve) => window.setTimeout(resolve, 80))

export const fetchIrrigationRecord = async (id) => {
  await wait()
  return irrigationRecords.find((record) => record.id === id) ?? null
}
