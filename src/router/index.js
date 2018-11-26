//import Vue from 'vue'
//import Router from 'vue-router'
//import HelloWorld from '@/components/HelloWorld'
//
//Vue.use(Router)
//
//export default new Router({
//routes: [
//  {
//    path: '/',
//    name: 'HelloWorld',
//    component: HelloWorld
//  }
//]
//})

import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = [
  {
    path: '/auth/register',
    name: 'Register',
    component: () => import('@/views/auth/Register')
  }
]

const router = new Router({
  mode: 'history',
  routes
})

export default router
