import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SecondLayerView from '../views/SecondLayerView.vue'
import ThirdLayerView from '../views/ThirdLayerView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/hukou',
    name: 'hukou',
    component: SecondLayerView,
  },
  {
    path: '/hukou/guangfu-1',
    name: 'guangfu-1',
    component: ThirdLayerView,
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
