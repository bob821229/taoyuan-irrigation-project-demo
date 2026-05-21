<script setup>
import irrigationSvg from '../../桃園管理處_湖口工作站_20260520_01_第三層_光復圳1支線灌區.svg?raw'
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
            class="irrigation-map"
            role="img"
            aria-label="桃園管理處湖口工作站第三層光復圳1支線灌區圖"
            v-html="irrigationSvg"
          />
        </div>
      </section>
    </el-main>
  </el-container>
</template>
