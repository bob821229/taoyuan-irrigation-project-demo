<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import irrigationSvg from '../../桃園管理處_湖口工作站_20260518_01_第一層_桃園管理處灌區.svg?raw'
import { fetchStationDetail } from '../api/stationDetailApi'
import StationDetailDialog from '../components/StationDetailDialog.vue'

const router = useRouter()
const detailVisible = ref(false)
const detailInfo = ref(null)
const selectedIrrigationArea = ref('桃園管理處灌區')

const openDetail = async (id) => {
  detailInfo.value = await fetchStationDetail(id)
  detailVisible.value = true
}

const goToHukouLayer = () => {
  router.push({ name: 'hukou' })
}

const handleMapClick = async (event) => {
  const target = event.target instanceof Element ? event.target : null
  const clickedTarget = target?.closest('#ISTD303009001_door, #ISTD303009001')

  if (!clickedTarget) {
    return
  }

  if (clickedTarget.id === 'ISTD303009001_door') {
    goToHukouLayer()
    return
  }

  await openDetail('ISTD303009001')
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
        <div class="map-canvas home-map-canvas">
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

  <StationDetailDialog
    v-if="detailInfo"
    v-model="detailVisible"
    :info="detailInfo"
  />
</template>

