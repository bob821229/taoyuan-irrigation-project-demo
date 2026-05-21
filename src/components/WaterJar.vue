<script setup>
import { computed, useId } from 'vue'

const props = defineProps({
  value: {
    type: Number,
    default: 0,
  },
  color: {
    type: String,
    default: '#488aff',
  },
  shape: {
    type: String,
    default: 'circle',
  },
})

const maskId = `water-jar-mask-${useId().replace(/:/g, '')}`

const clampedValue = computed(() => Math.min(100, Math.max(0, props.value)))
const waterOffset = computed(() => 100 - clampedValue.value * 1.05)
const maskShape = computed(() => {
  return props.shape === 'rect' || props.shape === 'square' ? 'rect' : 'circle'
})
</script>

<template>
  <svg class="water-jar-svg" viewBox="0 0 100 100" aria-hidden="true">
    <defs>
      <mask :id="`${maskId}-circle`">
        <circle fill="white" r="50" cx="50" cy="50" />
      </mask>
      <mask :id="`${maskId}-rect`">
        <rect fill="white" x="0" y="0" width="100" height="100" />
      </mask>
      <symbol :id="`${maskId}-water`">
        <path
          d="M200,109.992l-200,0.008l0,-110.016c16.668,0.001 33.334,5.016 50,5.016c16.666,0 33.333,-5.015 50,-5.016c16.668,0.001 33.334,5.016 50,5.016c16.665,0 33.333,-5.015 50,-5.016l0,110.008Z"
        />
      </symbol>
    </defs>
    <g :mask="`url(#${maskId}-${maskShape})`">
      <rect fill="gray" fill-opacity="0.1" x="0" y="0" width="100" height="100" />
      <g class="water-jar-water" :transform="`translate(0, ${waterOffset})`">
        <use :href="`#${maskId}-water`" :fill="color" fill-opacity="0.5" width="200" height="110">
          <animate attributeType="XML" attributeName="x" from="0" to="-100" dur="1.4s" repeatCount="indefinite" />
        </use>
        <use :href="`#${maskId}-water`" :fill="color" width="200" height="110">
          <animate attributeType="XML" attributeName="x" from="-100" to="0" dur="0.7s" repeatCount="indefinite" />
        </use>
      </g>
    </g>
  </svg>
</template>

<style scoped>
.water-jar-svg {
  display: block;
  width: 100%;
  height: 100%;
}

.water-jar-water {
  transition: transform 300ms linear;
}

.water-jar-water > * {
  transition: fill 300ms linear;
}
</style>
