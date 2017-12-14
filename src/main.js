// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import store from './store'
// import App from './App.vue'
import FastClick from 'fastclick'
import request from './service/api'
// import 'vue-ydui/dist/ydui.flexible'
import './service/rem'
import 'vue-ydui/dist/ydui.base.css'
import VueHead from 'vue-head'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.config.productionTip = false

import YDUI from 'vue-ydui';
import 'vue-ydui/dist/ydui.rem.css';
Vue.use(YDUI);
FastClick.attach(document.body)
Vue.prototype.$ajax = request
Vue.use(VueHead)

Vue.use(ElementUI)

var vm = new Vue({
  router,
  store,
  // render: h => h(App)
}).$mount('#app')

