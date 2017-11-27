import Vue from 'vue'
import Router from 'vue-router'

import App from '@/App'/*App组件作为一个根组件在启动的时候加载，所以不必按需加载*/

/*import head from '@/components/header/head'
import foot from '@/components/footer/foot'
import HelloWorld from '@/components/HelloWorld'*/

/*按需加载*/
const head = r => require.ensure([], () => r(require('@/components/header/head')), 'chunkname2')
const foot = r => require.ensure([], () => r(require('@/components/footer/foot')), 'chunkname3')
const Hello = r => require.ensure([], () => r(require('@/components/HelloWorld')), 'chunkname4')
const test = r => require.ensure([], () => r(require('@/page/test')), 'test')
const test2 = r => require.ensure([], () => r(require('@/page/test2')), 'test2')
const md5 = r => require.ensure([], () => r(require('@/page/md5')), 'nd5')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/', //顶级路由匹配到App组件在inde.html中的router-view展示，其余组件作为App的子组件展示
      name: 'app',
      component: App,
      children:[   //子组件在App中的router-view展示
          {
            path: '/head',
            name: 'head',
            component: head,
            meta:{keepAlive:true},/*改组件是否需要缓存，一般为静态页面*/
          },
          {
            path: '/foot',
            name: 'foot',
            component: foot
          },
          {
            path: '/hello/:id',
            name: 'hello',
            component: Hello,
            props: true
          },
          {
            path: '/test',
            name: 'test',
            component: test
          },
          {
            path: '/test2',
            name: 'test2',
            component: test2
          },
          {
            path: '/md5',
            name: 'md5',
            component: md5
          }
      ]
    },







  ]
})
