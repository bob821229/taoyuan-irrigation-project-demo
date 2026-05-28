<script setup>
import { computed, ref } from 'vue'
import { createSeasonLine, createSummaryItem, formatValue } from './tabFormatters'

const props = defineProps({
  info: {
    type: Object,
    required: true,
  },
})

const expanded = ref(false)

const crop = computed(() => props.info.crop ?? {})
const years = computed(() => crop.value.years ?? [])

const summary = computed(() => [
  createSummaryItem(
    `近期(${crop.value.floodedAreaDate})農試所農地湛水面積：`,
    crop.value.recentFloodedArea,
    '公頃',
  ),
  {
    label: '近5年農試所農地土地水稻平均面積：',
    lines: [
      createSeasonLine('一期作', crop.value.researchAverage?.firstSeason),
      createSeasonLine('二期作', crop.value.researchAverage?.secondSeason),
    ],
  },
  {
    label: '近5年農糧署申報核定水稻平均面積：',
    lines: [
      createSeasonLine('一期作', crop.value.agencyAverage?.firstSeason),
      createSeasonLine('二期作', crop.value.agencyAverage?.secondSeason),
    ],
  },
])

const rows = computed(() => {
  return (crop.value.rows ?? []).map((row) => [
    formatValue(row.no),
    row.name,
    formatValue(row.floodedArea),
    ...row.researchFirstSeason.map(formatValue),
    ...row.researchSecondSeason.map(formatValue),
    ...row.agencyFirstSeason.map(formatValue),
    ...row.agencySecondSeason.map(formatValue),
  ])
})
</script>

<template>
  <dl class="detail-list crop-detail-list">
    <div v-for="item in summary" :key="item.label">
      <dt>{{ item.label }}</dt>
      <dd>
        <template v-if="item.lines">
          <span
            v-for="line in item.lines"
            :key="line.value"
            class="detail-line"
          >
            {{ line.value }}<span>{{ line.unit }}</span>
          </span>
        </template>
        <template v-else>
          {{ item.value }}
          <span v-if="item.unit">{{ item.unit }}</span>
        </template>
      </dd>
    </div>
  </dl>

  <div v-if="rows.length" class="detail-actions">
    <el-button
      class="expand-button"
      circle
      type="primary"
      :aria-expanded="expanded"
      aria-label="展開作物資訊表格"
      @click="expanded = !expanded"
    >
      {{ expanded ? '-' : '+' }}
    </el-button>
  </div>

  <div v-if="expanded" class="detail-table-wrap crop-table-wrap">
    <table class="detail-table crop-table">
      <colgroup>
        <col class="crop-col-index">
        <col class="crop-col-name">
        <col class="crop-col-area">
        <col
          v-for="index in 20"
          :key="index"
          class="crop-col-year"
        >
      </colgroup>
      <thead>
        <tr>
          <th rowspan="3">序號</th>
          <th rowspan="3">名稱</th>
          <th rowspan="3">
            <span class="table-header-line">{{ crop.floodedAreaDate }}</span>
            <span class="table-header-line">湛水面積</span>
            <span class="table-header-line">(公頃)</span>
          </th>
          <th colspan="10">近 5 年農試所農地土地水稻面積</th>
          <th colspan="10">近 5 年農糧署申報核定水稻平均面積</th>
        </tr>
        <tr>
          <th colspan="5">一期作</th>
          <th colspan="5">二期作</th>
          <th colspan="5">一期作</th>
          <th colspan="5">二期作</th>
        </tr>
        <tr>
          <template v-for="groupIndex in 4" :key="groupIndex">
            <th v-for="year in years" :key="`${groupIndex}-${year}`">{{ year }}</th>
          </template>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, rowIndex) in rows" :key="rowIndex">
          <td v-for="(cell, cellIndex) in row" :key="cellIndex">{{ cell }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
