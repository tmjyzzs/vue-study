import Vue from 'vue'
import App from './App'
import router from './router'
// import 'reset.css'
import "./styles/reset.css"
import 'normalize.css/normalize.css' // A modern alternative to CSS resets

Vue.config.productionTip = false

//测试
import { testReqtest } from '@/api/index.js'

testReqtest()

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
