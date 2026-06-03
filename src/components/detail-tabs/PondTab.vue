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

const pondInfo = computed(() => props.info.pond)
const hasValue = (value) => value !== null && value !== undefined && value !== ''

const hasSinglePondInfo = computed(() => {
  if (!pondInfo.value) {
    return false
  }

  return [
    pondInfo.value.updatedAt,
    pondInfo.value.maxStorage,
    pondInfo.value.effectiveStorage,
    pondInfo.value.storageRate,
  ].some(hasValue)
})

const hasAggregatePondInfo = computed(() => {
  return [
    props.info.pondCount,
    props.info.maxStorage,
    props.info.effectiveStorage,
    props.info.storageRate,
  ].some(hasValue)
})

const summary = computed(() => {
  if (hasSinglePondInfo.value) {
    return [
      createSummaryItem('資料時間：', pondInfo.value.updatedAt),
      createSummaryItem('最大蓄水量：', pondInfo.value.maxStorage, pondInfo.value.unit ?? '萬噸'),
      createSummaryItem('有效蓄水量：', pondInfo.value.effectiveStorage, pondInfo.value.unit ?? '萬噸'),
      createSummaryItem('蓄水率：', pondInfo.value.storageRate, '%'),
    ]
  }

  if (hasAggregatePondInfo.value) {
    return [
      createSummaryItem('埤塘數量：', props.info.pondCount, '口'),
      createSummaryItem('總最大蓄水量：', props.info.maxStorage, '萬噸'),
      createSummaryItem('總有效蓄水量：', props.info.effectiveStorage, '萬噸'),
      createSummaryItem('總蓄水率：', props.info.storageRate, '%'),
    ]
  }

  return []
})

const rows = computed(() => {
  return (props.info.ponds ?? []).map((pond) => [
    pond.name,
    formatValue(pond.maxStorage),
    formatValue(pond.time),
    formatValue(pond.effectiveStorage),
    formatValue(pond.storageRate),
  ])
})
</script>

<template>
  <dl v-if="summary.length" class="detail-list">
    <div v-for="item in summary" :key="item.label">
      <dt>{{ item.label }}</dt>
      <dd>
        {{ item.value }}
        <span v-if="item.unit">{{ item.unit }}</span>
      </dd>
    </div>
  </dl>
  <p v-else class="detail-empty">暫無埤塘資訊</p>

  <div v-if="rows.length" class="detail-actions">
    <el-button
      class="expand-button"
      circle
      type="primary"
      :aria-expanded="expanded"
      aria-label="展開埤塘資訊表格"
      @click="expanded = !expanded"
    >
      {{ expanded ? '-' : '+' }}
    </el-button>
  </div>

  <div v-if="expanded" class="detail-table-wrap">
    <table class="detail-table">
      <thead>
        <tr>
          <th>序號</th>
          <th>名稱</th>
          <th>最大蓄水量(萬噸)</th>
          <th>資料時間</th>
          <th>有效蓄水量(萬噸)</th>
          <th>蓄水率(%)</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, rowIndex) in rows" :key="rowIndex">
          <td>{{ rowIndex + 1 }}</td>
          <td
            v-for="(cell, cellIndex) in row"
            :key="cellIndex"
          >
            {{ cell }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
