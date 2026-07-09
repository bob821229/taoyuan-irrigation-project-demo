<script setup>
import { computed } from 'vue'

const props = defineProps({
  info: {
    type: Object,
    required: true,
  },
})

const location = computed(() => props.info.location ?? {})

const hasValue = (value) => value !== null && value !== undefined && value !== ''

const formatLocationValue = (value) => {
  if (!hasValue(value)) {
    return '-'
  }

  if (typeof value === 'number') {
    return new Intl.NumberFormat('zh-TW', {
      maximumFractionDigits: 6,
      useGrouping: false,
    }).format(value)
  }

  return value
}

const wgs84Text = computed(() => {
  const x = location.value.wgs84?.x
  const y = location.value.wgs84?.y

  if (!hasValue(x) || !hasValue(y)) {
    return '-'
  }

  return `${formatLocationValue(x)},${formatLocationValue(y)}`
})

const tm97Text = computed(() => {
  const x = location.value.tm97?.x ?? location.value.tm97X ?? location.value.tm97Easting
  const y = location.value.tm97?.y ?? location.value.tm97Y ?? location.value.tm97Northing

  if (!hasValue(x) || !hasValue(y)) {
    return '-'
  }

  return `${formatLocationValue(x)},${formatLocationValue(y)}`
})

const mapSrc = computed(() => {
  const longitude = location.value.wgs84?.x
  const latitude = location.value.wgs84?.y

  if (!hasValue(latitude) || !hasValue(longitude)) {
    return ''
  }

  return `https://maps.google.com/maps?q=${latitude},${longitude}&z=16&t=k&output=embed`
})
</script>

<template>
  <dl class="detail-list">
    <div>
      <dt>WGS84：</dt>
      <dd>{{ wgs84Text }}</dd>
    </div>
    <div>
      <dt>TM97：</dt>
      <dd>{{ tm97Text }}</dd>
    </div>
  </dl>

  <div v-if="mapSrc" class="location-map-frame">
    <iframe
      :src="mapSrc"
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
      title="位置地圖"
    />
  </div>
</template>
