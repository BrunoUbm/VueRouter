import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/serviços',
    name: 'serviços',
    component: () => import('../views/ServicesView.vue')
  },
  {
    path: '/usuarios',
    name: 'usuarios',
    component: () => import('../views/UsuarioEditar.vue')
  },
  {
    path: '/entrar',
    name: 'entar',
    component: () => import('../views/AcessUser.vue')
  },
  {
    path: '/cadastrar',
    name: 'cadastrar',
    component: () => import('../views/RegisterUser.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
