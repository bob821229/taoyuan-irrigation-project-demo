<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'

const props = defineProps({
  info: {
    type: Object,
    required: true,
  },
})

const refreshKey = ref(Date.now())
let refreshTimer = null

const imageUrl = computed(() => {
  const url = props.info.monitor?.imageUrl

  if (!url) {
    return ''
  }

  const separator = url.includes('?') ? '&' : '?'

  return `${url}${separator}t=${refreshKey.value}`
})

onMounted(() => {
  refreshTimer = window.setInterval(() => {
    refreshKey.value = Date.now()
  }, 5000)
})

onBeforeUnmount(() => {
  window.clearInterval(refreshTimer)
})
</script>

<template>
  <div v-if="imageUrl" class="monitor-preview">
    <img :src="imageUrl" alt="監測影像">
  </div>
  <p v-else class="detail-empty">暫無監測資訊</p>
</template>
