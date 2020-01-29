import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Inicio',
    component: () => import('../views/Inicio.vue')
  },
  {
    path: '/desafio1',
    name: 'Desafio 1',
    component: () => import('../views/Desafio1.vue')
  },
  {
    path: '/desafio2',
    name: 'Desafio 2',
    component: () => import('../views/Desafio2.vue')
  },
  {
    path: '/desafio3',
    name: 'Desafio 3',
    component: () => import('../views/Desafio3.vue')
  },
  {
    path: '/desafio4',
    name: 'Desafio 4',
    component: () => import('../views/Desafio4.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
