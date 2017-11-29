// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import store from './store'

import FastClick from 'fastclick'
import request from './service/api'
import 'vue-ydui/dist/ydui.base.css'
import VueHead from 'vue-head'

import './service/rem'

Vue.config.productionTip = false


FastClick.attach(document.body)
Vue.prototype.$ajax = request
Vue.use(VueHead)


var vm = new Vue({
  router,
  store,

}).$mount('#app')

