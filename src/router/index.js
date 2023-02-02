import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

const requireAuth = [
  '/',
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
