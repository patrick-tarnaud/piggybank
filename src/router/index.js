import Vue from 'vue'
import VueRouter from 'vue-router'
import Transactions from '@/views/Transactions.vue'
import About from '@/views/About.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/transations/:accountId',
    name: 'transactions',
    component: Transactions
    // component: () =>
    //   import(/* webpackChunkName: 'about' */ '@/views/Transactions.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: About
  }
]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
