<script setup>
import { nextTick, onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import irrigationSvg from '../../桃園管理處_湖口工作站_20260525_01_第二層_湖口工作站灌區-13.svg?raw'
import { fetchDetail } from '../api/stationDetailApi'
import StationDetailDialog from '../components/StationDetailDialog.vue'
import { applySvgFlowEffects } from '../utils/svgFlowEffects'
import { normalizeSvgDetailId } from '../utils/svgDetailId'
import { applySvgInfoTooltips } from '../utils/svgInfoTooltip'

const router = useRouter()
const detailVisible = ref(false)
const detailInfo = ref(null)
const irrigationMapRef = ref(null)

const openDetail = async (rawId) => {
  const payload = normalizeSvgDetailId(rawId)

  if (!payload) {
    window.alert(`無法解析圖元代碼：${rawId}`)
    return
  }

  try {
    detailInfo.value = await fetchDetail(payload)
    detailVisible.value = true
  } catch {
    window.alert(`暫無該筆資料：${payload.type}_${payload.id}`)
  }
}

const goToGuangfuLayer = () => {
  router.push({ name: 'guangfu-1' })
}

const handleMapClick = async (event) => {
  const target = event.target instanceof Element ? event.target : null
  const clickedTarget = target?.closest(
    '#branch__03009001_nav, #branch__03009001_info, #stn_03009001_info',
  )

  if (!clickedTarget) {
    return
  }

  if (clickedTarget.id === 'branch__03009001_nav') {
    goToGuangfuLayer()
    return
  }

  await openDetail(clickedTarget.id)
}

onMounted(async () => {
  await nextTick()
  applySvgInfoTooltips(irrigationMapRef.value)
  applySvgFlowEffects(irrigationMapRef.value)
})
</script>

<template>
  <el-container class="app-shell">
    <el-header class="topbar">
      <div>
        <!-- <p class="eyebrow">桃園管理處 · 湖口工作站</p> -->
        <h1>湖口工作站灌區</h1>
      </div>
    </el-header>

    <el-main class="content">
      <section class="map-stage" aria-label="湖口工作站灌區 SVG 展示">
        <div class="map-canvas">
          <div
            ref="irrigationMapRef"
            class="irrigation-map"
            role="img"
            aria-label="桃園管理處湖口工作站第二層湖口工作站灌區圖"
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

