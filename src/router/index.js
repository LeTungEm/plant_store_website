import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../pages/User/HomeView.vue'
import { getEmail } from '@/assets/js/quickFunction';
import AccountsService from '@/service/AccountsService';
// import store from '../store/index'

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
    name: 'news',
    path: '/tin-tuc',
    component: () => import('../pages/User/NewsView.vue')
  },
  {
    name: 'checkout',
    path: '/giao-hang',
    component: () => import('../pages/User/CheckoutView.vue'),
    meta: { requiresAuth: true }
  },
  {
    name: 'orderDetail',
    path: '/don-hang/chi-tiet/:orderId',
    component: () => import('../pages/User/OrderDetailView.vue'),
    meta: { requiresAuth: true },
  },
  {
    name: 'order',
    path: '/don-hang',
    component: () => import('../pages/User/OrderView.vue'),
    meta: { requiresAuth: true },
  },
  {
    name: 'admin',
    path: '/quan-ly',
    meta: { requiresAuth: true },
    children: [
      {
        name: 'dashboard',
        path: 'trang-chu',
        component: () => import('../pages/Admin/DashBoardView.vue')
      },
      {
        name: 'plantForm',
        path: 'quan-ly-cay/:slug',
        component: () => import('../pages/Admin/PlantsEditerView.vue')
      },
      {
        name: 'plantManager',
        path: 'quan-ly-cay',
        component: () => import('../pages/Admin/PlantsManagerView.vue'),
      },
      {
        name: 'toolsManager',
        path: 'quan-ly-chau',
        component: () => import('../pages/Admin/ToolsManagerView.vue'),
      },
      {
        name: 'OrderForm',
        path: 'quan-ly-don-hang/:orderId',
        component: () => import('../pages/Admin/OrdersEditerView.vue'),
      },
      {
        name: 'ordersManager',
        path: 'quan-ly-don-hang',
        component: () => import('../pages/Admin/OrderManagerView.vue'),
      },
    ],
  },
]

function checkLogin(email, to, next) {
  AccountsService.isEmailExists(email).then((res) => {
    if (res.data.message) {
      if (to.matched.some(route => route.name == 'admin')) {
        if (res.data.role_id.toString() == '1') {
          next();
        } else {
          next('/');
        }
      } else {
        next();
      }
    }
  });
}

function checkAuthentication(to, from, next) {
  if (to.matched.some(route => route.meta.requiresAuth)) {
    // Kiểm tra trạng thái đăng nhập từ Vuex store
    let email = getEmail();
    if (email != null) {
      checkLogin(email, to, next);
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
