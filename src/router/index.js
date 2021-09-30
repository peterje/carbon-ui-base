import Vue from 'vue'
import Router from 'vue-router'
import Coinflip from '../pages/Coinflip'

Vue.use(Router)

export const routes = [{
  path: '/',
  component: () => import(/* webpackChunkName: "layout-default" */ '@/layouts/DefaultLayout.vue'),
  children: [{
    path: '',
    name: 'starter-page',
    component: () => import(/* webpackChunkName: "starter-page" */ '@/pages/StarterPage.vue')

  }, {
    path: '/coinflip',
    name: 'coinflip',
    component: () => import(/* webpackChunkName: "Coinflip" */ '@/pages/Coinflip.vue')

  },{
    path: '/battles',
    name: 'battles',
    component: () => import(/* webpackChunkName: "Battles" */ '@/pages/Battles.vue')

  },{
    path: '/unboxing',
    name: 'battles',
    component: () => import(/* webpackChunkName: "Battles" */ '@/pages/Unboxing.vue')

  },{
    path: '/provablyfair',
    name: 'provablyfair',
    component: () => import(/* webpackChunkName: "Battles" */ '@/pages/ProvablyFair.vue')

  }]
}, {
  path: '*',
  component: () => import(/* webpackChunkName: "layout-error" */ '@/layouts/ErrorLayout.vue'),
  children: [{
    path: '',
    name: 'error',
    component: () => import(/* webpackChunkName: "error" */ '@/pages/error/NotFoundPage.vue')
  }]
}]

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL || '/',
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 }
  },
  routes
})

/**
 * Before each route update
 */
router.beforeEach((to, from, next) => {
  return next()
})

/**
 * After each route update
 */
router.afterEach((to, from) => {
})

export default router
