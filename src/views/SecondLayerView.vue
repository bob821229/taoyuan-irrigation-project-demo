<script setup>
import { useRouter } from 'vue-router'
import irrigationSvg from '../../桃園管理處_湖口工作站_20260519_01_第二層_湖口工作站灌區.svg?raw'

const router = useRouter()

const goToGuangfuLayer = () => {
  router.push({ name: 'guangfu-1' })
}

const handleMapClick = (event) => {
  const target = event.target instanceof Element ? event.target : null

  if (target?.closest('#ISTD603009001_door')) {
    goToGuangfuLayer()
  }
}
</script>

<template>
  <el-container class="app-shell">
    <el-header class="topbar">
      <div>
        <!-- <p class="eyebrow">桃園管理處 · 湖口工作站</p> -->
        <h1>湖口工作站灌區</h1>
      </div>
    </el-header>

    <el-main class="content">
      <section class="map-stage" aria-label="湖口工作站灌區 SVG 展示">
        <div class="map-canvas">
          <div
            class="irrigation-map"
            role="img"
            aria-label="桃園管理處湖口工作站第二層湖口工作站灌區圖"
            @click="handleMapClick"
            v-html="irrigationSvg"
          />
        </div>
      </section>
    </el-main>
  </el-container>
</template>
