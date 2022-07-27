import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store'
console.log(store)
// import { getToken } from '@/utils/auth'
// const token = getToken()

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    component: () => import('../views/Login/index.vue')
  },
  {
    path: '/welcome',
    redirect: '/user',
    component: () => import('../views/welcome/index.vue'),
    children: [
      {
        path: '/user',
        component: () => import('../views/User/index.vue')
      },
      {
        path: '/management',
        component: () => import('../views/Management/index.vue')
      },
      {
        path: '/power',
        component: () => import('../views/Management/component/power.vue')
      },
      {
        path: '/goods',
        component: () => import('../views/Goods/index.vue')
      },
      {
        path: '/params',
        component: () => import('../views/Goods/params.vue')
      },
      {
        path: '/categories',
        component: () => import('../views/Goods/categories.vue')
      },
      {
        path: '/goods/addGoods',
        component: () => import('../views/Goods/add.vue')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

// 路由守卫
router.beforeEach((to, from, next) => {
  if (store.state.user.token || to.path === '/login') {
    next()
  } else {
    next({ path: '/login' })
  }
})

export default router
