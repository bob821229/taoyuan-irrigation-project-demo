<script setup>
import { computed, ref, watch } from 'vue'
import CropTab from './detail-tabs/CropTab.vue'
import IrrigationTab from './detail-tabs/IrrigationTab.vue'
import LocationTab from './detail-tabs/LocationTab.vue'
import MediaTab from './detail-tabs/MediaTab.vue'
import PondTab from './detail-tabs/PondTab.vue'
import SensorTab from './detail-tabs/SensorTab.vue'
import WaterSourceTab from './detail-tabs/WaterSourceTab.vue'

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

const detailTabRegistry = {
  irrigation: {
    label: '灌區資訊',
    component: IrrigationTab,
  },
  pond: {
    label: '埤塘資訊',
    component: PondTab,
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
}

const fallbackTabs = ['irrigation', 'pond', 'crop']

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
    title="詳細資料"
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
