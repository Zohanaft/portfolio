import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _74a64b55 = () => interopDefault(import('..\\pages\\catalog\\index.vue' /* webpackChunkName: "pages/catalog/index" */))
const _41d77bac = () => interopDefault(import('..\\pages\\expirience.vue' /* webpackChunkName: "pages/expirience" */))
const _cb3bfb96 = () => interopDefault(import('..\\pages\\notes.vue' /* webpackChunkName: "pages/notes" */))
const _31f367a7 = () => interopDefault(import('..\\pages\\catalog\\_catalog.vue' /* webpackChunkName: "pages/catalog/_catalog" */))
const _01e52874 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _67ceb062 = () => interopDefault(import('..\\pages\\_page.vue' /* webpackChunkName: "pages/_page" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/catalog",
    component: _74a64b55,
    name: "catalog"
  }, {
    path: "/expirience",
    component: _41d77bac,
    name: "expirience"
  }, {
    path: "/notes",
    component: _cb3bfb96,
    name: "notes"
  }, {
    path: "/catalog/:catalog",
    component: _31f367a7,
    name: "catalog-catalog"
  }, {
    path: "/",
    component: _01e52874,
    name: "index"
  }, {
    path: "/:page",
    component: _67ceb062,
    name: "page"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config.app && config.app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
