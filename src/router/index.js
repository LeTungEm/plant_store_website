import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../pages/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/cua-hang/:productType',
    name: 'shop',
    component: () => import(/* webpackChunkName: "about" */ '../pages/ShopView.vue'),
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../pages/ShopView.vue')
  },
  {
    name: 'shopDetail',
    path: '/cua-hang/:productType/:productSlug',
    component: () => import(/* webpackChunkName: "about" */ '../pages/ProductDetailView.vue')
  },
  {
    name: 'search',
    path: '/tim-kiem/:productType/:search',
    component: () => import(/* webpackChunkName: "about" */ '../pages/SearchView.vue')
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
