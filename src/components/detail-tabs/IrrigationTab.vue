<script setup>
import { computed, ref } from 'vue'
import { createSummaryItem, formatBoolean, formatValue } from './tabFormatters'

const props = defineProps({
  info: {
    type: Object,
    required: true,
  },
})

const expanded = ref(false)
const irrigation = computed(() => props.info.irrigation ?? {})

const isSingleIrrigationGroup = computed(() => {
  return irrigation.value.groupCount === 1 && (irrigation.value.groups?.length ?? 0) === 1
})

const isDirectIrrigationGroup = computed(() => {
  return irrigation.value.groups?.[0]?.isDirectIrrigation || irrigation.value.directGroupCount > 0
})

const summary = computed(() => {
  if (irrigation.value.groupName && !irrigation.value.groups) {
    return [
      createSummaryItem('灌區名稱：', irrigation.value.groupName ?? props.info.name),
      createSummaryItem(
        '灌溉面積：',
        irrigation.value.area,
        irrigation.value.isDirectIrrigation ? '公頃(直灌區)' : '公頃',
      ),
    ]
  }

  if (isSingleIrrigationGroup.value) {
    return [
      createSummaryItem(
        '灌溉面積：',
        irrigation.value.area,
        isDirectIrrigationGroup.value ? '公頃(直灌區)' : '公頃',
      ),
    ]
  }

  return [
    createSummaryItem('小組數：', irrigation.value.groupCount, '個'),
    createSummaryItem('灌溉面積：', irrigation.value.area, '公頃'),
    createSummaryItem('直灌小組數：', irrigation.value.directGroupCount, '個'),
    createSummaryItem('直灌面積：', irrigation.value.directArea, '公頃'),
  ]
})

const rows = computed(() => {
  return (irrigation.value.groups ?? []).map((group) => [
    group.name,
    formatValue(group.irrigationArea),
    formatBoolean(group.isDirectIrrigation),
  ])
})
</script>

<template>
  <dl class="detail-list">
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
      aria-label="展開灌區資訊表格"
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
          <th>小組名稱</th>
          <th>灌溉面積(公頃)</th>
          <th>是否為直灌區</th>
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
