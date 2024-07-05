import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/pages/Home'
import Login from '@/pages/Login'
import Search from '@/pages/Search'
import Register from '@/pages/Register'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      component: Home,
      meta: { show: true }
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/search/:keyWord',
      component: Search,
      meta: { show: true },
      name:"search"
    },
    {
      path: '/register',
      component: Register
    },
    {
      path: "*",
      redirect: "/home"
    }
  ]
})
