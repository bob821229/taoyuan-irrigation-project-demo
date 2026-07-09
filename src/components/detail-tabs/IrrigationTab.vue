<script setup>
import { computed, ref } from 'vue'

const props = defineProps({
  info: {
    type: Object,
    required: true,
  },
})

const expanded = ref(false)
const irrigation = computed(() => props.info.irrigation ?? {})

const isSingleIrrigationGroup = computed(() => {
  return Number(irrigation.value.groupCount) === 1
})

const getAreaValue = (source, primaryKey, fallbackKey) => {
  return source?.[primaryKey] ?? source?.[fallbackKey]
}

const formatIrrigationValue = (value) => {
  if (value === null || value === undefined || value === '') {
    return '-'
  }

  if (typeof value === 'number') {
    return new Intl.NumberFormat('zh-TW', {
      maximumFractionDigits: 2,
    }).format(value)
  }

  return value
}

const createIrrigationSummaryItem = (label, value, unit) => ({
  label,
  value: formatIrrigationValue(value),
  unit,
})

const summary = computed(() => {
  if (isSingleIrrigationGroup.value) {
    return [
      createIrrigationSummaryItem(
        '受益地面積：',
        getAreaValue(irrigation.value, 'benefitArea', 'area'),
        '公頃',
      ),
      createIrrigationSummaryItem(
        '幹線直灌面積：',
        getAreaValue(irrigation.value, 'mainLineDirectArea', 'directArea'),
        '公頃',
      ),
      createIrrigationSummaryItem(
        '支線直灌面積：',
        getAreaValue(irrigation.value, 'branchLineDirectArea', 'directArea'),
        '公頃',
      ),
      createIrrigationSummaryItem(
        '分線直灌面積：',
        getAreaValue(irrigation.value, 'lateralLineDirectArea', 'directArea'),
        '公頃',
      ),
    ]
  }

  return [
    createIrrigationSummaryItem('小組數：', irrigation.value.groupCount, '個'),
    createIrrigationSummaryItem(
      '受益地面積合計：',
      getAreaValue(irrigation.value, 'benefitArea', 'area'),
      '公頃',
    ),
    createIrrigationSummaryItem(
      '幹線直灌面積合計：',
      getAreaValue(irrigation.value, 'mainLineDirectArea', 'directArea'),
      '公頃',
    ),
    createIrrigationSummaryItem(
      '支線直灌面積合計：',
      getAreaValue(irrigation.value, 'branchLineDirectArea', 'directArea'),
      '公頃',
    ),
    createIrrigationSummaryItem(
      '分線直灌面積合計：',
      getAreaValue(irrigation.value, 'lateralLineDirectArea', 'directArea'),
      '公頃',
    ),
  ]
})

const rows = computed(() => {
  return (irrigation.value.groups ?? []).map((group) => [
    formatIrrigationValue(group.name),
    formatIrrigationValue(getAreaValue(group, 'benefitArea', 'irrigationArea')),
    formatIrrigationValue(getAreaValue(group, 'mainLineDirectArea', 'directArea')),
    formatIrrigationValue(getAreaValue(group, 'branchLineDirectArea', 'directArea')),
    formatIrrigationValue(getAreaValue(group, 'lateralLineDirectArea', 'directArea')),
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
      aria-label="展開小組資訊表格"
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
          <th>受益地面積(公頃)</th>
          <th>幹線直灌面積(公頃)</th>
          <th>支線直灌面積(公頃)</th>
          <th>分線直灌面積(公頃)</th>
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
