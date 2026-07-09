<script setup>
import { computed, ref } from 'vue'

const props = defineProps({
  info: {
    type: Object,
    required: true,
  },
})

const weir = computed(() => props.info.weir ?? {})

const hasValue = (value) => value !== null && value !== undefined && value !== ''

const formatBlankValue = (value) => {
  return hasValue(value) ? value : '-'
}

const formatMinguoDate = (value, daySuffix = '日') => {
  if (!hasValue(value)) {
    return '-'
  }

  const date = new Date(value)

  if (Number.isNaN(date.getTime())) {
    return value
  }

  return `民國${date.getFullYear() - 1911}年${date.getMonth() + 1}月${date.getDate()}${daySuffix}`
}

const formatApprovedWaterRightPeriod = (startDate, endDate) => {
  if (!hasValue(startDate) || !hasValue(endDate)) {
    return '-'
  }

  return `自${formatMinguoDate(startDate)}起至${formatMinguoDate(endDate, '號')}止`
}

const hasWaterRightNumber = computed(() => hasValue(weir.value.waterRightNumber))
const waterUseAreaDialogVisible = ref(false)

const basicSummary = computed(() => [
  { label: '取水方向：', value: formatBlankValue(weir.value.intakeDirection) },
  { label: '水系：', value: formatBlankValue(weir.value.riverSystem) },
  { label: '支線：', value: formatBlankValue(weir.value.branchLine) },
])

const waterRightSummary = computed(() => {
  if (!hasWaterRightNumber.value) {
    return [
      {
        label: '水權狀態：',
        value: formatBlankValue(weir.value.waterRightStatus ?? '無水權，申請中'),
      },
    ]
  }

  return [
    { label: '水權狀態：', value: formatBlankValue(weir.value.waterRightStatus) },
    { label: '水權狀號數：', value: formatBlankValue(weir.value.waterRightNumber) },
    { label: '申請日期：', value: formatMinguoDate(weir.value.applicationDate) },
    { label: '水權人姓名：', value: formatBlankValue(weir.value.waterRightOwner) },
    {
      label: '核准水權年限：',
      value: formatApprovedWaterRightPeriod(
        weir.value.approvedWaterRightStartDate,
        weir.value.approvedWaterRightEndDate,
      ),
    },
    { label: '用水標的：', value: formatBlankValue(weir.value.waterUsePurpose) },
    { label: '引用水源：', value: formatBlankValue(weir.value.referencedWaterSource ?? weir.value.waterSource) },
    {
      label: '用水範圍：',
      value: formatBlankValue(weir.value.waterUseArea),
      action: 'waterUseArea',
    },
    { label: '使用方法：', value: formatBlankValue(weir.value.waterUseMethod) },
    { label: '引水地點：', value: formatBlankValue(weir.value.intakeLocation) },
    { label: '退水地點：', value: weir.value.returnWaterLocation ?? '' },
    { label: '水頭高度(水力用)：', value: formatBlankValue(weir.value.hydraulicHeadHeight), unit: '公尺' },
    { label: '水井深度(地下水用)：', value: formatBlankValue(weir.value.groundwaterWellDepth), unit: '公尺' },
    { label: '登記主管機關：', value: formatBlankValue(weir.value.registrationAuthority) },
  ]
})

const summaryBeforeMonthlyWaterUse = computed(() => {
  const returnWaterLocationIndex = waterRightSummary.value.findIndex(
    (item) => item.label === '退水地點：',
  )

  if (returnWaterLocationIndex === -1) {
    return [...basicSummary.value, ...waterRightSummary.value]
  }

  return [
    ...basicSummary.value,
    ...waterRightSummary.value.slice(0, returnWaterLocationIndex + 1),
  ]
})

const summaryAfterMonthlyWaterUse = computed(() => {
  const returnWaterLocationIndex = waterRightSummary.value.findIndex(
    (item) => item.label === '退水地點：',
  )

  if (returnWaterLocationIndex === -1) {
    return []
  }

  return waterRightSummary.value.slice(returnWaterLocationIndex + 1)
})

const monthlyWaterUseRows = computed(() => weir.value.monthlyWaterUse ?? [])

const monthlyWaterUseSections = computed(() => {
  const rows = monthlyWaterUseRows.value

  return [rows.slice(0, 6), rows.slice(6, 12)].filter((section) => section.length)
})

const monthlyWaterUseRowDefinitions = [
  { label: '每月引水日數(日)', key: 'monthlyIntakeDays' },
  { label: '引用水量(每秒立方公尺)', key: 'waterVolumePerSecond' },
  { label: '每日用水時間(小時)', key: 'dailyWaterUseHours' },
]
</script>

<template>
  <dl class="detail-list">
    <div v-for="item in summaryBeforeMonthlyWaterUse" :key="item.label">
      <dt>{{ item.label }}</dt>
      <dd :class="{ 'detail-action-value': item.action === 'waterUseArea' }">
        <template v-if="item.action === 'waterUseArea'">
          <span class="detail-value-text">{{ item.value }}</span>
          <el-button
            class="water-use-area-button"
            type="primary"
            plain
            @click="waterUseAreaDialogVisible = true"
          >
            展示用水範圍
          </el-button>
        </template>
        <template v-else>
          {{ item.value }}
          <span v-if="item.unit">{{ item.unit }}</span>
        </template>
      </dd>
    </div>
  </dl>

  <div v-if="hasWaterRightNumber && monthlyWaterUseRows.length" class="detail-table-wrap monthly-water-use-wrap">
    <table
      v-for="(section, sectionIndex) in monthlyWaterUseSections"
      :key="sectionIndex"
      class="detail-table monthly-water-use-table"
    >
      <tbody>
        <tr>
          <th scope="row">月別</th>
          <td v-for="row in section" :key="row.month">
            {{ formatBlankValue(row.month) }}
          </td>
        </tr>
        <tr v-for="definition in monthlyWaterUseRowDefinitions" :key="definition.key">
          <th scope="row">{{ definition.label }}</th>
          <td v-for="row in section" :key="`${definition.key}-${row.month}`">
            {{ formatBlankValue(row[definition.key]) }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>

  <dl v-if="summaryAfterMonthlyWaterUse.length" class="detail-list">
    <div v-for="item in summaryAfterMonthlyWaterUse" :key="item.label">
      <dt>{{ item.label }}</dt>
      <dd>
        {{ item.value }}
        <span v-if="item.unit">{{ item.unit }}</span>
      </dd>
    </div>
  </dl>

  <el-dialog
    v-model="waterUseAreaDialogVisible"
    class="water-use-area-dialog"
    title="展示用水範圍"
    width="min(760px, calc(100vw - 32px))"
    append-to-body
  >
    <p class="water-use-area-description">
      {{ formatBlankValue(weir.waterUseArea) }}
    </p>
    <div class="water-use-area-map" aria-label="用水範圍示意圖">
      <svg viewBox="0 0 640 360" role="img" aria-label="用水範圍多邊形示意">
        <rect width="640" height="360" rx="14" />
        <path class="water-use-area-river" d="M-20 255 C 100 210, 160 300, 280 248 S 470 178, 660 220" />
        <polygon
          class="water-use-area-polygon"
          points="222,92 442,116 492,242 340,300 184,226"
        />
        <circle class="water-use-area-point" cx="270" cy="178" r="8" />
      </svg>
    </div>
  </el-dialog>
</template>
