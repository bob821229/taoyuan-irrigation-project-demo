<script setup>
import { ref } from 'vue'
import irrigationSvg from '../../桃園管理處_湖口工作站_20260520_01_第三層_光復圳1支線灌區.svg?raw'
import { fetchCanalMonitorDetail } from '../api/canalMonitorApi'
import { fetchStationDetail } from '../api/stationDetailApi'
import { fetchWaterStorageDetail } from '../api/waterStorageApi'
import CanalInfoTooltip from '../components/CanalInfoTooltip.vue'
import StationDetailDialog from '../components/StationDetailDialog.vue'
import WaterStorageTooltip from '../components/WaterStorageTooltip.vue'

const clickableDetailIds = [
  'ISTD403009001',
  'ISTD403009002',
  'ISTD403009003',
  'ISTD403009004',
]
const waterStorageIds = [
  'ISTD003009024',
  'ISTD003009025',
  'ISTD003009026',
  'ISTD003009027',
]
const canalMonitorIds = [
  'ISTD003009001',
  'ISTD003009002',
  'ISTD003009006',
  'ISTD003009005',
]
 
const detailVisible = ref(false)
const detailInfo = ref(null)
const waterStorageTooltip = ref({
  visible: false,
  x: 0,
  y: 0,
  id: null,
  data: null,
})
const canalInfoTooltip = ref({
  visible: false,
  x: 0,
  y: 0,
  id: null,
  data: null,
})

const openDetail = async (id) => {
  detailInfo.value = await fetchStationDetail(id)
  detailVisible.value = true
}

const handleMapClick = async (event) => {
  const target = event.target instanceof Element ? event.target : null
  const clickedTarget = target?.closest(clickableDetailIds.map((id) => `#${id}`).join(', '))

  if (!clickedTarget) {
    return
  }

  await openDetail(clickedTarget.id)
}

const showWaterStorageTooltip = async (event, id) => {
  const rect = event.currentTarget.getBoundingClientRect()
  const x = event.clientX - rect.left
  const y = event.clientY - rect.top

  if (waterStorageTooltip.value.id === id && waterStorageTooltip.value.data) {
    waterStorageTooltip.value = {
      ...waterStorageTooltip.value,
      visible: true,
      x,
      y,
    }
    return
  }

  waterStorageTooltip.value = {
    visible: true,
    x,
    y,
    id,
    data: await fetchWaterStorageDetail(id),
  }
}

const hideWaterStorageTooltip = () => {
  waterStorageTooltip.value = {
    ...waterStorageTooltip.value,
    visible: false,
  }
}

const showCanalInfoTooltip = async (event, id) => {
  const rect = event.currentTarget.getBoundingClientRect()
  const x = event.clientX - rect.left
  const y = event.clientY - rect.top

  if (canalInfoTooltip.value.id === id && canalInfoTooltip.value.data) {
    canalInfoTooltip.value = {
      ...canalInfoTooltip.value,
      visible: true,
      x,
      y,
    }
    return
  }

  canalInfoTooltip.value = {
    visible: true,
    x,
    y,
    id,
    data: await fetchCanalMonitorDetail(id),
  }
}

const hideCanalInfoTooltip = () => {
  canalInfoTooltip.value = {
    ...canalInfoTooltip.value,
    visible: false,
  }
}

const hideMapTooltips = () => {
  hideWaterStorageTooltip()
  hideCanalInfoTooltip()
}

const handleMapMouseMove = (event) => {
  const target = event.target instanceof Element ? event.target : null
  const hoveredWaterStorageTarget = target?.closest(waterStorageIds.map((id) => `#${id}`).join(', '))

  if (hoveredWaterStorageTarget) {
    hideCanalInfoTooltip()
    showWaterStorageTooltip(event, hoveredWaterStorageTarget.id)
    return
  }

  const hoveredCanalTarget = target?.closest(canalMonitorIds.map((id) => `#${id}`).join(', '))

  if (hoveredCanalTarget) {
    hideWaterStorageTooltip()
    showCanalInfoTooltip(event, hoveredCanalTarget.id)
    return
  }

  hideMapTooltips()
}
</script>

<template>
  <el-container class="app-shell">
    <el-header class="topbar">
      <div>
        <!-- <p class="eyebrow">桃園管理處 · 湖口工作站</p> -->
        <h1>光復圳1支線灌區</h1>
      </div>
    </el-header>

    <el-main class="content">
      <section class="map-stage" aria-label="光復圳1支線灌區 SVG 展示">
        <div class="map-canvas">
          <div
            class="irrigation-map"
            role="img"
            aria-label="桃園管理處湖口工作站第三層光復圳1支線灌區圖"
            @click="handleMapClick"
            @mouseleave="hideMapTooltips"
            @mousemove="handleMapMouseMove"
            v-html="irrigationSvg"
          />
          <WaterStorageTooltip
            v-if="waterStorageTooltip.data"
            :visible="waterStorageTooltip.visible"
            :x="waterStorageTooltip.x"
            :y="waterStorageTooltip.y"
            :title="waterStorageTooltip.data.title"
            :percent="waterStorageTooltip.data.percent"
            :time="waterStorageTooltip.data.time"
            :max-storage="waterStorageTooltip.data.maxStorage"
            :unit="waterStorageTooltip.data.unit"
            :storage="waterStorageTooltip.data.storage"
          />
          <CanalInfoTooltip
            v-if="canalInfoTooltip.data"
            :visible="canalInfoTooltip.visible"
            :x="canalInfoTooltip.x"
            :y="canalInfoTooltip.y"
            :info="canalInfoTooltip.data"
          />
        </div>
      </section>
    </el-main>
  </el-container>

  <StationDetailDialog
    v-if="detailInfo"
    v-model="detailVisible"
    :info="detailInfo"
  />
</template>
