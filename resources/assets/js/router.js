import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  linkActiveClass: 'is-active',
  routes: [
    {
      path: '/',
      component: require('./components/Example.vue'),
      meta: {
        breadcrumb: 'Home',
        title: 'home'
      }
    }
  ]
})
