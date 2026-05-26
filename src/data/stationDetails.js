const yearColumns = ['111', '112', '113', '114', '115']

export const stationDetails = [
{
  id: 'stn_03009001',
  dialogTitle: '詳細資料',
  tabs: [
    {
      name: 'basic',
      label: '基本資訊',
      expandLabel: '展開基本資訊表格',
      summary: [
        { label: '灌區名稱：', value: '湖口站' },
        { label: '灌溉小組數：', value: '53', unit: '個' },
        { label: '灌溉面積：', value: '3,621', unit: '公頃' },
        { label: '直灌小組數：', value: '0', unit: '個' },
        { label: '直灌面積：', value: '0', unit: '公頃' },
      ],
      tables: [
        {
          headerRows: [
            [
              { label: '序號' },
              { label: '名稱' },
              { label: '灌溉面積(公頃)' },
              { label: '是否為直灌區' },
            ],
          ],
          rows: [
            ['1', '光復圳1-1號池塘小組', '78.86', '否'],
            ['2', '光復圳1-2號池塘小組', '33.31', '否'],
            ['3', '光復圳1-3號池塘小組', '35.05', '否'],
            ['4', '光復圳1-4號池塘小組', '53.41', '否'],
            ['...', '...', '...', '...'],
            ['53', '...', '...', '...'],
          ],
        },
      ],
    },
    {
      name: 'pond',
      label: '埤塘資訊',
      expandLabel: '展開埤塘資訊表格',
      summary: [
        { label: '埤塘數量：', value: '65', unit: '口' },
        { label: '總最大蓄水量：', value: '911', unit: '萬噸' },
        { label: '總有效蓄水量：', value: '236', unit: '萬噸' },
        { label: '總蓄水率：', value: '26', unit: '%' },
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
            ['1', '光復圳1-1號池', '6.67', '3.78', '57'],
            ['2', '光復圳1-2號池', '9.67', '2.56', '26'],
            ['3', '光復圳1-3號池', '10.56', '3.53', '33'],
            ['4', '光復圳1-4號池', '11.14', '4.22', '38'],
            ['...', '...', '...', '...', '...'],
            ['65', '...', '...', '...', '...'],
          ],
        },
      ],
    },
    {
      name: 'crop',
      label: '作物資訊',
      expandLabel: '展開作物資訊表格',
      summaryClass: 'crop-detail-list',
      tableWrapClass: 'crop-table-wrap',
      summary: [
        { label: '近期(115/3/5)農試所農地湛水面積：', value: '2,878', unit: '公頃' },
        {
          label: '近5年農試所農地土地水稻平均面積：',
          lines: [
            { value: '一期作 1,372', unit: '公頃' },
            { value: '二期作 1,027', unit: '公頃' },
          ],
        },
        {
          label: '近5年農糧署申報核定水稻平均面積：',
          lines: [
            { value: '一期作 1,054', unit: '公頃' },
            { value: '二期作 1,372', unit: '公頃' },
          ],
        },
      ],
      tables: [
        {
          tableClass: 'crop-table',
          headerRows: [
            [
              { label: '序號', rowspan: 3 },
              { label: '名稱', rowspan: 3 },
              { lines: ['115/3/5', '湛水面積', '(公頃)'], rowspan: 3 },
              { label: '近 5 年農試所農地土地水稻面積', colspan: 10 },
              { label: '近 5 年農糧署申報核定水稻平均面積', colspan: 10 },
            ],
            [
              { label: '一期作', colspan: 5 },
              { label: '二期作', colspan: 5 },
              { label: '一期作', colspan: 5 },
              { label: '二期作', colspan: 5 },
            ],
            [
              ...yearColumns.map((year) => ({ label: year })),
              ...yearColumns.map((year) => ({ label: year })),
              ...yearColumns.map((year) => ({ label: year })),
              ...yearColumns.map((year) => ({ label: year })),
            ],
          ],
          rows: [
            ['1', '光復圳1-1號池塘小組', '20', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...'],
            ['2', '光復圳1-2號池塘小組', '18', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...'],
            ['3', '光復圳1-3號池塘小組', '15', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...'],
            ['4', '光復圳1-4號池塘小組', '33', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...'],
            ['...', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...'],
            ['53', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...'],
          ],
        },
      ],
    },
  ],
},
{
  id: 'branch__03009001',
  dialogTitle: '詳細資料',
  tabs: [
    {
      name: 'basic',
      label: '基本資訊',
      expandLabel: '展開基本資訊表格',
      summary: [
        { label: '灌區名稱：', value: '光復圳1支線' },
        { label: '灌溉小組數：', value: '4', unit: '個' },
        { label: '灌溉面積：', value: '200.63', unit: '公頃' },
        { label: '直灌小組數：', value: '0', unit: '個' },
        { label: '直灌面積：', value: '0', unit: '公頃' },
      ],
      tables: [
        {
          headerRows: [
            [
              { label: '序號' },
              { label: '名稱' },
              { label: '灌溉面積(公頃)' },
              { label: '是否為直灌區' },
            ],
          ],
          rows: [
            ['1', '光復圳1-1號池塘小組', '78.86', '否'],
            ['2', '光復圳1-2號池塘小組', '33.31', '否'],
            ['3', '光復圳1-3號池塘小組', '35.05', '否'],
            ['4', '光復圳1-4號池塘小組', '53.41', '否']
          ],
        },
      ],
    },
    {
      name: 'pond',
      label: '埤塘資訊',
      expandLabel: '展開埤塘資訊表格',
      summary: [
        { label: '埤塘數量：', value: '4', unit: '口' },
        { label: '總最大蓄水量：', value: '38.04', unit: '萬噸' },
        { label: '總有效蓄水量：', value: '14.09', unit: '萬噸' },
        { label: '總蓄水率：', value: '37', unit: '%' },
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
            ['1', '光復圳1-1號池', '6.67', '3.78', '57'],
            ['2', '光復圳1-2號池', '9.67', '2.56', '26'],
            ['3', '光復圳1-3號池', '10.56', '3.53', '33'],
            ['4', '光復圳1-4號池', '11.14', '4.22', '38'],
          ],
        },
      ],
    },
    {
      name: 'crop',
      label: '作物資訊',
      expandLabel: '展開作物資訊表格',
      summaryClass: 'crop-detail-list',
      tableWrapClass: 'crop-table-wrap',
      summary: [
        { label: '近期(115/3/5)農試所農地湛水面積：', value: '287', unit: '公頃' },
        {
          label: '近5年農試所農地土地水稻平均面積：',
          lines: [
            { value: '一期作 137', unit: '公頃' },
            { value: '二期作 102', unit: '公頃' },
          ],
        },
        {
          label: '近5年農糧署申報核定水稻平均面積：',
          lines: [
            { value: '一期作 105', unit: '公頃' },
            { value: '二期作 137', unit: '公頃' },
          ],
        },
      ],
      tables: [
        {
          tableClass: 'crop-table',
          headerRows: [
            [
              { label: '序號', rowspan: 3 },
              { label: '名稱', rowspan: 3 },
              { lines: ['115/3/5', '湛水面積', '(公頃)'], rowspan: 3 },
              { label: '近 5 年農試所農地土地水稻面積', colspan: 10 },
              { label: '近 5 年農糧署申報核定水稻平均面積', colspan: 10 },
            ],
            [
              { label: '一期作', colspan: 5 },
              { label: '二期作', colspan: 5 },
              { label: '一期作', colspan: 5 },
              { label: '二期作', colspan: 5 },
            ],
            [
              ...yearColumns.map((year) => ({ label: year })),
              ...yearColumns.map((year) => ({ label: year })),
              ...yearColumns.map((year) => ({ label: year })),
              ...yearColumns.map((year) => ({ label: year })),
            ],
          ],
          rows: [
            ['1', '光復圳1-1號池塘小組', '20', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...'],
            ['2', '光復圳1-2號池塘小組', '18', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...'],
            ['3', '光復圳1-3號池塘小組', '15', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...'],
            ['4', '光復圳1-4號池塘小組', '33', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...']
          ],
        },
      ],
    },
  ],
},
{
  id: 'grp_03009001',
  dialogTitle: '詳細資料',
  tabs: [
    {
      name: 'basic',
      label: '基本資訊',
      expandLabel: '展開基本資訊表格',
      summary: [
        { label: '灌區名稱：', value: '光復圳1-1號池小組' },
        { label: '灌溉小組數：', value: '1', unit: '個' },
        { label: '灌溉面積：', value: '78.86', unit: '公頃' },
        { label: '直灌小組數：', value: '0', unit: '個' },
        { label: '直灌面積：', value: '0', unit: '公頃' },
      ],
      tables: [
        {
          headerRows: [
            [
              { label: '序號' },
              { label: '名稱' },
              { label: '灌溉面積(公頃)' },
              { label: '是否為直灌區' },
            ],
          ],
          rows: [
            ['1', '光復圳1-1號池塘小組', '78.86', '否']
          ],
        },
      ],
    },
    {
      name: 'pond',
      label: '埤塘資訊',
      expandLabel: '展開埤塘資訊表格',
      summary: [
        { label: '埤塘數量：', value: '1', unit: '口' },
        { label: '總最大蓄水量：', value: '6.67', unit: '萬噸' },
        { label: '總有效蓄水量：', value: '3.78', unit: '萬噸' },
        { label: '總蓄水率：', value: '57', unit: '%' },
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
            ['1', '光復圳1-1號池', '6.67', '3.78', '57']
          ],
        },
      ],
    },
    {
      name: 'crop',
      label: '作物資訊',
      expandLabel: '展開作物資訊表格',
      summaryClass: 'crop-detail-list',
      tableWrapClass: 'crop-table-wrap',
      summary: [
        { label: '近期(115/3/5)農試所農地湛水面積：', value: '20', unit: '公頃' },
        {
          label: '近5年農試所農地土地水稻平均面積：',
          lines: [
            { value: '一期作 15', unit: '公頃' },
            { value: '二期作 5', unit: '公頃' },
          ],
        },
        {
          label: '近5年農糧署申報核定水稻平均面積：',
          lines: [
            { value: '一期作 15', unit: '公頃' },
            { value: '二期作 5', unit: '公頃' },
          ],
        },
      ],
      tables: [
        {
          tableClass: 'crop-table',
          headerRows: [
            [
              { label: '序號', rowspan: 3 },
              { label: '名稱', rowspan: 3 },
              { lines: ['115/3/5', '湛水面積', '(公頃)'], rowspan: 3 },
              { label: '近 5 年農試所農地土地水稻面積', colspan: 10 },
              { label: '近 5 年農糧署申報核定水稻平均面積', colspan: 10 },
            ],
            [
              { label: '一期作', colspan: 5 },
              { label: '二期作', colspan: 5 },
              { label: '一期作', colspan: 5 },
              { label: '二期作', colspan: 5 },
            ],
            [
              ...yearColumns.map((year) => ({ label: year })),
              ...yearColumns.map((year) => ({ label: year })),
              ...yearColumns.map((year) => ({ label: year })),
              ...yearColumns.map((year) => ({ label: year })),
            ],
          ],
          rows: [
            ['1', '光復圳1-1號池塘小組', '20', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...']
          ],
        },
      ],
    },
  ],
},
{
  id: 'grp_03009002',
  dialogTitle: '詳細資料',
  tabs: [
    {
      name: 'basic',
      label: '基本資訊',
      expandLabel: '展開基本資訊表格',
      summary: [
        { label: '灌區名稱：', value: '光復圳1-2號池小組' },
        { label: '灌溉小組數：', value: '1', unit: '個' },
        { label: '灌溉面積：', value: '33.31', unit: '公頃' },
        { label: '直灌小組數：', value: '0', unit: '個' },
        { label: '直灌面積：', value: '0', unit: '公頃' },
      ],
      tables: [
        {
          headerRows: [
            [
              { label: '序號' },
              { label: '名稱' },
              { label: '灌溉面積(公頃)' },
              { label: '是否為直灌區' },
            ],
          ],
          rows: [
            ['2', '光復圳1-2號池塘小組', '33.31', '否']
          ],
        },
      ],
    },
    {
      name: 'pond',
      label: '埤塘資訊',
      expandLabel: '展開埤塘資訊表格',
      summary: [
        { label: '埤塘數量：', value: '1', unit: '口' },
        { label: '總最大蓄水量：', value: '9.67', unit: '萬噸' },
        { label: '總有效蓄水量：', value: '2.56', unit: '萬噸' },
        { label: '總蓄水率：', value: '26', unit: '%' },
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
            ['2', '光復圳1-2號池', '9.67', '2.56', '26']
          ],
        },
      ],
    },
    {
      name: 'crop',
      label: '作物資訊',
      expandLabel: '展開作物資訊表格',
      summaryClass: 'crop-detail-list',
      tableWrapClass: 'crop-table-wrap',
      summary: [
        { label: '近期(115/3/5)農試所農地湛水面積：', value: '18', unit: '公頃' },
        {
          label: '近5年農試所農地土地水稻平均面積：',
          lines: [
            { value: '一期作 9', unit: '公頃' },
            { value: '二期作 9', unit: '公頃' },
          ],
        },
        {
          label: '近5年農糧署申報核定水稻平均面積：',
          lines: [
            { value: '一期作 9', unit: '公頃' },
            { value: '二期作 9', unit: '公頃' },
          ],
        },
      ],
      tables: [
        {
          tableClass: 'crop-table',
          headerRows: [
            [
              { label: '序號', rowspan: 3 },
              { label: '名稱', rowspan: 3 },
              { lines: ['115/3/5', '湛水面積', '(公頃)'], rowspan: 3 },
              { label: '近 5 年農試所農地土地水稻面積', colspan: 10 },
              { label: '近 5 年農糧署申報核定水稻平均面積', colspan: 10 },
            ],
            [
              { label: '一期作', colspan: 5 },
              { label: '二期作', colspan: 5 },
              { label: '一期作', colspan: 5 },
              { label: '二期作', colspan: 5 },
            ],
            [
              ...yearColumns.map((year) => ({ label: year })),
              ...yearColumns.map((year) => ({ label: year })),
              ...yearColumns.map((year) => ({ label: year })),
              ...yearColumns.map((year) => ({ label: year })),
            ],
          ],
          rows: [
            ['2', '光復圳1-2號池塘小組', '18', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...']
          ],
        },
      ],
    },
  ],
},
{
  id: 'grp_03009003',
  dialogTitle: '詳細資料',
  tabs: [
    {
      name: 'basic',
      label: '基本資訊',
      expandLabel: '展開基本資訊表格',
      summary: [
        { label: '灌區名稱：', value: '光復圳1-3號池小組' },
        { label: '灌溉小組數：', value: '1', unit: '個' },
        { label: '灌溉面積：', value: '35.05', unit: '公頃' },
        { label: '直灌小組數：', value: '0', unit: '個' },
        { label: '直灌面積：', value: '0', unit: '公頃' },
      ],
      tables: [
        {
          headerRows: [
            [
              { label: '序號' },
              { label: '名稱' },
              { label: '灌溉面積(公頃)' },
              { label: '是否為直灌區' },
            ],
          ],
          rows: [
            ['3', '光復圳1-3號池塘小組', '35.05', '否']
          ],
        },
      ],
    },
    {
      name: 'pond',
      label: '埤塘資訊',
      expandLabel: '展開埤塘資訊表格',
      summary: [
        { label: '埤塘數量：', value: '1', unit: '口' },
        { label: '總最大蓄水量：', value: '10.56', unit: '萬噸' },
        { label: '總有效蓄水量：', value: '3.53', unit: '萬噸' },
        { label: '總蓄水率：', value: '33', unit: '%' },
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
            ['3', '光復圳1-3號池', '10.56', '3.53', '33']
          ],
        },
      ],
    },
    {
      name: 'crop',
      label: '作物資訊',
      expandLabel: '展開作物資訊表格',
      summaryClass: 'crop-detail-list',
      tableWrapClass: 'crop-table-wrap',
      summary: [
        { label: '近期(115/3/5)農試所農地湛水面積：', value: '35.05', unit: '公頃' },
        {
          label: '近5年農試所農地土地水稻平均面積：',
          lines: [
            { value: '一期作 15.05', unit: '公頃' },
            { value: '二期作 20', unit: '公頃' },
          ],
        },
        {
          label: '近5年農糧署申報核定水稻平均面積：',
          lines: [
            { value: '一期作 15.05', unit: '公頃' },
            { value: '二期作 20', unit: '公頃' },
          ],
        },
      ],
      tables: [
        {
          tableClass: 'crop-table',
          headerRows: [
            [
              { label: '序號', rowspan: 3 },
              { label: '名稱', rowspan: 3 },
              { lines: ['115/3/5', '湛水面積', '(公頃)'], rowspan: 3 },
              { label: '近 5 年農試所農地土地水稻面積', colspan: 10 },
              { label: '近 5 年農糧署申報核定水稻平均面積', colspan: 10 },
            ],
            [
              { label: '一期作', colspan: 5 },
              { label: '二期作', colspan: 5 },
              { label: '一期作', colspan: 5 },
              { label: '二期作', colspan: 5 },
            ],
            [
              ...yearColumns.map((year) => ({ label: year })),
              ...yearColumns.map((year) => ({ label: year })),
              ...yearColumns.map((year) => ({ label: year })),
              ...yearColumns.map((year) => ({ label: year })),
            ],
          ],
          rows: [
            ['3', '光復圳1-3號池塘小組', '15', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...']
          ],
        },
      ],
    },
  ],
},
{
  id: 'grp_03009004',
  dialogTitle: '詳細資料',
  tabs: [
    {
      name: 'basic',
      label: '基本資訊',
      expandLabel: '展開基本資訊表格',
      summary: [
        { label: '灌區名稱：', value: '光復圳1-4號池小組' },
        { label: '灌溉小組數：', value: '1', unit: '個' },
        { label: '灌溉面積：', value: '53.41', unit: '公頃' },
        { label: '直灌小組數：', value: '0', unit: '個' },
        { label: '直灌面積：', value: '0', unit: '公頃' },
      ],
      tables: [
        {
          headerRows: [
            [
              { label: '序號' },
              { label: '名稱' },
              { label: '灌溉面積(公頃)' },
              { label: '是否為直灌區' },
            ],
          ],
          rows: [
            ['4', '光復圳1-4號池塘小組', '53.41', '否']
          ],
        },
      ],
    },
    {
      name: 'pond',
      label: '埤塘資訊',
      expandLabel: '展開埤塘資訊表格',
      summary: [
        { label: '埤塘數量：', value: '1', unit: '口' },
        { label: '總最大蓄水量：', value: '11.14', unit: '萬噸' },
        { label: '總有效蓄水量：', value: '4.22', unit: '萬噸' },
        { label: '總蓄水率：', value: '38', unit: '%' },
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
            ['4', '光復圳1-4號池', '11.14', '4.22', '38'],
          ],
        },
      ],
    },
    {
      name: 'crop',
      label: '作物資訊',
      expandLabel: '展開作物資訊表格',
      summaryClass: 'crop-detail-list',
      tableWrapClass: 'crop-table-wrap',
      summary: [
        { label: '近期(115/3/5)農試所農地湛水面積：', value: '53.41', unit: '公頃' },
        {
          label: '近5年農試所農地土地水稻平均面積：',
          lines: [
            { value: '一期作 23', unit: '公頃' },
            { value: '二期作 30.41', unit: '公頃' },
          ],
        },
        {
          label: '近5年農糧署申報核定水稻平均面積：',
          lines: [
            { value: '一期作 23', unit: '公頃' },
            { value: '二期作 30.41', unit: '公頃' },
          ],
        },
      ],
      tables: [
        {
          tableClass: 'crop-table',
          headerRows: [
            [
              { label: '序號', rowspan: 3 },
              { label: '名稱', rowspan: 3 },
              { lines: ['115/3/5', '湛水面積', '(公頃)'], rowspan: 3 },
              { label: '近 5 年農試所農地土地水稻面積', colspan: 10 },
              { label: '近 5 年農糧署申報核定水稻平均面積', colspan: 10 },
            ],
            [
              { label: '一期作', colspan: 5 },
              { label: '二期作', colspan: 5 },
              { label: '一期作', colspan: 5 },
              { label: '二期作', colspan: 5 },
            ],
            [
              ...yearColumns.map((year) => ({ label: year })),
              ...yearColumns.map((year) => ({ label: year })),
              ...yearColumns.map((year) => ({ label: year })),
              ...yearColumns.map((year) => ({ label: year })),
            ],
          ],
          rows: [
            ['4', '光復圳1-4號池塘小組', '53.41', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...']
          ],
        },
      ],
    },
  ],
},
{
  id: 'weir_03009002',
  dialogTitle: '詳細資料',
  tabs: [
    {
      name: 'basic',
      label: '基本資訊',
      expandLabel: '展開基本資訊表格',
      summary: [
        { label: '灌區名稱：', value: '光復圳1-社子溪02號河水堰' },
        { label: '灌溉小組數：', value: '2', unit: '個' },
        { label: '灌溉面積：', value: '68.36', unit: '公頃' },
        { label: '直灌小組數：', value: '0', unit: '個' },
        { label: '直灌面積：', value: '0', unit: '公頃' },
      ],
      tables: [
        {
          headerRows: [
            [
              { label: '序號' },
              { label: '名稱' },
              { label: '灌溉面積(公頃)' },
              { label: '是否為直灌區' },
            ],
          ],
          rows: [
            ['1', '光復圳1-2號池塘小組', '33.31', '否']
            ['2', '光復圳1-3號池塘小組', '35.05', '否']
          ],
        },
      ],
    },
    {
      name: 'pond',
      label: '埤塘資訊',
      expandLabel: '展開埤塘資訊表格',
      summary: [
        { label: '埤塘數量：', value: '2', unit: '口' },
        { label: '總最大蓄水量：', value: '20', unit: '萬噸' },
        { label: '總有效蓄水量：', value: '6', unit: '萬噸' },
        { label: '總蓄水率：', value: '30', unit: '%' },
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
            ['1', '光復圳1-2號池', '9.67', '2.56', '26'],
            ['2', '光復圳1-3號池', '10.56', '3.53', '33'],
          ],
        },
      ],
    },
    {
      name: 'crop',
      label: '作物資訊',
      expandLabel: '展開作物資訊表格',
      summaryClass: 'crop-detail-list',
      tableWrapClass: 'crop-table-wrap',
      summary: [
        { label: '近期(115/3/5)農試所農地湛水面積：', value: '48', unit: '公頃' },
        {
          label: '近5年農試所農地土地水稻平均面積：',
          lines: [
            { value: '一期作 33', unit: '公頃' },
            { value: '二期作 24', unit: '公頃' },
          ],
        },
        {
          label: '近5年農糧署申報核定水稻平均面積：',
          lines: [
            { value: '一期作 56', unit: '公頃' },
            { value: '二期作 22', unit: '公頃' },
          ],
        },
      ],
      tables: [
        {
          tableClass: 'crop-table',
          headerRows: [
            [
              { label: '序號', rowspan: 3 },
              { label: '名稱', rowspan: 3 },
              { lines: ['115/3/5', '湛水面積', '(公頃)'], rowspan: 3 },
              { label: '近 5 年農試所農地土地水稻面積', colspan: 10 },
              { label: '近 5 年農糧署申報核定水稻平均面積', colspan: 10 },
            ],
            [
              { label: '一期作', colspan: 5 },
              { label: '二期作', colspan: 5 },
              { label: '一期作', colspan: 5 },
              { label: '二期作', colspan: 5 },
            ],
            [
              ...yearColumns.map((year) => ({ label: year })),
              ...yearColumns.map((year) => ({ label: year })),
              ...yearColumns.map((year) => ({ label: year })),
              ...yearColumns.map((year) => ({ label: year })),
            ],
          ],
          rows: [
            ['1', '光復圳1-3號池塘小組', '15', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...']
            ['2', '光復圳1-4號池塘小組', '33', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...']
          ],
        },
      ],
    },
  ],
},
{
  id: 'weir_03009003',
  dialogTitle: '詳細資料',
  tabs: [
    {
      name: 'basic',
      label: '基本資訊',
      expandLabel: '展開基本資訊表格',
      summary: [
        { label: '灌區名稱：', value: '社子溪03號河水堰' },
        { label: '灌溉小組數：', value: '1', unit: '個' },
        { label: '灌溉面積：', value: '35.05', unit: '公頃' },
        { label: '直灌小組數：', value: '0', unit: '個' },
        { label: '直灌面積：', value: '0', unit: '公頃' },
      ],
      tables: [
        {
          headerRows: [
            [
              { label: '序號' },
              { label: '名稱' },
              { label: '灌溉面積(公頃)' },
              { label: '是否為直灌區' },
            ],
          ],
          rows: [
            ['1', '光復圳1-3號池塘小組', '35.05', '否']
          ],
        },
      ],
    },
    {
      name: 'pond',
      label: '埤塘資訊',
      expandLabel: '展開埤塘資訊表格',
      summary: [
        { label: '埤塘數量：', value: '1', unit: '口' },
        { label: '總最大蓄水量：', value: '10.56', unit: '萬噸' },
        { label: '總有效蓄水量：', value: '3.53', unit: '萬噸' },
        { label: '總蓄水率：', value: '33', unit: '%' },
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
            ['1', '光復圳1-3號池', '10.56', '3.53', '33'],
          ],
        },
      ],
    },
    {
      name: 'crop',
      label: '作物資訊',
      expandLabel: '展開作物資訊表格',
      summaryClass: 'crop-detail-list',
      tableWrapClass: 'crop-table-wrap',
      summary: [
        { label: '近期(115/3/5)農試所農地湛水面積：', value: '15', unit: '公頃' },
        {
          label: '近5年農試所農地土地水稻平均面積：',
          lines: [
            { value: '一期作 8', unit: '公頃' },
            { value: '二期作 7', unit: '公頃' },
          ],
        },
        {
          label: '近5年農糧署申報核定水稻平均面積：',
          lines: [
            { value: '一期作 6', unit: '公頃' },
            { value: '二期作 5', unit: '公頃' },
          ],
        },
      ],
      tables: [
        {
          tableClass: 'crop-table',
          headerRows: [
            [
              { label: '序號', rowspan: 3 },
              { label: '名稱', rowspan: 3 },
              { lines: ['115/3/5', '湛水面積', '(公頃)'], rowspan: 3 },
              { label: '近 5 年農試所農地土地水稻面積', colspan: 10 },
              { label: '近 5 年農糧署申報核定水稻平均面積', colspan: 10 },
            ],
            [
              { label: '一期作', colspan: 5 },
              { label: '二期作', colspan: 5 },
              { label: '一期作', colspan: 5 },
              { label: '二期作', colspan: 5 },
            ],
            [
              ...yearColumns.map((year) => ({ label: year })),
              ...yearColumns.map((year) => ({ label: year })),
              ...yearColumns.map((year) => ({ label: year })),
              ...yearColumns.map((year) => ({ label: year })),
            ],
          ],
          rows: [
            ['1', '光復圳1-3號池塘小組', '15', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...']
          ],
        },
      ],
    },
  ],
},
{
  id: 'weir_03009004',
  dialogTitle: '詳細資料',
  tabs: [
    {
      name: 'basic',
      label: '基本資訊',
      expandLabel: '展開基本資訊表格',
      summary: [
        { label: '灌區名稱：', value: '社子溪04號河水堰' },
        { label: '灌溉小組數：', value: '1', unit: '個' },
        { label: '灌溉面積：', value: '53.41', unit: '公頃' },
        { label: '直灌小組數：', value: '0', unit: '個' },
        { label: '直灌面積：', value: '0', unit: '公頃' },
      ],
      tables: [
        {
          headerRows: [
            [
              { label: '序號' },
              { label: '名稱' },
              { label: '灌溉面積(公頃)' },
              { label: '是否為直灌區' },
            ],
          ],
          rows: [
            ['1', '光復圳1-4號池塘小組', '53.41', '否']
          ],
        },
      ],
    },
    {
      name: 'pond',
      label: '埤塘資訊',
      expandLabel: '展開埤塘資訊表格',
      summary: [
        { label: '埤塘數量：', value: '1', unit: '口' },
        { label: '總最大蓄水量：', value: '11', unit: '萬噸' },
        { label: '總有效蓄水量：', value: '4', unit: '萬噸' },
        { label: '總蓄水率：', value: '38', unit: '%' },
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
            ['1', '光復圳1-4號池', '11.14', '4.22', '38'],
          ],
        },
      ],
    },
    {
      name: 'crop',
      label: '作物資訊',
      expandLabel: '展開作物資訊表格',
      summaryClass: 'crop-detail-list',
      tableWrapClass: 'crop-table-wrap',
      summary: [
        { label: '近期(115/3/5)農試所農地湛水面積：', value: '33', unit: '公頃' },
        {
          label: '近5年農試所農地土地水稻平均面積：',
          lines: [
            { value: '一期作 28', unit: '公頃' },
            { value: '二期作 24', unit: '公頃' },
          ],
        },
        {
          label: '近5年農糧署申報核定水稻平均面積：',
          lines: [
            { value: '一期作 15', unit: '公頃' },
            { value: '二期作 10', unit: '公頃' },
          ],
        },
      ],
      tables: [
        {
          tableClass: 'crop-table',
          headerRows: [
            [
              { label: '序號', rowspan: 3 },
              { label: '名稱', rowspan: 3 },
              { lines: ['115/3/5', '湛水面積', '(公頃)'], rowspan: 3 },
              { label: '近 5 年農試所農地土地水稻面積', colspan: 10 },
              { label: '近 5 年農糧署申報核定水稻平均面積', colspan: 10 },
            ],
            [
              { label: '一期作', colspan: 5 },
              { label: '二期作', colspan: 5 },
              { label: '一期作', colspan: 5 },
              { label: '二期作', colspan: 5 },
            ],
            [
              ...yearColumns.map((year) => ({ label: year })),
              ...yearColumns.map((year) => ({ label: year })),
              ...yearColumns.map((year) => ({ label: year })),
              ...yearColumns.map((year) => ({ label: year })),
            ],
          ],
          rows: [
            ['1', '光復圳1-4號池塘小組', '33', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...']
          ],
        },
      ],
    },
  ],
},
]
