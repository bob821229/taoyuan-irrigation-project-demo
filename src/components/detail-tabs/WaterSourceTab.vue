<script setup>
import { computed, reactive } from 'vue'
import { createSummaryItem, formatValue } from './tabFormatters'

const props = defineProps({
  info: {
    type: Object,
    required: true,
  },
})

const source = computed(() => props.info.waterSource ?? {})
const rows = computed(() => source.value.rows ?? [])
const expandedSections = reactive({
  canal: false,
  weir: false,
  pond: false,
})

const canalRows = computed(() => rows.value.filter((row) => row.sourceType === '渠道'))
const weirRows = computed(() => rows.value.filter((row) => row.sourceType === '河水堰'))
const pondRows = computed(() => {
  const explicitRows = source.value.pondRows

  if (explicitRows?.length) {
    return explicitRows
  }

  if (props.info.pond) {
    return [{
      name: props.info.name,
      time: props.info.pond.updatedAt,
      maxStorage: props.info.pond.maxStorage,
      effectiveStorage: props.info.pond.effectiveStorage,
      storageRate: props.info.pond.storageRate,
    }]
  }

  return props.info.ponds ?? []
})

const pondSummarySource = computed(() => source.value.pondSummary ?? {
  count: props.info.pondCount ?? pondRows.value.length,
  maxStorage: props.info.maxStorage,
  effectiveStorage: props.info.effectiveStorage,
  storageRate: props.info.storageRate,
  unit: '萬噸',
})

const hasCanal = computed(() => canalRows.value.length > 0)
const hasWeir = computed(() => weirRows.value.length > 0)
const hasPond = computed(() => pondRows.value.length > 0)

const pondSummary = computed(() => [
  createSummaryItem('埤塘數：', pondSummarySource.value.count, '口'),
  createSummaryItem('最大蓄水量：', pondSummarySource.value.maxStorage, pondSummarySource.value.unit ?? '萬噸'),
  createSummaryItem('有效蓄水量：', pondSummarySource.value.effectiveStorage, pondSummarySource.value.unit ?? '萬噸'),
  createSummaryItem('蓄水率：', pondSummarySource.value.storageRate, '%'),
])
</script>

<template>
  <section v-if="hasCanal" class="detail-section">
    <h3>來自於渠道直灌</h3>
    <dl class="detail-list">
      <div>
        <dt>渠道數：</dt>
        <dd>{{ canalRows.length }}<span>個</span></dd>
      </div>
    </dl>
    <div class="detail-actions">
      <el-button
        class="expand-button"
        circle
        type="primary"
        :aria-expanded="expandedSections.canal"
        aria-label="展開渠道水源表格"
        @click="expandedSections.canal = !expandedSections.canal"
      >
        {{ expandedSections.canal ? '-' : '+' }}
      </el-button>
    </div>
    <div v-if="expandedSections.canal" class="detail-table-wrap">
      <table class="detail-table">
        <thead>
          <tr>
            <th>序號</th>
            <th>名稱</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(row, rowIndex) in canalRows" :key="rowIndex">
            <td>{{ rowIndex + 1 }}</td>
            <td>{{ row.sourceName }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>

  <section v-if="hasWeir" class="detail-section">
    <h3>來自於河水堰直灌</h3>
    <dl class="detail-list">
      <div>
        <dt>河水堰數：</dt>
        <dd>{{ weirRows.length }}<span>個</span></dd>
      </div>
    </dl>
    <div class="detail-actions">
      <el-button
        class="expand-button"
        circle
        type="primary"
        :aria-expanded="expandedSections.weir"
        aria-label="展開河水堰水源表格"
        @click="expandedSections.weir = !expandedSections.weir"
      >
        {{ expandedSections.weir ? '-' : '+' }}
      </el-button>
    </div>
    <div v-if="expandedSections.weir" class="detail-table-wrap">
      <table class="detail-table">
        <thead>
          <tr>
            <th>序號</th>
            <th>河水堰名稱</th>
            <th>取水方向</th>
            <th>水系</th>
            <th>支線</th>
            <th>水源</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(row, rowIndex) in weirRows" :key="rowIndex">
            <td>{{ rowIndex + 1 }}</td>
            <td>{{ row.sourceName }}</td>
            <td>{{ row.intakeDirection ?? '-' }}</td>
            <td>{{ row.riverSystem ?? '-' }}</td>
            <td>{{ row.branchLine ?? '-' }}</td>
            <td>{{ row.waterSource ?? '-' }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>

  <section v-if="hasPond" class="detail-section">
    <h3>來自於埤塘</h3>
    <dl class="detail-list">
      <div v-for="item in pondSummary" :key="item.label">
        <dt>{{ item.label }}</dt>
        <dd>
          {{ item.value }}
          <span v-if="item.unit">{{ item.unit }}</span>
        </dd>
      </div>
    </dl>
    <div class="detail-actions">
      <el-button
        class="expand-button"
        circle
        type="primary"
        :aria-expanded="expandedSections.pond"
        aria-label="展開埤塘水源表格"
        @click="expandedSections.pond = !expandedSections.pond"
      >
        {{ expandedSections.pond ? '-' : '+' }}
      </el-button>
    </div>
    <div v-if="expandedSections.pond" class="detail-table-wrap">
      <table class="detail-table">
        <thead>
          <tr>
            <th>序號</th>
            <th>名稱</th>
            <th>資料時間</th>
            <th>最大蓄水量</th>
            <th>有效蓄水量</th>
            <th>蓄水率</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(row, rowIndex) in pondRows" :key="rowIndex">
            <td>{{ rowIndex + 1 }}</td>
            <td>{{ row.name }}</td>
            <td>{{ formatValue(row.time) }}</td>
            <td>{{ formatValue(row.maxStorage) }}</td>
            <td>{{ formatValue(row.effectiveStorage) }}</td>
            <td>{{ formatValue(row.storageRate) }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>

  <p v-if="!hasCanal && !hasWeir && !hasPond" class="detail-empty">暫無水源資訊</p>
</template>
