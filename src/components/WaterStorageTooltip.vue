<script setup>
import { computed } from 'vue'
import WaterJar from './WaterJar.vue'

const props = defineProps({
  visible: {
    type: Boolean,
    default: false,
  },
  x: {
    type: Number,
    default: 0,
  },
  y: {
    type: Number,
    default: 0,
  },
  title: {
    type: String,
    required: true,
  },
  percent: {
    type: Number,
    required: true,
  },
  storage: {
    type: Number,
    required: true,
  },
  maxStorage: {
    type: Number,
    required: true,
  },
  unit: {
    type: String,
    default: '萬噸',
  },
  time:{
    type: String,
    required: true,
  }
})

const formatNumber = (value) => {
  return new Intl.NumberFormat('zh-TW').format(value)
}

const clampedPercent = computed(() => Math.min(100, Math.max(0, props.percent)))

const percentTextClass = computed(() => ({
  'is-low-water': clampedPercent.value < 50,
}))
</script>

<template>
  <div
    v-show="visible"
    class="water-storage-tooltip"
    :style="{ left: `${x}px`, top: `${y}px` }"
  >
    <div class="water-storage-title">{{ title }}</div>
    <div class="water-storage-jar-wrap">
      <WaterJar
        class="water-storage-jar"
        :value="clampedPercent"
        color="#48aeea"
        shape="circle"
      />
      <div class="water-storage-percent" :class="percentTextClass">
        {{ clampedPercent }}%
      </div>
    </div>
    <div class="water-storage-label">時間</div>
    <div class="water-storage-value">
      {{ time }}
    </div>
    <div class="water-storage-label">有效蓄水量</div>
    <div class="water-storage-value">
      {{ formatNumber(props.storage) }}<span>/{{ unit }}</span>
    </div>
  </div>
</template>
