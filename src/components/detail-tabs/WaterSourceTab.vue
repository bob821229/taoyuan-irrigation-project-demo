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
const expandedSections = reactive({
  canal: false,
  weir: false,
  pond: false,
})

const canalSummarySource = computed(() => source.value.canalSummary ?? {})
const weirSummarySource = computed(() => source.value.weirSummary ?? {})
const pondSummarySource = computed(() => source.value.pondSummary ?? {})

const canalRows = computed(() => canalSummarySource.value.row ?? [])
const weirRows = computed(() => weirSummarySource.value.row ?? [])

const toPondRow = (pond, name) => ({
  name: pond.name ?? name,
  time: pond.time ?? pond.updatedAt,
  maxStorage: pond.maxStorage,
  effectiveStorage: pond.effectiveStorage,
  storageRate: pond.storageRate,
})

const pondRows = computed(() => {
  return (pondSummarySource.value.row ?? []).map((row) => toPondRow(row, row.name))
})

const hasWeir = computed(() => Number(weirSummarySource.value.count) > 0)
const hasCanal = computed(() => Number(canalSummarySource.value.count) > 0)
const hasPondSummaryCount = computed(() => (
  pondSummarySource.value.count !== null
  && pondSummarySource.value.count !== undefined
  && Number(pondSummarySource.value.count) > 0
))
const hasPond = computed(() => hasPondSummaryCount.value || pondRows.value.length > 0)

const pondSummary = computed(() => [
  createSummaryItem('埤塘數：', pondSummarySource.value.count, '口'),
  createSummaryItem('最大蓄水量：', pondSummarySource.value.maxStorage, '萬噸'),
  createSummaryItem('有效蓄水量：', pondSummarySource.value.effectiveStorage, '萬噸'),
  createSummaryItem('蓄水率：', pondSummarySource.value.storageRate, '%'),
])
</script>

<template>
  <section v-if="hasCanal" class="detail-section">
    <h3>來自於渠道直灌</h3>
    <dl class="detail-list">
      <div>
        <dt>渠道數：</dt>
        <dd>{{ canalSummarySource.count }}<span>個</span></dd>
      </div>
    </dl>
    <div v-if="canalRows.length" class="detail-actions">
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
        <dd>{{ weirSummarySource.count }}<span>個</span></dd>
      </div>
    </dl>
    <div v-if="weirRows.length" class="detail-actions">
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
    <div v-if="pondRows.length" class="detail-actions">
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
    <p v-else class="detail-empty">暫無埤塘資訊</p>
    <div v-if="expandedSections.pond && pondRows.length" class="detail-table-wrap">
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
