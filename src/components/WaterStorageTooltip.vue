<script setup>
import { computed } from 'vue'

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
})

const formatNumber = (value) => {
  return new Intl.NumberFormat('zh-TW').format(value)
}

const percentTextClass = computed(() => ({
  'is-low-water': props.percent < 50,
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
      <ui-water-jar
        class="water-storage-jar"
        :value="percent"
        color="#48aeea"
        shape="circle"
      />
      <div class="water-storage-percent" :class="percentTextClass">
        {{ percent }}%
      </div>
    </div>
    <div class="water-storage-label">有效蓄水量</div>
    <div class="water-storage-value">
      {{ formatNumber(props.storage) }}<span>/{{ unit }}</span>
    </div>
  </div>
</template>
