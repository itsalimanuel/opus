import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/login/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: LoginView,
      meta: {
        layout: 'login'
      }
    },
    {
      path: '/dashboard',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
      meta: {
        layout: 'dashboard'
      }
      // route level code-splitting
    },
  ]
})

const requireAuth = [
  '/',
  '/dashboard',
  '/about'
]
let access = '' /** your access or token key here */

router.beforeEach((to, from, next) => {
  if (requireAuth.includes(to.path) || requireAuth.includes(to.path)) {
    next()
  } else if (!access) {
    next({ name: 'login' })
  } else {
    next()
  }
})

// eslint-disable-next-line no-unused-vars
router.afterEach((to, from, next) => {
  window.scrollTo(0, 0)
})

export default router
