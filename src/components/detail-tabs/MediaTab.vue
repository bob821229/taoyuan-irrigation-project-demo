<script setup>
import { computed } from 'vue'

const props = defineProps({
  info: {
    type: Object,
    required: true,
  },
})

const images = computed(() => props.info.media?.images ?? [])
</script>

<template>
  <el-carousel
    class="media-carousel"
    indicator-position="outside"
    height="360px"
    :autoplay="false"
    arrow="always"
  >
    <el-carousel-item
      v-for="image in images"
      :key="image.title"
    >
      <figure class="media-slide">
        <div class="media-preview">
          <img v-if="image.url" :src="image.url" :alt="image.title">
          <span v-else>影像待補</span>
        </div>
      </figure>
    </el-carousel-item>
  </el-carousel>
</template>
