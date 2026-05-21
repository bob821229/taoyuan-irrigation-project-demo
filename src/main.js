import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import { defineCustomElements } from 'ui-water-jar/loader'
import 'element-plus/dist/index.css'
import './styles.css'
import App from './App.vue'
import router from './router'

defineCustomElements()

createApp(App).use(router).use(ElementPlus).mount('#app')
