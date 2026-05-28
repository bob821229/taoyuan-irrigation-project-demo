<script setup>
import { computed } from 'vue'

const props = defineProps({
  info: {
    type: Object,
    required: true,
  },
})

const location = computed(() => props.info.location ?? {})
const coordinateText = computed(() => {
  return `${location.value.longitude},${location.value.latitude}`
})
const mapSrc = computed(() => {
  const latitude = location.value.latitude
  const longitude = location.value.longitude

  return `https://maps.google.com/maps?q=${latitude},${longitude}&z=16&output=embed`
})
</script>

<template>
  <dl class="detail-list">
    <div>
      <dt>座標：</dt>
      <dd>{{ coordinateText }}</dd>
    </div>
  </dl>

  <div class="location-map-frame">
    <iframe
      :src="mapSrc"
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
      title="位置地圖"
    />
  </div>
</template>
