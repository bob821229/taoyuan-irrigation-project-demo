<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { getLayerTrail, mapLayers } from '../data/mapLayers'

const props = defineProps({
  currentLayer: {
    type: String,
    required: true,
  },
})

const router = useRouter()

const currentLayerInfo = computed(() => mapLayers[props.currentLayer])
const parentLayerName = computed(() => currentLayerInfo.value?.parent ?? null)
const parentLayerInfo = computed(() => (
  parentLayerName.value ? mapLayers[parentLayerName.value] : null
))
const layerTrail = computed(() => getLayerTrail(props.currentLayer))

const goToLayer = (layerName) => {
  if (!layerName || layerName === props.currentLayer) {
    return
  }

  router.push({ name: layerName })
}
</script>

<template>
  <nav class="layer-navigation" aria-label="地圖層級">
    <button
      v-if="parentLayerName && parentLayerInfo"
      class="layer-back-button"
      type="button"
      @click="goToLayer(parentLayerName)"
    >
      <span aria-hidden="true">‹</span>
      返回上一層
    </button>

    <ol class="layer-breadcrumb">
      <li
        v-for="(layer, index) in layerTrail"
        :key="layer.name"
        class="layer-breadcrumb-item"
      >
        <button
          v-if="layer.name !== currentLayer"
          class="layer-breadcrumb-link"
          type="button"
          @click="goToLayer(layer.name)"
        >
          {{ layer.title }}
        </button>
        <span
          v-else
          class="layer-breadcrumb-current"
          aria-current="page"
        >
          {{ layer.title }}
        </span>
        <span
          v-if="index < layerTrail.length - 1"
          class="layer-breadcrumb-separator"
          aria-hidden="true"
        >
          /
        </span>
      </li>
    </ol>
  </nav>
</template>
