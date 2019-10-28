import 'babel-polyfill'

import Vue from 'vue'
import App from './sipapprove.vue'

import 'assets/css/reset.css'
import 'assets/css/common.css'

import echarts from 'echarts'
Vue.prototype.$echarts = echarts

Vue.config.productionTip = false

/* eslint-disable no-new */
const sipapprove = new Vue({
  el: '#sipapprove',
  render: h => h(App)
})
