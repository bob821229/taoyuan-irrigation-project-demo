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
    v-if="images.length"
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
  <p v-else class="detail-empty">無資料</p>
</template>
