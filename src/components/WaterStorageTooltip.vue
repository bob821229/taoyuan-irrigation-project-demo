<script setup>
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
  time: {
    type: String,
    required: true,
  },
})

const formatNumber = (value) => {
  return new Intl.NumberFormat('zh-TW').format(value)
}
</script>

<template>
  <div
    v-show="visible"
    class="water-storage-tooltip"
    :style="{ left: `${x}px`, top: `${y}px` }"
  >
    <dl>
      <div>
        <dt>名稱:</dt>
        <dd>{{ title }}</dd>
      </div>
      <div>
        <dt>時間:</dt>
        <dd>{{ time }}</dd>
      </div>
      <div>
        <dt>水位:</dt>
        <dd>{{ percent }}%</dd>
      </div>
      <div>
        <dt>有效水量:</dt>
        <dd>{{ formatNumber(props.storage) }}{{ unit }}</dd>
      </div>
    </dl>
  </div>
</template>
