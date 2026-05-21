<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import irrigationSvg from '../../桃園管理處_湖口工作站_20260518_01_第一層_桃園管理處灌區.svg?raw'

const yearColumns = ['111', '112', '113', '114', '115']
const hukouStationInfo = {
  dialogTitle: '詳細資料',
  tabs: [
    {
      name: 'basic',
      label: '基本資訊',
      expandLabel: '展開基本資訊表格',
      summary: [
        { label: '灌區名稱：', value: '湖口站' },
        { label: '灌溉小組數：', value: '53', unit: '個' },
        { label: '灌溉面積：', value: '3,621', unit: '公頃' },
        { label: '直灌小組數：', value: '0', unit: '個' },
        { label: '直灌面積：', value: '0', unit: '公頃' },
      ],
      tables: [
        {
          headerRows: [
            [
              { label: '序號' },
              { label: '名稱' },
              { label: '灌溉面積(公頃)' },
              { label: '是否為直灌區' },
            ],
          ],
          rows: [
            ['1', '光復圳1-1號池塘小組', '78.86', '否'],
            ['2', '光復圳1-2號池塘小組', '33.31', '否'],
            ['3', '光復圳1-3號池塘小組', '35.05', '否'],
            ['4', '光復圳1-4號池塘小組', '53.41', '否'],
            ['...', '...', '...', '...'],
            ['53', '...', '...', '...'],
          ],
        },
      ],
    },
    {
      name: 'pond',
      label: '埤塘資訊',
      expandLabel: '展開埤塘資訊表格',
      summary: [
        { label: '埤塘數量：', value: '65', unit: '口' },
        { label: '總最大蓄水量：', value: '911', unit: '萬噸' },
        { label: '總有效蓄水量：', value: '236', unit: '萬噸' },
        { label: '總蓄水率：', value: '26', unit: '%' },
      ],
      tables: [
        {
          headerRows: [
            [
              { label: '序號' },
              { label: '名稱' },
              { label: '最大蓄水量(萬噸)' },
              { label: '有效蓄水量(萬噸)' },
              { label: '蓄水率(%)' },
            ],
          ],
          rows: [
            ['1', '光復圳1-1號池', '6.67', '3.78', '57'],
            ['2', '光復圳1-2號池', '9.67', '2.56', '26'],
            ['3', '光復圳1-3號池', '10.56', '3.53', '33'],
            ['4', '光復圳1-4號池', '11.14', '4.22', '38'],
            ['...', '...', '...', '...', '...'],
            ['65', '...', '...', '...', '...'],
          ],
        },
      ],
    },
    {
      name: 'crop',
      label: '作物資訊',
      expandLabel: '展開作物資訊表格',
      summaryClass: 'crop-detail-list',
      tableWrapClass: 'crop-table-wrap',
      summary: [
        { label: '近期(115/3/5)農試所農地湛水面積：', value: '2,878', unit: '公頃' },
        {
          label: '近5年農試所農地土地水稻平均面積：',
          lines: [
            { value: '一期作 1,372', unit: '公頃' },
            { value: '二期作 1,027', unit: '公頃' },
          ],
        },
        {
          label: '近5年農糧署申報核定水稻平均面積：',
          lines: [
            { value: '一期作 1,054', unit: '公頃' },
            { value: '二期作 1,372', unit: '公頃' },
          ],
        },
      ],
      tables: [
        {
          tableClass: 'crop-table',
          headerRows: [
            [
              { label: '序號', rowspan: 3 },
              { label: '名稱', rowspan: 3 },
              { lines: ['115/3/5', '湛水面積', '(公頃)'], rowspan: 3 },
              { label: '近 5 年農試所農地土地水稻面積', colspan: 10 },
              { label: '近 5 年農糧署申報核定水稻平均面積', colspan: 10 },
            ],
            [
              { label: '一期作', colspan: 5 },
              { label: '二期作', colspan: 5 },
              { label: '一期作', colspan: 5 },
              { label: '二期作', colspan: 5 },
            ],
            [
              ...yearColumns.map((year) => ({ label: year })),
              ...yearColumns.map((year) => ({ label: year })),
              ...yearColumns.map((year) => ({ label: year })),
              ...yearColumns.map((year) => ({ label: year })),
            ],
          ],
          rows: [
            ['1', '光復圳1-1號池塘小組', '20', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...'],
            ['2', '光復圳1-2號池塘小組', '18', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...'],
            ['3', '光復圳1-3號池塘小組', '15', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...'],
            ['4', '光復圳1-4號池塘小組', '33', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...'],
            ['...', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...'],
            ['53', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...'],
          ],
        },
      ],
    },
  ],
}

const router = useRouter()
const detailVisible = ref(false)
const selectedIrrigationArea = ref('桃園管理處灌區')
const expandedTables = ref(
  Object.fromEntries(hukouStationInfo.tabs.map((tab) => [tab.name, false])),
)

const openDetail = () => {
  detailVisible.value = true
}

const goToHukouLayer = () => {
  router.push({ name: 'hukou' })
}

const toggleTable = (name) => {
  expandedTables.value[name] = !expandedTables.value[name]
}

const handleMapClick = (event) => {
  const target = event.target instanceof Element ? event.target : null
  const clickedTarget = target?.closest('#ISTD303009001_door, #ISTD303009001')

  if (!clickedTarget) {
    return
  }

  if (clickedTarget.id === 'ISTD303009001_door') {
    goToHukouLayer()
    return
  }

  openDetail()
}
</script>

<template>
  <el-container class="app-shell">
    <el-header class="topbar">
      <div>
        <!-- <p class="eyebrow">桃園管理處</p> -->
        <h1>桃園管理處灌區</h1>
      </div>
    </el-header>

    <el-main class="content home-content">
      <div class="page-toolbar">
        <div class="area-selector">
          <span>灌區 :</span>
          <el-select
            v-model="selectedIrrigationArea"
            class="area-select"
            size="large"
          >
            <el-option label="桃園管理處灌區" value="桃園管理處灌區" />
          </el-select>
        </div>
      </div>
      <section class="map-stage" aria-label="桃園管理處灌區 SVG 展示">
        <div class="map-canvas">
          <div
            class="irrigation-map"
            role="img"
            aria-label="桃園管理處湖口工作站第一層桃園管理處灌區圖"
            @click="handleMapClick"
            v-html="irrigationSvg"
          />
        </div>
      </section>
    </el-main>
  </el-container>

  <el-dialog
    v-model="detailVisible"
    class="detail-dialog"
    :title="hukouStationInfo.dialogTitle"
    width="min(1440px, calc(100vw - 32px))"
  >
    <el-tabs model-value="basic" class="detail-tabs">
      <el-tab-pane
        v-for="tab in hukouStationInfo.tabs"
        :key="tab.name"
        :label="tab.label"
        :name="tab.name"
      >
        <dl class="detail-list" :class="tab.summaryClass">
          <div v-for="item in tab.summary" :key="item.label">
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
        <div class="detail-actions">
          <el-button
            class="expand-button"
            circle
            type="primary"
            :aria-expanded="expandedTables[tab.name]"
            :aria-label="tab.expandLabel"
            @click="toggleTable(tab.name)"
          >
            {{ expandedTables[tab.name] ? '-' : '+' }}
          </el-button>
        </div>
        <div
          v-if="expandedTables[tab.name]"
          class="detail-table-wrap"
          :class="tab.tableWrapClass"
        >
          <table
            v-for="(table, tableIndex) in tab.tables"
            :key="`${tab.name}-${tableIndex}`"
            class="detail-table"
            :class="table.tableClass"
          >
            <thead>
              <tr
                v-for="(headerRow, headerRowIndex) in table.headerRows"
                :key="`${tab.name}-${tableIndex}-header-${headerRowIndex}`"
              >
                <th
                  v-for="(cell, cellIndex) in headerRow"
                  :key="`${tab.name}-${tableIndex}-header-${headerRowIndex}-${cellIndex}`"
                  :colspan="cell.colspan"
                  :rowspan="cell.rowspan"
                >
                  <template v-if="cell.lines">
                    <span
                      v-for="line in cell.lines"
                      :key="line"
                      class="table-header-line"
                    >
                      {{ line }}
                    </span>
                  </template>
                  <template v-else>
                    {{ cell.label }}
                  </template>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(row, rowIndex) in table.rows" :key="rowIndex">
                <td v-for="(cell, index) in row" :key="`${rowIndex}-${index}`">
                  {{ cell }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </el-tab-pane>
    </el-tabs>
  </el-dialog>
</template>
