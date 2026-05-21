<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import IrrigationDetailDialog from '../components/IrrigationDetailDialog.vue'
import { fetchIrrigationRecord } from '../data/irrigationApi'
import irrigationSvg from '../../桃園管理處_湖口工作站_20260519_01_第二層_湖口工作站灌區.svg?raw'

const router = useRouter()
const detailVisible = ref(false)
const selectedDetail = ref(null)

const goToGuangfuLayer = () => {
  router.push({ name: 'guangfu-1' })
}

const openDetail = async (id) => {
  selectedDetail.value = await fetchIrrigationRecord(id)
  detailVisible.value = Boolean(selectedDetail.value)
}

const getSvgPoint = (event) => {
  const rect = event.currentTarget.getBoundingClientRect()

  return {
    x: ((event.clientX - rect.left) / rect.width) * 960,
    y: ((event.clientY - rect.top) / rect.height) * 542,
  }
}

const isInside = ({ x, y }, box) =>
  x >= box.x1 && x <= box.x2 && y >= box.y1 && y <= box.y2

const handleMapClick = async (event) => {
  const target = event.target instanceof Element ? event.target : null
  const point = getSvgPoint(event)

  if (
    target?.closest('#ISTD603009001_door') ||
    isInside(point, { x1: 664, x2: 680, y1: 356, y2: 372 })
  ) {
    goToGuangfuLayer()
    return
  }

  const clickedTarget = target?.closest('#ISTD603009001')

  if (
    clickedTarget ||
    isInside(point, { x1: 610, x2: 690, y1: 260, y2: 420 })
  ) {
    await openDetail('ISTD603009001')
  }
}
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
        <div class="map-canvas" @click="handleMapClick">
          <button
            class="svg-hitbox hukou-detail-hitbox"
            type="button"
            aria-label="開啟光復圳灌區詳細資料"
            @click.stop="openDetail('ISTD603009001')"
          />
          <button
            class="svg-hitbox hukou-door-hitbox"
            type="button"
            aria-label="前往光復圳一支線"
            @click.stop="goToGuangfuLayer"
          />
          <div
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

  <IrrigationDetailDialog
    v-model="detailVisible"
    :detail="selectedDetail"
  />
</template>
