import { createRouter, createWebHistory } from 'vue-router'
import HomeLayout from '@/layouts/HomeLayout.vue'
import {useAuthStore} from "@/stores/Auth";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/dashboard',
      component: HomeLayout,
      children : [
        {
          path: '/dashboard',
          name: 'dashboard',
          component: () => import('../views/dashboard/dashboard.vue'),
          meta: {isPrivate: true},
        },
        {
          path: '/product-category',
          name: 'productCategory',
          component: () => import('../views/dashboard/productCategory/productCategory.vue'),
          meta: {isPrivate: true},
        },
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/auth/login.vue'),
      meta: {isPrivate: false}
    }
  ]
})
router.beforeEach((to, from) => {
  if (!useAuthStore().isLoggedIn && to.meta.isPrivate) {
    return {name: 'login'}
  }
})


export default router
