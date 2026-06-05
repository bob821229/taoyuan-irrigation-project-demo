<script setup>
import { computed, reactive } from 'vue'
import { createSummaryItem, formatBoolean, formatValue } from './tabFormatters'

const props = defineProps({
  info: {
    type: Object,
    required: true,
  },
})

const hasValue = (value) => value !== null && value !== undefined && value !== ''
const hasPositiveCount = (value) => hasValue(value) && Number(value) > 0
const expandedSections = reactive({
  group: false,
  pond: false,
})

const irrigation = computed(() => {
  if (Object.hasOwn(props.info.irrigationSupply ?? {}, 'group')) {
    return props.info.irrigationSupply.group
  }

  return {}
})

const pond = computed(() => {
  if (Object.hasOwn(props.info.irrigationSupply ?? {}, 'pond')) {
    return props.info.irrigationSupply.pond
  }

  return {}
})

const groupRows = computed(() => irrigation.value?.row ?? irrigation.value?.rows ?? [])
const pondRows = computed(() => pond.value?.row ?? pond.value?.rows ?? [])

const hasGroupSection = computed(() => {
  return hasValue(irrigation.value?.area)
    || hasPositiveCount(irrigation.value?.groupCount)
    || groupRows.value.length > 0
})
const hasPondSection = computed(() => hasPositiveCount(pond.value?.count) || pondRows.value.length > 0)
const hasIrrigationSupplyInfo = computed(() => hasGroupSection.value || hasPondSection.value)

const isSingleGroup = computed(() => Number(irrigation.value?.groupCount) === 1)
const isDirectIrrigationGroup = computed(() => {
  return groupRows.value[0]?.isDirectIrrigation || Number(irrigation.value?.directGroupCount) > 0
})

const groupSummary = computed(() => {
  if (isSingleGroup.value) {
    return [
      createSummaryItem(
        '灌溉面積：',
        irrigation.value?.area,
        isDirectIrrigationGroup.value ? '公頃(直灌區)' : '公頃',
      ),
    ]
  }

  return [
    createSummaryItem('小組數：', irrigation.value?.groupCount, '個'),
    createSummaryItem('灌溉面積：', irrigation.value?.area, '公頃'),
    createSummaryItem('直灌小組數：', irrigation.value?.directGroupCount, '個'),
    createSummaryItem('直灌面積：', irrigation.value?.directArea, '公頃'),
  ]
})

const pondSummary = computed(() => [
  createSummaryItem('埤塘數：', pond.value?.count, '口'),
  createSummaryItem('最大蓄水量：', pond.value?.maxStorage, '萬噸'),
  createSummaryItem('有效蓄水量：', pond.value?.effectiveStorage, '萬噸'),
  createSummaryItem('蓄水率：', pond.value?.storageRate, '%'),
])
</script>

<template>
  <section v-if="hasGroupSection" class="detail-section">
    <h3>灌溉水利小組</h3>
    <dl class="detail-list">
      <div v-for="item in groupSummary" :key="item.label">
        <dt>{{ item.label }}</dt>
        <dd>
          {{ item.value }}
          <span v-if="item.unit">{{ item.unit }}</span>
        </dd>
      </div>
    </dl>
    <div v-if="groupRows.length" class="detail-actions">
      <el-button
        class="expand-button"
        circle
        type="primary"
        :aria-expanded="expandedSections.group"
        aria-label="展開灌溉水利小組表格"
        @click="expandedSections.group = !expandedSections.group"
      >
        {{ expandedSections.group ? '-' : '+' }}
      </el-button>
    </div>
    <div v-if="expandedSections.group && groupRows.length" class="detail-table-wrap">
      <table class="detail-table">
        <thead>
          <tr>
            <th>序號</th>
            <th>組名稱</th>
            <th>灌溉面積</th>
            <th>是否為直灌區</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(row, rowIndex) in groupRows" :key="rowIndex">
            <td>{{ rowIndex + 1 }}</td>
            <td>{{ row.name }}</td>
            <td>{{ formatValue(row.irrigationArea) }}</td>
            <td>{{ formatBoolean(row.isDirectIrrigation) }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>

  <section v-if="hasPondSection" class="detail-section">
    <h3>灌溉埤塘</h3>
    <dl class="detail-list">
      <div v-for="item in pondSummary" :key="item.label">
        <dt>{{ item.label }}</dt>
        <dd>
          {{ item.value }}
          <span v-if="item.unit">{{ item.unit }}</span>
        </dd>
      </div>
    </dl>
    <div v-if="pondRows.length" class="detail-actions">
      <el-button
        class="expand-button"
        circle
        type="primary"
        :aria-expanded="expandedSections.pond"
        aria-label="展開灌溉埤塘表格"
        @click="expandedSections.pond = !expandedSections.pond"
      >
        {{ expandedSections.pond ? '-' : '+' }}
      </el-button>
    </div>
    <div v-if="expandedSections.pond && pondRows.length" class="detail-table-wrap">
      <table class="detail-table">
        <thead>
          <tr>
            <th>序號</th>
            <th>名稱</th>
            <th>資料時間</th>
            <th>最大蓄水量</th>
            <th>有效蓄水量</th>
            <th>蓄水率</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(row, rowIndex) in pondRows" :key="rowIndex">
            <td>{{ rowIndex + 1 }}</td>
            <td>{{ row.name }}</td>
            <td>{{ formatValue(row.time) }}</td>
            <td>{{ formatValue(row.maxStorage) }}</td>
            <td>{{ formatValue(row.effectiveStorage) }}</td>
            <td>{{ formatValue(row.storageRate) }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>

  <p v-if="!hasIrrigationSupplyInfo" class="detail-empty">暫無灌溉資訊</p>
</template>
