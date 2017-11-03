// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import store from './store'
import './config/rem'
import FastClick from 'fastclick'
import YDUI from 'vue-ydui';
Vue.use(YDUI);
import 'vue-ydui/dist/ydui.rem.css';
/* 使用px：import 'vue-ydui/dist/ydui.px.css'; */
if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', function() {
    FastClick.attach(document.body);
  }, false);
}

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  store,
  // template: '<App/>',
  // components: { App }
}).$mount('#app')
