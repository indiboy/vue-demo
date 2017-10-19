import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import head from '@/components/header/head'
import foot from '@/components/footer/foot'

Vue.use(Router)

export default new Router({
  routes: [
      {
        path: '/',
        name: 'head',
        component: head
      },
      {
        path: '/foot',
        name: 'foot',
        component: foot
      }
  ]
})
