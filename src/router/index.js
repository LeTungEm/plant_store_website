import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../pages/HomeView.vue'

const routes = [
  {
    name: 'home',
    path: '/',
    component: HomeView,
  },
  {
    name: 'shop',
    path: '/cua-hang/:productType',
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
  },
  {
    name: 'user',
    path: '/nguoi-dung',
    // component: () => import(/* webpackChunkName: "about" */ '../pages/SearchView.vue')
    children: [
      {
        name: 'login',
        path: 'dang-nhap',
        component: () => import(/* webpackChunkName: "about" */ '../pages/LoginView.vue')
      },
    ]
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
