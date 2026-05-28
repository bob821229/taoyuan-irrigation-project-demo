<script setup>
import { computed, ref } from 'vue'
import { createSummaryItem } from './tabFormatters'

const props = defineProps({
  info: {
    type: Object,
    required: true,
  },
})

const source = computed(() => props.info.waterSource ?? {})
const expanded = ref(false)
const summary = computed(() => [
  createSummaryItem('來自渠道：', source.value.fromCanalCount, '個'),
  createSummaryItem('來自河水堰：', source.value.fromWeirCount, '個'),
  createSummaryItem('來自埤塘：', source.value.fromPondCount, '個'),
])
const rows = computed(() => source.value.rows ?? [])
</script>

<template>
  <dl class="detail-list">
    <div v-for="item in summary" :key="item.label">
      <dt>{{ item.label }}</dt>
      <dd>
        {{ item.value }}
        <span v-if="item.unit">{{ item.unit }}</span>
      </dd>
    </div>
  </dl>

  <div v-if="rows.length" class="detail-actions">
    <el-button
      class="expand-button"
      circle
      type="primary"
      :aria-expanded="expanded"
      aria-label="展開水源資訊表格"
      @click="expanded = !expanded"
    >
      {{ expanded ? '-' : '+' }}
    </el-button>
  </div>

  <div v-if="expanded" class="detail-table-wrap water-source-table-wrap">
    <table class="detail-table">
      <thead>
        <tr>
          <th>序</th>
          <th>水源別</th>
          <th>水源名稱</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="row in rows" :key="row.no">
          <td>{{ row.no }}</td>
          <td>{{ row.sourceType }}</td>
          <td>{{ row.sourceName }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
