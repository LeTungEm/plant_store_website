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
      {
        name: 'profile',
        path: 'thong-tin',
        component: () => import(/* webpackChunkName: "about" */ '../pages/UserProfileView.vue'),
        meta: { requiresAuth: true }
      },
    ]
  },
  {
    name: 'introduce',
    path: '/gioi-thieu',
    component: () => import(/* webpackChunkName: "about" */ '../pages/HomeView.vue')
  },
  {
    name: 'service',
    path: '/dich-vu',
    component: () => import(/* webpackChunkName: "about" */ '../pages/HomeView.vue')
  },
]
function checkAuthentication(to, from, next) {
  if (to.matched.some(route => route.meta.requiresAuth)) {
    // Kiểm tra trạng thái đăng nhập từ Vuex store
    let userJson = sessionStorage.getItem("user");
    if (userJson) {

      let user = JSON.parse(userJson);
      let date = new Date();
      if (user <= date) {
        // Nếu đã đăng nhập, cho phép điều hướng tiếp
        next();
      } else {
        // Nếu chưa đăng nhập, chuyển hướng đến trang đăng nhập
        next('/nguoi-dung/dang-nhap');
      }
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
