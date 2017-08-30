
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

import Example from './components/Example.vue'

require('./bootstrap')

Vue.prototype.$http = window.axios

Vue.use(VueRouter)

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.component('example', Example)

const router = new VueRouter({
  mode: 'history',
  linkActiveClass: 'is-active',
  routes: [
    {
      path: '/',
      component: Example,
      meta: {
        breadcrumb: 'Home',
        title: 'home'
      }
    }
  ]

})

const app = new Vue({
  router
})
app.$mount('#app')
