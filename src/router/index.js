import Vue from 'vue'
import Router from 'vue-router'

import App from '@/App'/*App组件作为一个根组件在启动的时候加载，所以不必按需加载*/

/*import head from '@/components/header/head'
import foot from '@/components/footer/foot'
import HelloWorld from '@/components/HelloWorld'*/

/*按需加载*/
const index = r => require.ensure([], () => r(require('@/page/index')), 'index')
const hello = r => require.ensure([], () => r(require('@/page/HelloWorld')), 'chunkname4')
const md5 = r => require.ensure([], () => r(require('@/page/md5')), 'md5')

/*test部分*/
const render = r => require.ensure([], () => r(require('@/page/test/render')), 'render')
const demo1 = r => require.ensure([], () => r(require('@/page/test/demo1')), 'demo1')
const demo2 = r => require.ensure([], () => r(require('@/page/test/demo2')), 'demo1')
const demo3 = r => require.ensure([], () => r(require('@/page/test/demo3')), 'demo1')
const test = r => require.ensure([], () => r(require('@/page/test/test')), 'test')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/', //顶级路由匹配到App组件在inde.html中的router-view展示，其余组件作为App的子组件展示
      name: 'app',
      component: App,
      children:[   //子组件在App中的router-view展示
          {
            path: '/index',
            name: 'index',
            component: index,
            meta:{keepAlive:true},/*改组件是否需要缓存，一般为静态页面*/
          },
          {
            path: '/hello/:id',
            name: 'hello',
            component: hello,
            props: true
          },
          {
            path: '/md5',
            name: 'md5',
            component: md5
          },
          {
            path: '/test',
            name: 'test',
            component: test
          },
          {
            path: '/test/render',
            name: 'render',
            component: render
          },
          {
            path: '/test/demo1',
            name: 'demo1',
            component: demo1
          },
          {
            path: '/test/demo2',
            name: 'demo2',
            component: demo2
          },
        {
          path: '/test/demo3',
          name: 'demo3',
          component: demo3
        }

      ]
    },







  ]
})
