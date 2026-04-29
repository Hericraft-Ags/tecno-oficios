import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CoursesView from '../views/CoursesView.vue'
import HidraulicInstall from '../views/HidraulicInstall.vue'
import MetodologiaView from '../views/MetodologiaView.vue'


const routes = [
  { path: '/', component: HomeView },
  { path: '/courses', component: CoursesView},
  { path: '/hidraulic-course', component: HidraulicInstall},
  { path: '/methodology', component: MetodologiaView},
]

const router = createRouter({
  history: createWebHistory(),
  routes,

  scrollBehavior(to, from, savedPosition) {
    // Para botón atrás/adelante
    if (savedPosition) {
      return savedPosition
    }
    
    return { top: 0 }
  }
})

export default router