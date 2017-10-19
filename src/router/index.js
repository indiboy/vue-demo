import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import head from '@/components/header/head'
import foot from '@/components/footer/foot'
import App from '@/App'

Vue.use(Router)

export default new Router({
  routes: [
      {
        path: '/head',
        name: 'head',
        component: head
      },
      {
        path: '/foot',
        name: 'foot',
        component: foot
      },
      {
        path: '/hello/:id',
        name: 'hello',
        component: HelloWorld,
        props: true
      },
      {
        path: '/',
        name: 'app',
        component: App
      }
  ]
})
