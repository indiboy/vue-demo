// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import store from './store'

import FastClick from 'fastclick'
import axios from 'axios'
import './config/rem'
import 'vue-ydui/dist/ydui.base.css'

// import YDUI from 'vue-ydui';
// import 'vue-ydui/dist/ydui.rem.css';
// /* 使用px：import 'vue-ydui/dist/ydui.px.css'; */
// Vue.use(YDUI);


// if ('addEventListener' in document) {
//   document.addEventListener('DOMContentLoaded', function() {
//     FastClick.attach(document.body);
//   }, false);
// }
FastClick.attach(document.body)
Vue.prototype.$ajax = axios

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  store,
  // template: '<App/>',
  // components: { App }
}).$mount('#app')
