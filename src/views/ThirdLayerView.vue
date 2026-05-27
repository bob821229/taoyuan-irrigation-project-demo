<script setup>
import { nextTick, onBeforeUnmount, onMounted, ref } from 'vue'
import irrigationSvg from '../../桃園管理處_湖口工作站_20260525_01_第三層_光復圳1支線灌區-12.svg?raw'
import { fetchStationDetail } from '../api/stationDetailApi'
import MapLegend from '../components/MapLegend.vue'
import StationDetailDialog from '../components/StationDetailDialog.vue'
import { canalMonitorDetails } from '../data/canalMonitorDetails'
import { stationDetails } from '../data/stationDetails'
import { waterStorageDetails } from '../data/waterStorageDetails'
import {
  applySvgFlowEffects,
  defaultSvgFlowRules,
} from '../utils/svgFlowEffects'
import { applySvgInfoTooltips } from '../utils/svgInfoTooltip'

const defaultLegendFilters = {
  pondHigh: true,
  pondMidHigh: true,
  pondMidLow: true,
  pondLow: true,
  harvest: true,
  paddy: true,
  seedling: true,
  tilling: true,
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
const irrigationGroupDetails = stationDetails.filter((detail) => {
  return detail.id.startsWith('grp_') && detail.cropStage
})

const irrigationMapRef = ref(null)
const mapValueLabels = ref([])
const detailVisible = ref(false)
const detailInfo = ref(null)
const legendFilters = ref({ ...defaultLegendFilters })

const openDetail = async (id) => {
  const hasDetail = stationDetails.some((detail) => detail.id === id)

  if (!hasDetail) {
    window.alert(`暫無該筆資料：${id}`)
    return
  }

  detailInfo.value = await fetchStationDetail(id)
  detailVisible.value = true
}

const getPayloadId = (id) => id.replace(/_info$/, '')

const getInfoClickTarget = (target) => {
  if (!target) {
    return null
  }

  return target.closest('[id$="_info"]')
}

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
        text: `${formatNumber(detail.storage)}${detail.unit}(${detail.percent}%)`,
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

  irrigationGroupDetails.forEach((detail) => {
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
  const clickedTarget = getInfoClickTarget(target)

  if (!clickedTarget) {
    return
  }

  await openDetail(getPayloadId(clickedTarget.id))
}

onMounted(async () => {
  await nextTick()
  applySvgInfoTooltips(irrigationMapRef.value)
  applySvgFlowEffects(irrigationMapRef.value, {
    rules: defaultSvgFlowRules,
    duration: '0.5s',
  })
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
            v-html="irrigationSvg"
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
