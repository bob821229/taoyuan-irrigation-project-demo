<script setup>
import { computed } from 'vue'

const props = defineProps({
  info: {
    type: Object,
    required: true,
  },
})

const source = computed(() => props.info.waterSource ?? {})
const intakeChannelSource = computed(() => source.value.intakeChannel ?? {})
const pondSummarySource = computed(() => source.value.pondSummary ?? {})

const hasValue = (value) => value !== null && value !== undefined && value !== ''

const formatWaterSourceValue = (value) => {
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

const intakeChannelRows = computed(() => intakeChannelSource.value.row ?? intakeChannelSource.value.rows ?? [])

const toPondRow = (pond, name) => ({
  name: pond.name ?? name,
  time: pond.time ?? pond.updatedAt,
  maxStorage: pond.maxStorage,
  effectiveStorage: pond.effectiveStorage,
  storageRate: pond.storageRate,
})

const pondRows = computed(() => {
  return (pondSummarySource.value.row ?? pondSummarySource.value.rows ?? []).map((row) => toPondRow(row, row.name))
})

const toNumber = (value) => {
  if (typeof value === 'number') {
    return value
  }

  if (typeof value === 'string' && value.trim() !== '' && !Number.isNaN(Number(value))) {
    return Number(value)
  }

  return null
}

const sumPondColumn = (key) => {
  const values = pondRows.value.map((row) => toNumber(row[key])).filter((value) => value !== null)

  if (!values.length) {
    return null
  }

  return values.reduce((total, value) => total + value, 0)
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

const hasIntakeChannel = computed(() => intakeChannelRows.value.length > 0)
const hasPond = computed(() => pondRows.value.length > 0)
const hasPondSubtotal = computed(() => {
  return hasValue(pondSubtotal.value.maxStorage)
    || hasValue(pondSubtotal.value.effectiveStorage)
    || hasValue(pondSubtotal.value.storageRate)
})
</script>

<template>
  <section v-if="hasIntakeChannel" class="detail-section">
    <h3>引水渠道</h3>
    <div class="detail-table-wrap water-source-table-wrap">
      <table class="detail-table">
        <thead>
          <tr>
            <th>序號</th>
            <th>類別</th>
            <th>名稱</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(row, rowIndex) in intakeChannelRows" :key="rowIndex">
            <td>{{ rowIndex + 1 }}</td>
            <td>{{ formatWaterSourceValue(row.type) }}</td>
            <td>{{ formatWaterSourceValue(row.name) }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>

  <section v-if="hasPond" class="detail-section">
    <h3>埤塘</h3>
    <div class="detail-table-wrap water-source-table-wrap">
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
            <td>{{ formatWaterSourceValue(row.name) }}</td>
            <td>{{ formatWaterSourceValue(row.time) }}</td>
            <td>{{ formatWaterSourceValue(row.maxStorage) }}</td>
            <td>{{ formatWaterSourceValue(row.effectiveStorage) }}</td>
            <td>{{ formatWaterSourceValue(row.storageRate) }}</td>
          </tr>
          <tr v-if="hasPondSubtotal" class="water-source-subtotal-row">
            <th colspan="3" scope="row">小計</th>
            <td>{{ formatWaterSourceValue(pondSubtotal.maxStorage) }}</td>
            <td>{{ formatWaterSourceValue(pondSubtotal.effectiveStorage) }}</td>
            <td>{{ formatWaterSourceValue(pondSubtotal.storageRate) }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>

  <p v-if="!hasIntakeChannel && !hasPond" class="detail-empty">暫無水源資訊</p>
</template>
