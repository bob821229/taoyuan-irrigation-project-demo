<script setup>
import { computed, ref, watch } from 'vue'

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
  info: {
    type: Object,
    required: true,
  },
})

const emit = defineEmits(['update:modelValue'])

const visible = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value),
})

const expandedTables = ref({})

const formatValue = (value) => {
  if (value === null || value === undefined) {
    return ''
  }

  if (typeof value === 'number') {
    return new Intl.NumberFormat('zh-TW', {
      maximumFractionDigits: 2,
    }).format(value)
  }

  return value
}

const formatBoolean = (value) => {
  if (value === null || value === undefined) {
    return '...'
  }

  return value ? '是' : '否'
}

const createSummaryItem = (label, value, unit) => ({
  label,
  value: formatValue(value),
  unit,
})

const createSeasonLine = (label, value) => ({
  value: `${label} ${formatValue(value)}`,
  unit: '公頃',
})

const isSingleIrrigationGroup = (info) => {
  return info.irrigationGroupCount === 1 && (info.groups?.length ?? 0) === 1
}

const isDirectIrrigationGroup = (info) => {
  return info.groups?.[0]?.isDirectIrrigation || info.directIrrigationGroupCount > 0
}

const createBasicSummary = (info) => {
  if (isSingleIrrigationGroup(info)) {
    return [
      createSummaryItem('灌區名稱：', info.name),
      createSummaryItem(
        '灌溉面積：',
        info.irrigationArea,
        isDirectIrrigationGroup(info) ? '公頃(直灌區)' : '公頃',
      ),
    ]
  }

  return [
    createSummaryItem('灌區名稱：', info.name),
    createSummaryItem('灌溉小組數：', info.irrigationGroupCount, '個'),
    createSummaryItem('灌溉面積：', info.irrigationArea, '公頃'),
    createSummaryItem('直灌小組數：', info.directIrrigationGroupCount, '個'),
    createSummaryItem('直灌面積：', info.directIrrigationArea, '公頃'),
  ]
}

const createCropRows = (rows = []) => rows.map((row) => [
  formatValue(row.no),
  row.name,
  formatValue(row.floodedArea),
  ...row.researchFirstSeason.map(formatValue),
  ...row.researchSecondSeason.map(formatValue),
  ...row.agencyFirstSeason.map(formatValue),
  ...row.agencySecondSeason.map(formatValue),
])

const createDetailTabs = (info) => {
  const years = info.crop?.years ?? []

  return [
    {
      name: 'basic',
      label: '灌區資訊',
      expandLabel: '展開灌區資訊表格',
      canExpandTable: !isSingleIrrigationGroup(info),
      summary: createBasicSummary(info),
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
          rows: (info.groups ?? []).map((group) => [
            formatValue(group.no),
            group.name,
            formatValue(group.irrigationArea),
            formatBoolean(group.isDirectIrrigation),
          ]),
        },
      ],
    },
    {
      name: 'pond',
      label: '埤塘資訊',
      expandLabel: '展開埤塘資訊表格',
      summary: [
        createSummaryItem('埤塘數量：', info.pondCount, '口'),
        createSummaryItem('總最大蓄水量：', info.maxStorage, '萬噸'),
        createSummaryItem('總有效蓄水量：', info.effectiveStorage, '萬噸'),
        createSummaryItem('總蓄水率：', info.storageRate, '%'),
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
          rows: (info.ponds ?? []).map((pond) => [
            formatValue(pond.no),
            pond.name,
            formatValue(pond.maxStorage),
            formatValue(pond.effectiveStorage),
            formatValue(pond.storageRate),
          ]),
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
        createSummaryItem(
          `近期(${info.crop?.floodedAreaDate})農試所農地湛水面積：`,
          info.crop?.recentFloodedArea,
          '公頃',
        ),
        {
          label: '近5年農試所農地土地水稻平均面積：',
          lines: [
            createSeasonLine('一期作', info.crop?.researchAverage?.firstSeason),
            createSeasonLine('二期作', info.crop?.researchAverage?.secondSeason),
          ],
        },
        {
          label: '近5年農糧署申報核定水稻平均面積：',
          lines: [
            createSeasonLine('一期作', info.crop?.agencyAverage?.firstSeason),
            createSeasonLine('二期作', info.crop?.agencyAverage?.secondSeason),
          ],
        },
      ],
      tables: [
        {
          tableClass: 'crop-table',
          colClasses: [
            'crop-col-index',
            'crop-col-name',
            'crop-col-area',
            ...Array.from({ length: 20 }, () => 'crop-col-year'),
          ],
          headerRows: [
            [
              { label: '序號', rowspan: 3 },
              { label: '名稱', rowspan: 3 },
              { lines: [info.crop?.floodedAreaDate, '湛水面積', '(公頃)'], rowspan: 3 },
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
              ...years.map((year) => ({ label: year })),
              ...years.map((year) => ({ label: year })),
              ...years.map((year) => ({ label: year })),
              ...years.map((year) => ({ label: year })),
            ],
          ],
          rows: createCropRows(info.crop?.rows),
        },
      ],
    },
  ]
}

const detailTabs = computed(() => createDetailTabs(props.info))

watch(
  () => detailTabs.value,
  (tabs) => {
    expandedTables.value = Object.fromEntries(
      tabs.map((tab) => [tab.name, expandedTables.value[tab.name] ?? false]),
    )
  },
  { immediate: true },
)

const toggleTable = (name) => {
  expandedTables.value[name] = !expandedTables.value[name]
}
</script>

<template>
  <el-dialog
    v-model="visible"
    class="detail-dialog"
    title="詳細資料"
    width="min(1440px, calc(100vw - 32px))"
  >
    <el-tabs model-value="basic" class="detail-tabs">
      <el-tab-pane
        v-for="tab in detailTabs"
        :key="tab.name"
        :label="tab.label"
        :name="tab.name"
      >
        <dl class="detail-list" :class="tab.summaryClass">
          <div v-for="item in tab.summary" :key="item.label">
            <dt>{{ item.label }}</dt>
            <dd>
              <template v-if="item.lines">
                <span
                  v-for="line in item.lines"
                  :key="line.value"
                  class="detail-line"
                >
                  {{ line.value }}<span>{{ line.unit }}</span>
                </span>
              </template>
              <template v-else>
                {{ item.value }}
                <span v-if="item.unit">{{ item.unit }}</span>
              </template>
            </dd>
          </div>
        </dl>
        <div v-if="tab.canExpandTable !== false" class="detail-actions">
          <el-button
            class="expand-button"
            circle
            type="primary"
            :aria-expanded="expandedTables[tab.name]"
            :aria-label="tab.expandLabel"
            @click="toggleTable(tab.name)"
          >
            {{ expandedTables[tab.name] ? '-' : '+' }}
          </el-button>
        </div>
        <div
          v-if="expandedTables[tab.name]"
          class="detail-table-wrap"
          :class="tab.tableWrapClass"
        >
          <table
            v-for="(table, tableIndex) in tab.tables"
            :key="`${tab.name}-${tableIndex}`"
            class="detail-table"
            :class="table.tableClass"
          >
            <colgroup v-if="table.colClasses">
              <col
                v-for="(colClass, colIndex) in table.colClasses"
                :key="`${tab.name}-${tableIndex}-col-${colIndex}`"
                :class="colClass"
              >
            </colgroup>
            <thead>
              <tr
                v-for="(headerRow, headerRowIndex) in table.headerRows"
                :key="`${tab.name}-${tableIndex}-header-${headerRowIndex}`"
              >
                <th
                  v-for="(cell, cellIndex) in headerRow"
                  :key="`${tab.name}-${tableIndex}-header-${headerRowIndex}-${cellIndex}`"
                  :colspan="cell.colspan"
                  :rowspan="cell.rowspan"
                >
                  <template v-if="cell.lines">
                    <span
                      v-for="line in cell.lines"
                      :key="line"
                      class="table-header-line"
                    >
                      {{ line }}
                    </span>
                  </template>
                  <template v-else>
                    {{ cell.label }}
                  </template>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(row, rowIndex) in table.rows" :key="rowIndex">
                <td v-for="(cell, index) in row" :key="`${rowIndex}-${index}`">
                  {{ cell }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </el-tab-pane>
    </el-tabs>
  </el-dialog>
</template>
