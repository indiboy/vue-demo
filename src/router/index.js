import Vue from 'vue'
import Router from 'vue-router'


/*import App from '@/App'
import head from '@/components/header/head'
import foot from '@/components/footer/foot'
import HelloWorld from '@/components/HelloWorld'*/

/*按需加载*/
const App = r => require.ensure([], () => r(require('@/App')), 'chunkname1')
const head = r => require.ensure([], () => r(require('@/components/header/head')), 'chunkname2')
const foot = r => require.ensure([], () => r(require('@/components/footer/foot')), 'chunkname3')
const HelloWorld = r => require.ensure([], () => r(require('@/components/HelloWorld')), 'chunkname4')

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
        component: App,
        /*TODO*/
        meta:{keepAlive:true}
      }
  ]
})
