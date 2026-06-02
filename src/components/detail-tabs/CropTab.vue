<script setup>
import { computed, ref } from 'vue'
import { createSummaryItem, formatValue } from './tabFormatters'

const props = defineProps({
  info: {
    type: Object,
    required: true,
  },
})

const expanded = ref(false)

const crop = computed(() => props.info.crop ?? {})
const years = computed(() => crop.value.years ?? [])
const yearCount = computed(() => years.value.length)
const cropPeriodLabel = computed(() => (years.value.includes('平均') ? '近 5 年及平均' : '近 5 年'))

const seasonValues = (values) => {
  const paddedValues = Array.isArray(values) ? values.slice(0, yearCount.value) : []

  while (paddedValues.length < yearCount.value) {
    paddedValues.push(null)
  }

  return paddedValues.map(formatValue)
}

const summary = computed(() => [
  createSummaryItem('小組數：', crop.value.groupCount ?? props.info.irrigationGroupCount, '個'),
  createSummaryItem(
    '農地湛水面積：',
    crop.value.recentFloodedArea,
    '公頃',
  ),
  createSummaryItem('農試所一期作：', crop.value.researchAverage?.firstSeason, '公頃'),
  createSummaryItem('農試所二期作：', crop.value.researchAverage?.secondSeason, '公頃'),
  createSummaryItem('農糧署一期作：', crop.value.agencyAverage?.firstSeason, '公頃'),
  createSummaryItem('農糧署二期作：', crop.value.agencyAverage?.secondSeason, '公頃'),
])

const rows = computed(() => {
  return (crop.value.rows ?? []).map((row) => [
    row.name,
    formatValue(row.floodedArea),
    ...seasonValues(row.researchFirstSeason),
    ...seasonValues(row.researchSecondSeason),
    ...seasonValues(row.agencyFirstSeason),
    ...seasonValues(row.agencySecondSeason),
  ])
})
</script>

<template>
  <dl class="detail-list crop-detail-list">
    <div v-for="item in summary" :key="item.label">
      <dt>{{ item.label }}</dt>
      <dd>
        {{ item.value }}
        <span v-if="item.unit">{{ item.unit }}</span>
      </dd>
    </div>
  </dl>

  <div v-if="rows.length" class="detail-actions">
    <el-button
      class="expand-button"
      circle
      type="primary"
      :aria-expanded="expanded"
      aria-label="展開作物資訊表格"
      @click="expanded = !expanded"
    >
      {{ expanded ? '-' : '+' }}
    </el-button>
  </div>

  <div v-if="expanded" class="detail-table-wrap crop-table-wrap">
    <table class="detail-table crop-table">
      <colgroup>
        <col class="crop-col-index">
        <col class="crop-col-name">
        <col class="crop-col-area">
        <col
          v-for="index in yearCount * 4"
          :key="index"
          class="crop-col-year"
        >
      </colgroup>
      <thead>
        <tr>
          <th rowspan="3">序號</th>
          <th rowspan="3">名稱</th>
          <th rowspan="3">
            <span class="table-header-line">{{ crop.floodedAreaDate }}</span>
            <span class="table-header-line">湛水面積</span>
            <span class="table-header-line">(公頃)</span>
          </th>
          <th :colspan="yearCount * 2">{{ cropPeriodLabel }}農試所農地土地水稻面積</th>
          <th :colspan="yearCount * 2">{{ cropPeriodLabel }}農糧署申報核定水稻平均面積</th>
        </tr>
        <tr>
          <th :colspan="yearCount">一期作</th>
          <th :colspan="yearCount">二期作</th>
          <th :colspan="yearCount">一期作</th>
          <th :colspan="yearCount">二期作</th>
        </tr>
        <tr>
          <template v-for="groupIndex in 4" :key="groupIndex">
            <th v-for="year in years" :key="`${groupIndex}-${year}`">{{ year }}</th>
          </template>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, rowIndex) in rows" :key="rowIndex">
          <td>{{ rowIndex + 1 }}</td>
          <td v-for="(cell, cellIndex) in row" :key="cellIndex">{{ cell }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
