<script setup>
import { computed } from 'vue'
import { createSummaryItem } from './tabFormatters'

const props = defineProps({
  info: {
    type: Object,
    required: true,
  },
})

const weir = computed(() => props.info.weir ?? {})

const summary = computed(() => [
  createSummaryItem('取水方向：', weir.value.intakeDirection ?? '-'),
  createSummaryItem('水系：', weir.value.riverSystem ?? '-'),
  createSummaryItem('支線：', weir.value.branchLine ?? '-'),
  createSummaryItem('水源：', weir.value.waterSource ?? '-'),
])
</script>

<template>
  <dl class="detail-list">
    <div v-for="item in summary" :key="item.label">
      <dt>{{ item.label }}</dt>
      <dd>{{ item.value }}</dd>
    </div>
  </dl>
</template>
