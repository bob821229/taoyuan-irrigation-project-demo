<script setup>
import { computed, ref, watch } from 'vue'

const emit = defineEmits(['update:filters'])
const pondFilterKeys = ['pondHigh', 'pondMidHigh', 'pondMidLow', 'pondLow']
const groupFilterKeys = ['harvest', 'paddy', 'seedling', 'tilling']
const filters = ref({
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
})

const createGroupChecked = (keys) => computed({
  get: () => keys.every((key) => filters.value[key]),
  set: (checked) => {
    keys.forEach((key) => {
      filters.value[key] = checked
    })
  },
})

const pondAllChecked = createGroupChecked(pondFilterKeys)
const groupAllChecked = createGroupChecked(groupFilterKeys)
const pondIndeterminate = computed(() => {
  const checkedCount = pondFilterKeys.filter((key) => filters.value[key]).length
  return checkedCount > 0 && checkedCount < pondFilterKeys.length
})
const groupIndeterminate = computed(() => {
  const checkedCount = groupFilterKeys.filter((key) => filters.value[key]).length
  return checkedCount > 0 && checkedCount < groupFilterKeys.length
})

watch(
  filters,
  (value) => {
    emit('update:filters', { ...value })
  },
  { deep: true, immediate: true },
)
</script>

<template>
  <aside class="map-legend" aria-label="圖例">
    <h2>圖例</h2>

    <div class="legend-row">
      <span class="legend-star" aria-hidden="true"></span>
      <span>水位流量計</span>
    </div>
    <div class="legend-row">
      <span class="legend-pentagon" aria-hidden="true"></span>
      <span>河水堰</span>
    </div>
    <div class="legend-row">
      <span class="legend-info" aria-hidden="true">i</span>
      <span>詳細統計資訊(點擊後呈現)</span>
    </div>
    <div class="legend-row">
      <span class="legend-line canal-route" aria-hidden="true"></span>
      <span>渠道圳路</span>
    </div>
    <div class="legend-row">
      <span class="legend-line river-original" aria-hidden="true"></span>
      <span>河川區排</span>
    </div>

    <label class="legend-check legend-group-heading">
      <input
        v-model="pondAllChecked"
        type="checkbox"
        :indeterminate="pondIndeterminate"
      >
      <span class="legend-pill pond-main" aria-hidden="true"></span>
      <span>埤塘</span>
    </label>
    <div id="pond-legend-details" class="legend-section">
      <label class="legend-check legend-indent">
        <input v-model="filters.pondHigh" type="checkbox">
        <span class="legend-pill pond-high" aria-hidden="true"></span>
        <span>埤塘蓄水率&gt;75%</span>
      </label>
      <label class="legend-check legend-indent">
        <input v-model="filters.pondMidHigh" type="checkbox">
        <span class="legend-pill pond-mid-high" aria-hidden="true"></span>
        <span>埤塘蓄水率50~75%</span>
      </label>
      <label class="legend-check legend-indent">
        <input v-model="filters.pondMidLow" type="checkbox">
        <span class="legend-pill pond-mid-low" aria-hidden="true"></span>
        <span>埤塘蓄水率25~50%</span>
      </label>
      <label class="legend-check legend-indent">
        <input v-model="filters.pondLow" type="checkbox">
        <span class="legend-pill pond-low" aria-hidden="true"></span>
        <span>埤塘蓄水率&lt;25%</span>
      </label>
    </div>

    <label class="legend-check legend-group-heading">
      <input
        v-model="groupAllChecked"
        type="checkbox"
        :indeterminate="groupIndeterminate"
      >
      <span class="legend-swatch group-main" aria-hidden="true"></span>
      <span>水利小組</span>
    </label>
    <div id="group-legend-details" class="legend-section">
      <label class="legend-check legend-indent">
        <input v-model="filters.harvest" type="checkbox">
        <span class="legend-swatch harvest" aria-hidden="true"></span>
        <span>收割期</span>
      </label>
      <label class="legend-check legend-indent">
        <input v-model="filters.paddy" type="checkbox">
        <span class="legend-swatch paddy" aria-hidden="true"></span>
        <span>本田期</span>
      </label>
      <label class="legend-check legend-indent">
        <input v-model="filters.seedling" type="checkbox">
        <span class="legend-swatch seedling" aria-hidden="true"></span>
        <span>抽穗期</span>
      </label>
      <label class="legend-check legend-indent">
        <input v-model="filters.tilling" type="checkbox">
        <span class="legend-swatch tilling" aria-hidden="true"></span>
        <span>整田插秧期</span>
      </label>
    </div>

    <label class="legend-check">
      <input v-model="filters.canalFlow" type="checkbox">
      <span>顯示渠道流量資料</span>
    </label>
    <label class="legend-check">
      <input v-model="filters.pondStorage" type="checkbox">
      <span>顯示埤塘蓄水量資料</span>
    </label>
  </aside>
</template>

<style scoped>
.map-legend {
  position: absolute;
  left: 16px;
  bottom: 16px;
  z-index: 12;
  width: 254px;
  max-height: calc(100% - 32px);
  overflow: auto;
  padding: 12px 14px 14px;
  border: 1px solid #b9c2c9;
  border-radius: 2px;
  background: #ffffff;
  box-shadow: 0 6px 18px rgb(15 23 42 / 0.12);
  color: #111827;
  font-family: "Noto Sans TC", "Microsoft JhengHei", Arial, sans-serif;
  font-size: 16px;
  line-height: 1.32;
}

.map-legend h2 {
  margin: 0 0 6px;
  color: #111827;
  font-size: 16px;
  font-weight: 500;
}

.legend-row,
.legend-check {
  display: flex;
  align-items: center;
  min-height: 23px;
  gap: 7px;
  margin: 3px 0;
  white-space: nowrap;
}

.legend-check {
  color: #111827;
  cursor: pointer;
}

.legend-group-heading {
  font-weight: 500;
}

.legend-check input {
  width: 13px;
  height: 13px;
  margin: 0;
  accent-color: #176f8d;
  cursor: pointer;
}

.legend-section {
  margin: 2px 0 6px;
}

.legend-indent {
  padding-left: 14px;
}

.legend-star {
  position: relative;
  width: 22px;
  height: 22px;
  background: #00b050;
  clip-path: polygon(50% 0, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
  filter: drop-shadow(0 0 0.6px #083b1a);
}

.legend-pentagon {
  width: 17px;
  height: 17px;
  background: #000000;
  clip-path: polygon(50% 0, 100% 38%, 82% 100%, 18% 100%, 0 38%);
}

.legend-cctv {
  position: relative;
  width: 20px;
  height: 20px;
  border: 1px solid #111111;
  border-radius: 50%;
  background: #ffd426;
}

.legend-cctv::before {
  position: absolute;
  top: 7px;
  left: 4px;
  width: 11px;
  height: 5px;
  background: #111111;
  clip-path: polygon(0 25%, 78% 0, 100% 50%, 78% 100%, 0 75%);
  content: "";
}

.legend-cctv::after {
  position: absolute;
  top: 11px;
  left: 8px;
  width: 8px;
  height: 4px;
  border-top: 2px solid #111111;
  transform: rotate(-22deg);
  content: "";
}

.legend-info {
  width: 20px;
  height: 20px;
  border: 1px solid #86c24e;
  border-radius: 50%;
  background: #86c24e;
  color: #f0f5e7;
  font-family: Arial, sans-serif;
  font-size: 16px;
  font-weight: 700;
  line-height: 18px;
  text-align: center;
}

.legend-line {
  width: 20px;
  height: 2px;
}

.canal-route {
  background: #ff0000;
}

.river-original {
  background: #34afd5;
}

.legend-pill {
  width: 22px;
  height: 14px;
  border-radius: 999px;
  flex: 0 0 auto;
}

.pond-main {
  background: #818181;
}

.pond-high {
  background: #176f8d;
}

.pond-mid-high {
  background: #00b050;
}

.pond-mid-low {
  background: #ffc000;
}

.pond-low {
  background: #ff0000;
}

.legend-swatch {
  width: 24px;
  height: 15px;
  border: 1px solid rgb(17 24 39 / 0.25);
  flex: 0 0 auto;
}

.group-main {
  background: #d9d9d9;
}

.harvest {
  background: #a7f3c7;
}

.paddy {
  background: #f4f1ff;
}

.seedling {
  background: #fff6b8;
}

.tilling {
  background: #ff8a8a;
}

@media (max-width: 720px) {
  .map-legend {
    left: 10px;
    bottom: 10px;
    width: min(254px, calc(100% - 20px));
    max-height: 58%;
    font-size: 14px;
  }
}
</style>
