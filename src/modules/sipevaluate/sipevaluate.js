import 'babel-polyfill'

import Vue from 'vue'
import App from './sipevaluate.vue'

import 'element-ui/lib/theme-chalk/index.css';
import 'assets/css/reset.css'
import 'assets/css/common.css'

Vue.config.productionTip = false

const useElement = element=> element.forEach(item=> Vue.use(item));

import {
  Table,
  TableColumn
} from 'element-ui';

useElement([Table,TableColumn]);

/* eslint-disable no-new */
const sipevaluate= new Vue({
  el: '#sipevaluate',
  render: h => h(App)
})


