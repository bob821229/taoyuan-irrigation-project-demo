<script setup>
import { ref } from 'vue'
import IrrigationDetailDialog from '../components/IrrigationDetailDialog.vue'
import MapHoverCard from '../components/MapHoverCard.vue'
import { fetchIrrigationRecord } from '../data/irrigationApi'
import irrigationSvg from '../../桃園管理處_湖口工作站_20260520_01_第三層_光復圳1支線灌區.svg?raw'
const detailTargetIds = new Set([
  'ISTD403009001',
  'ISTD403009002',
  'ISTD403009003',
  'ISTD403009004',
])

const hoverTargetIds = new Set([
  'ISTD003009024',
  'ISTD003009025',
  'ISTD003009026',
  'ISTD003009027',
  'ISTD003009001',
  'ISTD003009002',
  'ISTD003009006',
  'ISTD003009005',
])

const detailVisible = ref(false)
const selectedDetail = ref(null)
const hoverRecord = ref(null)
const hoverPosition = ref({ x: 0, y: 0 })
let hoverRequestId = 0

const findMatchedId = (target, ids) => {
  if (!(target instanceof Element)) {
    return null
  }

  for (const id of ids) {
    if (target.closest(`#${id}`)) {
      return id
    }
  }

  return null
}

const openDetail = async (id) => {
  selectedDetail.value = await fetchIrrigationRecord(id)
  detailVisible.value = Boolean(selectedDetail.value)
}

const handleMapClick = async (event) => {
  const id = findMatchedId(event.target, detailTargetIds)

  if (id) {
    await openDetail(id)
  }
}

const moveHoverCard = (event) => {
  hoverPosition.value = {
    x: Math.min(event.clientX + 18, window.innerWidth - 320),
    y: Math.min(event.clientY + 18, window.innerHeight - 320),
  }
}

const handleMapMove = async (event) => {
  const id = findMatchedId(event.target, hoverTargetIds)

  if (!id) {
    hoverRecord.value = null
    return
  }

  moveHoverCard(event)

  if (hoverRecord.value?.id === id) {
    return
  }

  const requestId = ++hoverRequestId
  const record = await fetchIrrigationRecord(id)

  if (requestId === hoverRequestId) {
    hoverRecord.value = record
  }
}

const clearHoverCard = () => {
  hoverRequestId += 1
  hoverRecord.value = null
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
        <div
          class="map-canvas"
          @click="handleMapClick"
          @mousemove="handleMapMove"
          @mouseleave="clearHoverCard"
        >
          <div
            class="irrigation-map"
            role="img"
            aria-label="桃園管理處湖口工作站第三層光復圳1支線灌區圖"
            @click="handleMapClick"
            @mousemove="handleMapMove"
            @mouseleave="clearHoverCard"
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
  <MapHoverCard
    :record="hoverRecord"
    :position="hoverPosition"
  />
</template>
