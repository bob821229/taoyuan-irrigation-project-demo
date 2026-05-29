<script setup>
import { computed, ref, watch } from 'vue'
import CropTab from './detail-tabs/CropTab.vue'
import IrrigationSupplyTab from './detail-tabs/IrrigationSupplyTab.vue'
import IrrigationTab from './detail-tabs/IrrigationTab.vue'
import LocationTab from './detail-tabs/LocationTab.vue'
import MediaTab from './detail-tabs/MediaTab.vue'
import MonitorTab from './detail-tabs/MonitorTab.vue'
import PondTab from './detail-tabs/PondTab.vue'
import SensorTab from './detail-tabs/SensorTab.vue'
import WaterSourceTab from './detail-tabs/WaterSourceTab.vue'
import WeirTab from './detail-tabs/WeirTab.vue'

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
  info: {
    type: Object,
    required: true,
  },
})

const emit = defineEmits(['update:modelValue'])

const visible = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value),
})

const activeTab = ref('')

const dialogTitle = computed(() => {
  const displayName = props.info.name ?? props.info.rawId

  return displayName ? `${displayName} 詳細資料` : '詳細資料'
})

const detailTabRegistry = {
  irrigation: {
    label: '小組資訊',
    component: IrrigationTab,
  },
  pond: {
    label: '埤塘資訊',
    component: PondTab,
  },
  weir: {
    label: '河水堰資訊',
    component: WeirTab,
  },
  irrigationSupply: {
    label: '灌溉資訊',
    component: IrrigationSupplyTab,
  },
  waterSource: {
    label: '水源資訊',
    component: WaterSourceTab,
  },
  crop: {
    label: '作物資訊',
    component: CropTab,
  },
  sensor: {
    label: '感測資訊',
    component: SensorTab,
  },
  media: {
    label: '影像資訊',
    component: MediaTab,
  },
  location: {
    label: '位置資訊',
    component: LocationTab,
  },
  monitor: {
    label: '監測資訊',
    component: MonitorTab,
  },
}

const fallbackTabs = ['irrigation', 'waterSource', 'crop']

const availableTabKeys = computed(() => {
  return props.info.availableTabs?.length ? props.info.availableTabs : fallbackTabs
})

const detailTabs = computed(() => {
  return availableTabKeys.value
    .map((key) => ({
      key,
      ...detailTabRegistry[key],
    }))
    .filter((tab) => tab.component)
})

watch(
  detailTabs,
  (tabs) => {
    if (!tabs.length) {
      activeTab.value = ''
      return
    }

    if (!tabs.some((tab) => tab.key === activeTab.value)) {
      activeTab.value = tabs[0].key
    }
  },
  { immediate: true },
)
</script>

<template>
  <el-dialog
    v-model="visible"
    class="detail-dialog"
    :title="dialogTitle"
    width="min(1440px, calc(100vw - 32px))"
  >
    <el-tabs v-if="detailTabs.length" v-model="activeTab" class="detail-tabs">
      <el-tab-pane
        v-for="tab in detailTabs"
        :key="tab.key"
        :label="tab.label"
        :name="tab.key"
      >
        <component :is="tab.component" :info="info" />
      </el-tab-pane>
    </el-tabs>
    <p v-else class="detail-empty">暫無可顯示的詳細資料</p>
  </el-dialog>
</template>
