<script setup>
import { computed } from 'vue'
import { createSummaryItem } from './tabFormatters'

const props = defineProps({
  info: {
    type: Object,
    required: true,
  },
})

const hasValue = (value) => value !== null && value !== undefined && value !== ''
const hasPositiveCount = (value) => hasValue(value) && Number(value) > 0

const irrigation = computed(() => {
  if (Object.hasOwn(props.info.irrigationSupply ?? {}, 'group')) {
    return props.info.irrigationSupply.group
  }

  return props.info.irrigation ?? {}
})

const pond = computed(() => {
  if (Object.hasOwn(props.info.irrigationSupply ?? {}, 'pond')) {
    return props.info.irrigationSupply.pond
  }

  return props.info.pond ?? {}
})

const hasGroupSection = computed(() => hasValue(irrigation.value?.area))
const hasPondSection = computed(() => hasPositiveCount(pond.value?.count))

const groupSummary = computed(() => {
  const areaUnit = irrigation.value?.isDirectIrrigation ? '公頃(直灌區)' : '公頃'

  return [
    createSummaryItem('灌溉面積：', irrigation.value?.area, areaUnit),
  ]
})

const pondSummary = computed(() => [
  createSummaryItem('埤塘數：', pond.value?.count, '口'),
  createSummaryItem('最大蓄水量：', pond.value?.maxStorage, pond.value?.unit ?? '萬噸'),
  createSummaryItem('有效蓄水量：', pond.value?.effectiveStorage, pond.value?.unit ?? '萬噸'),
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
  </section>
</template>
