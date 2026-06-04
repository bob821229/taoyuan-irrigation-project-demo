<script setup>
import { computed } from 'vue'
import { formatValue } from './tabFormatters'

const props = defineProps({
  info: {
    type: Object,
    required: true,
  },
})

const sensor = computed(() => props.info.sensor ?? {})
const isWaterLevelMeter = computed(() => props.info.type === 'sensor')
const isPondStorage = computed(() => props.info.type === 'pound')
const isFlowAlert = computed(() => {
  const flow = Number(sensor.value.flow)
  const threshold = Number(sensor.value.waterLevelAlertThreshold)

  return Number.isFinite(flow) && Number.isFinite(threshold) && flow > threshold
})
</script>

<template>
  <dl v-if="isWaterLevelMeter" class="detail-list">
    <div>
      <dt>名稱：</dt>
      <dd>{{ sensor.name }}</dd>
    </div>
    <div>
      <dt>時間：</dt>
      <dd>{{ sensor.time }}</dd>
    </div>
    <div>
      <dt>水位：</dt>
      <dd>{{ formatValue(sensor.waterLevel) }}<span>{{ sensor.waterLevelUnit }}</span></dd>
    </div>
    <div :class="{ 'is-alert': isFlowAlert }">
      <dt>流量：</dt>
      <dd>{{ formatValue(sensor.flow) }}<span>{{ sensor.flowUnit }}</span></dd>
    </div>
    <div v-if="isFlowAlert" class="is-alert">
      <dt>異常說明：</dt>
      <dd>
        流量超過{{ formatValue(sensor.waterLevelAlertThreshold) }}
        <span>{{ sensor.flowUnit }}</span>
      </dd>
    </div>
  </dl>

  <dl v-else-if="isPondStorage" class="detail-list">
    <div>
      <dt>名稱：</dt>
      <dd>{{ sensor.name }}</dd>
    </div>
    <div>
      <dt>時間：</dt>
      <dd>{{ sensor.time }}</dd>
    </div>
    <div>
      <dt>最大蓄水量：</dt>
      <dd>{{ formatValue(sensor.maxStorage) }}<span>{{ sensor.storageUnit }}</span></dd>
    </div>
    <div>
      <dt>有效蓄水量：</dt>
      <dd>{{ formatValue(sensor.effectiveStorage) }}<span>{{ sensor.storageUnit }}</span></dd>
    </div>
    <div>
      <dt>蓄水率：</dt>
      <dd>{{ formatValue(sensor.storageRate) }}<span>%</span></dd>
    </div>
  </dl>

  <p v-else class="detail-empty">
    暫無感測資訊
  </p>
</template>

<style scoped>
.is-alert dt,
.is-alert dd {
  color: #ef4444;
}
</style>
