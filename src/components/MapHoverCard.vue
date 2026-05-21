<script setup>
import { computed } from 'vue'

const props = defineProps({
  record: {
    type: Object,
    default: null,
  },
  position: {
    type: Object,
    default: () => ({ x: 0, y: 0 }),
  },
})

const cardStyle = computed(() => ({
  left: `${props.position.x}px`,
  top: `${props.position.y}px`,
}))

const storageText = computed(() =>
  typeof props.record?.storage === 'number'
    ? props.record.storage.toLocaleString('en-US')
    : '',
)

const levelTextClass = computed(() => ({
  'is-low': Number(props.record?.level) <= 35,
}))

const waterStyle = computed(() => ({
  '--water-level': `${Math.max(0, Math.min(100, Number(props.record?.level) || 0))}%`,
}))
</script>

<template>
  <div
    v-if="record"
    class="map-hover-card"
    :class="`is-${record.type}`"
    :style="cardStyle"
  >
    <template v-if="record.type === 'water-storage'">
      <h3>{{ record.name }}</h3>
      <div class="water-jar" :style="waterStyle">
        <div class="water-jar-fill" />
        <span :class="levelTextClass">{{ record.level }}%</span>
      </div>
      <dl class="water-meta">
        <div>
          <dt>有效蓄水量</dt>
          <dd>{{ storageText }}<span>/萬噸</span></dd>
        </div>
      </dl>
    </template>

    <template v-else-if="record.type === 'flow-info'">
      <dl class="flow-meta">
        <div>
          <dt>名稱:</dt>
          <dd>{{ record.name }}</dd>
        </div>
        <div>
          <dt>時間:</dt>
          <dd>{{ record.time }}</dd>
        </div>
        <div>
          <dt>水位:</dt>
          <dd>{{ record.waterLevel }}</dd>
        </div>
        <div>
          <dt>流量:</dt>
          <dd>{{ record.flow }}</dd>
        </div>
      </dl>
    </template>
  </div>
</template>
