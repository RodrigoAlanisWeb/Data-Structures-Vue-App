import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/stack',
    name: 'Stack',
    component: () => import('../views/Stack.vue')
  },
  {
    path: '/queue',
    name: 'Queue',
    component: () => import('../views/Queue.vue')
  },
  {
    path: '/linkedlist',
    name: 'List',
    component: () => import('../views/List.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
