<script setup>
defineProps({
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
  info: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <div
    v-show="visible"
    class="canal-info-tooltip"
    :style="{ left: `${x}px`, top: `${y}px` }"
  >
    <dl>
      <div>
        <dt>名稱:</dt>
        <dd>{{ info.name }}</dd>
      </div>
      <div>
        <dt>時間:</dt>
        <dd>{{ info.time }}</dd>
      </div>
      <div>
        <dt>水位:</dt>
        <dd>{{ info.waterLevel }}{{ info.waterLevelUnit }}</dd>
      </div>
      <div>
        <dt>流量:</dt>
        <dd>{{ info.flow }}{{ info.flowUnit }}</dd>
      </div>
    </dl>
  </div>
</template>
