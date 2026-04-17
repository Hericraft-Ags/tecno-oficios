import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import HidraulicInstall from '../views/HidraulicInstall.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/courses', component: HidraulicInstall },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router