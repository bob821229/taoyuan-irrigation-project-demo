<script setup>
import { computed } from 'vue'

const props = defineProps({
  info: {
    type: Object,
    required: true,
  },
})

const hasValue = (value) => value !== null && value !== undefined && value !== ''

const formatIrrigationSupplyValue = (value) => {
  if (!hasValue(value)) {
    return '-'
  }

  if (typeof value === 'number') {
    return new Intl.NumberFormat('zh-TW', {
      maximumFractionDigits: 2,
    }).format(value)
  }

  return value
}

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

const hasGroupSection = computed(() => groupRows.value.length > 0)
const hasPondSection = computed(() => pondRows.value.length > 0)
const hasIrrigationSupplyInfo = computed(() => hasGroupSection.value || hasPondSection.value)

const sumPondColumn = (key) => {
  const numericValues = pondRows.value
    .map((row) => row?.[key])
    .filter((value) => typeof value === 'number')

  if (!numericValues.length) {
    return null
  }

  return numericValues.reduce((sum, value) => sum + value, 0)
}

const pondSubtotal = computed(() => {
  const maxStorage = sumPondColumn('maxStorage')
  const effectiveStorage = sumPondColumn('effectiveStorage')
  const storageRate = maxStorage && effectiveStorage !== null
    ? (effectiveStorage / maxStorage) * 100
    : null

  return {
    maxStorage,
    effectiveStorage,
    storageRate,
  }
})

const hasPondSubtotal = computed(() => {
  return hasValue(pondSubtotal.value.maxStorage)
    || hasValue(pondSubtotal.value.effectiveStorage)
    || hasValue(pondSubtotal.value.storageRate)
})
</script>

<template>
  <section v-if="hasGroupSection" class="detail-section">
    <h3>灌溉水利小組</h3>
    <div class="detail-table-wrap">
      <table class="detail-table">
        <thead>
          <tr>
            <th>序號</th>
            <th>小組名稱</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(row, rowIndex) in groupRows" :key="rowIndex">
            <td>{{ rowIndex + 1 }}</td>
            <td>{{ formatIrrigationSupplyValue(row.name) }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>

  <section v-if="hasPondSection" class="detail-section">
    <h3>灌溉埤塘</h3>
    <div class="detail-table-wrap">
      <table class="detail-table">
        <thead>
          <tr>
            <th>序號</th>
            <th>埤塘名稱</th>
            <th>資料時間</th>
            <th>最大蓄水量(萬噸)</th>
            <th>有效蓄水量(萬噸)</th>
            <th>蓄水率(%)</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(row, rowIndex) in pondRows" :key="rowIndex">
            <td>{{ rowIndex + 1 }}</td>
            <td>{{ formatIrrigationSupplyValue(row.name) }}</td>
            <td>{{ formatIrrigationSupplyValue(row.time) }}</td>
            <td>{{ formatIrrigationSupplyValue(row.maxStorage) }}</td>
            <td>{{ formatIrrigationSupplyValue(row.effectiveStorage) }}</td>
            <td>{{ formatIrrigationSupplyValue(row.storageRate) }}</td>
          </tr>
          <tr v-if="hasPondSubtotal">
            <th colspan="3" scope="row">小計</th>
            <td>{{ formatIrrigationSupplyValue(pondSubtotal.maxStorage) }}</td>
            <td>{{ formatIrrigationSupplyValue(pondSubtotal.effectiveStorage) }}</td>
            <td>{{ formatIrrigationSupplyValue(pondSubtotal.storageRate) }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>

  <p v-if="!hasIrrigationSupplyInfo" class="detail-empty">暫無灌溉資訊</p>
</template>
