import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../pages/User/HomeView.vue'
import store from '../store/index'

const routes = [
  {
    name: 'home',
    path: '/',
    component: HomeView,
  },
  {
    name: 'shop',
    path: '/cua-hang/:productType',
    component: () => import(/* webpackChunkName: "about" */ '../pages/User/ShopView.vue'),
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../pages/ShopView.vue')
  },
  {
    name: 'shopDetail',
    path: '/cua-hang/:productType/:productSlug',
    component: () => import('../pages/User/ProductDetailView.vue')
  },
  {
    name: 'search',
    path: '/tim-kiem/:productType/:search',
    component: () => import('../pages/User/SearchView.vue')
  },
  {
    name: 'user',
    path: '/nguoi-dung',
    children: [
      {
        name: 'login',
        path: 'dang-nhap',
        component: () => import('../pages/User/LoginView.vue')
      },
      {
        name: 'profile',
        path: 'thong-tin',
        component: () => import('../pages/User/UserProfileView.vue'),
        meta: { requiresAuth: true }
      },
    ]
  },
  {
    name: 'introduce',
    path: '/gioi-thieu',
    component: () => import('../pages/User/AboutView.vue')
  },
  {
    name: 'service',
    path: '/dich-vu',
    component: () => import('../pages/User/ServiceView.vue')
  },
  {
    name: 'checkout',
    path: '/giao-hang',
    component: () => import('../pages/User/CheckoutView.vue'),
    meta: { requiresAuth: true }
  },
]

function checkAuthentication(to, from, next) {
  if (to.matched.some(route => route.meta.requiresAuth)) {
    let loginStatus = store.state.loginStatus;
    // Kiểm tra trạng thái đăng nhập từ Vuex store
    if (loginStatus) {
      next();

      // Nếu đã đăng nhập, cho phép điều hướng tiếp

    } else {
      // Nếu chưa đăng nhập, chuyển hướng đến trang đăng nhập
      next('/nguoi-dung/dang-nhap');
    }
  } else {
    // Nếu route không yêu cầu đăng nhập, cho phép điều hướng tiếp
    next();
  }
}

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
router.beforeEach(checkAuthentication);


export default router
