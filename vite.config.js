import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const githubPagesBase = '/taoyuan-irrigation-project-demo/'

export default defineConfig({
  base: process.env.GITHUB_PAGES === 'true' ? githubPagesBase : '/',
  plugins: [vue()],
})
