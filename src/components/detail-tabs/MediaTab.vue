<script setup>
import { computed } from 'vue'

const props = defineProps({
  info: {
    type: Object,
    required: true,
  },
})

const resolvePublicUrl = (url) => {
  if (!url || /^(https?:)?\/\//.test(url) || url.startsWith('data:')) {
    return url
  }

  return `${import.meta.env.BASE_URL}${url.replace(/^\/+/, '')}`
}

const images = computed(() => props.info.media?.images ?? [])
const hasDescription = (description) => description !== null && description !== undefined && description !== ''
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
          <img v-if="image.url" :src="resolvePublicUrl(image.url)" :alt="image.title">
          <span v-else>影像待補</span>
        </div>
        <figcaption v-if="hasDescription(image.description)" class="media-caption">
          {{ image.description }}
        </figcaption>
      </figure>
    </el-carousel-item>
  </el-carousel>
  <p v-else class="detail-empty">無資料</p>
</template>
