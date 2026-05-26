<script setup>
import { nextTick, onBeforeUnmount, onMounted, ref } from 'vue'
import irrigationSvg from '../../桃園管理處_湖口工作站_20260525_01_第三層_光復圳1支線灌區-12.svg?raw'
import { fetchCanalMonitorDetail } from '../api/canalMonitorApi'
import { fetchStationDetail } from '../api/stationDetailApi'
import { fetchWaterStorageDetail } from '../api/waterStorageApi'
import CanalInfoTooltip from '../components/CanalInfoTooltip.vue'
import MapLegend from '../components/MapLegend.vue'
import StationDetailDialog from '../components/StationDetailDialog.vue'
import WaterStorageTooltip from '../components/WaterStorageTooltip.vue'
import { canalMonitorDetails } from '../data/canalMonitorDetails'
import { waterStorageDetails } from '../data/waterStorageDetails'
import { applySvgInfoTooltips } from '../utils/svgInfoTooltip'

const clickableDetailIds = [
  'grp_03009001_info',
  'grp_03009002_info',
  'grp_03009003_info',
  'grp_03009004_info',
  'branch__03009001_info',
  'weir_03009002_info',
]
const waterStorageIds = [
  'pound_03009001',
  'pound_03009002',
  'pound_03009003',
  'pound_03009004',
]
const canalMonitorIds = [
  'sensor_03009001',
  'sensor_03009002',
  'sensor_03009006',
  'sensor_03009005',
]
const cropStageGroupIds = [
  'grp_03009001',
  'grp_03009002',
  'grp_03009003',
  'grp_03009004',
]

const defaultLegendFilters = {
  pondHigh: false,
  pondMidHigh: false,
  pondMidLow: false,
  pondLow: false,
  harvest: false,
  paddy: false,
  seedling: false,
  tilling: false,
  canalFlow: true,
  pondStorage: true,
}
const pondLegendStyles = {
  pondHigh: '#176f8d',
  pondMidHigh: '#00b050',
  pondMidLow: '#ffc000',
  pondLow: '#ff0000',
}
const cropStageLegendStyles = {
  收割期: { filterKey: 'harvest', color: '#a7f3c7' },
  本田期: { filterKey: 'paddy', color: '#f4f1ff' },
  抽穗期: { filterKey: 'seedling', color: '#fff6b8' },
  整田插秧期: { filterKey: 'tilling', color: '#ff8a8a' },
}
const groupStageDetails = cropStageGroupIds.map((id, index) => ({
  id,
  cropStage: waterStorageDetails[index]?.cropStage,
}))

const irrigationMapRef = ref(null)
const mapValueLabels = ref([])
const detailVisible = ref(false)
const detailInfo = ref(null)
const legendFilters = ref({ ...defaultLegendFilters })
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

const getPayloadId = (id) => id.replace(/_info$/, '')

const getPondLegendKey = (percent) => {
  if (percent > 75) {
    return 'pondHigh'
  }

  if (percent >= 50) {
    return 'pondMidHigh'
  }

  if (percent >= 25) {
    return 'pondMidLow'
  }

  return 'pondLow'
}

const setElementFill = (element, color) => {
  if (!element) {
    return
  }

  if (color) {
    element.style.fill = color
    return
  }

  element.style.removeProperty('fill')
}

const formatNumber = (value) => {
  return new Intl.NumberFormat('zh-TW').format(value)
}

const getMapLabelPosition = (id) => {
  const mapElement = irrigationMapRef.value
  const targetElement = mapElement?.querySelector(`#${id}`)

  if (!mapElement || !targetElement) {
    return null
  }

  const mapRect = mapElement.getBoundingClientRect()
  const targetRect = targetElement.getBoundingClientRect()

  return {
    x: targetRect.left - mapRect.left + targetRect.width / 2,
    y: targetRect.bottom - mapRect.top + 4,
  }
}

const updateMapValueLabels = () => {
  const pondLabels = waterStorageDetails
    .map((detail) => {
      const position = getMapLabelPosition(detail.id)

      if (!position) {
        return null
      }

      return {
        id: `pond-storage-${detail.id}`,
        type: 'pondStorage',
        text: `${formatNumber(detail.storage)}${detail.unit}`,
        ...position,
      }
    })
    .filter(Boolean)

  const canalLabels = canalMonitorDetails
    .map((detail) => {
      const position = getMapLabelPosition(detail.id)

      if (!position) {
        return null
      }

      return {
        id: `canal-flow-${detail.id}`,
        type: 'canalFlow',
        text: `${detail.flow}${detail.flowUnit}`,
        ...position,
      }
    })
    .filter(Boolean)

  mapValueLabels.value = [...pondLabels, ...canalLabels]
}

const applyLegendStyles = () => {
  const mapElement = irrigationMapRef.value

  if (!mapElement) {
    return
  }

  waterStorageDetails.forEach((detail) => {
    const legendKey = getPondLegendKey(detail.percent)
    const pondElement = mapElement.querySelector(`#${detail.id}`)
    const fillTarget = pondElement?.querySelector('path')
    const color = legendFilters.value[legendKey] ? pondLegendStyles[legendKey] : null

    setElementFill(fillTarget, color)
  })

  groupStageDetails.forEach((detail) => {
    const stageStyle = cropStageLegendStyles[detail.cropStage]
    const groupElement = mapElement.querySelector(`#${detail.id}`)
    const fillTarget = groupElement?.querySelector('rect')
    const color = stageStyle && legendFilters.value[stageStyle.filterKey] ? stageStyle.color : null

    setElementFill(fillTarget, color)
  })
}

const updateLegendFilters = async (filters) => {
  legendFilters.value = {
    ...legendFilters.value,
    ...filters,
  }

  await nextTick()
  applyLegendStyles()
  updateMapValueLabels()
}

const handleMapClick = async (event) => {
  const target = event.target instanceof Element ? event.target : null
  const clickedTarget = target?.closest(clickableDetailIds.map((id) => `#${id}`).join(', '))

  if (!clickedTarget) {
    return
  }

  await openDetail(getPayloadId(clickedTarget.id))
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

onMounted(async () => {
  await nextTick()
  applySvgInfoTooltips(irrigationMapRef.value)
  applyLegendStyles()
  updateMapValueLabels()
  window.addEventListener('resize', updateMapValueLabels)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', updateMapValueLabels)
})
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
            ref="irrigationMapRef"
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
          <span
            v-for="label in mapValueLabels"
            v-show="legendFilters[label.type]"
            :key="label.id"
            class="map-value-label"
            :style="{ left: `${label.x}px`, top: `${label.y}px` }"
          >
            {{ label.text }}
          </span>
          <MapLegend @update:filters="updateLegendFilters" />
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
