import Vue from 'vue'
import Router from 'vue-router'

import App from '@/App'/*App组件作为一个根组件在启动的时候加载，所以不必按需加载*/

/*import head from '@/components/header/head'
import foot from '@/components/footer/foot'
import HelloWorld from '@/components/HelloWorld'*/

/*按需加载*/
const index = r => require.ensure([], () => r(require('@/page/index')), 'index')
const hello = r => require.ensure([], () => r(require('@/page/HelloWorld')), 'hello')
const home = r => require.ensure([], () => r(require('@/page/home/home')), 'home')
const city = r => require.ensure([], () => r(require('@/page/city/city')), 'city')


/*test部分*/
const render = r => require.ensure([], () => r(require('@/page/test/render')), 'render')
const demo1 = r => require.ensure([], () => r(require('@/page/test/demo1')), 'demo1')
const demo2 = r => require.ensure([], () => r(require('@/page/test/demo2')), 'demo1')
const demo3 = r => require.ensure([], () => r(require('@/page/test/demo3')), 'demo1')
const test = r => require.ensure([], () => r(require('@/page/test/test')), 'test')
const plugin = r => require.ensure([], () => r(require('@/page/test/plugin')), 'test')
const md5 = r => require.ensure([], () => r(require('@/page/test/md5')), 'md5')
const yd = r => require.ensure([], () => r(require('@/page/test/yd')), 'yd')
const ele = r => require.ensure([], () => r(require('@/page/test/ele')), 'ele')

/*test page*/
/*const test = r => require.ensure([], () => r(require('@/page/test')), 'chunktst')
const apitest = r => require.ensure([], () => r(require('@/page/aatest/api_test')), 'api_test')
const titletest = r => require.ensure([], () => r(require('@/page/aatest/title_test')), 'title_test')
const md5 = r => require.ensure([], () => r(require('@/page/aatest/md5_test')), 'md5_test')
const alertt = r => require.ensure([], () => r(require('@/components/common/alertTip')), 'alertt')
const kkk = r => require.ensure([], () => r(require('@/page/aatest/islogin')), 'islogin')
const vuex = r => require.ensure([], () => r(require('@/page/aatest/vuex')), 'vuex')
const vuex2 = r => require.ensure([], () => r(require('@/page/aatest/vuex2')), 'vuex2')
const safe = r => require.ensure([], () => r(require('@/page/aatest/safe_test')), 'safe')
const router = r => require.ensure([], () => r(require('@/page/aatest/router_test')), 'router')*/

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/', //顶级路由匹配到App组件在inde.html中的router-view展示，其余组件作为App的子组件展示
      component: App,
      children:[   //子组件在App中的router-view展示
          {
              path: '',/*如果是空的就重定向到index页面*/
              name: 'index',
              redirect:'/index',
          },
          {
            path: '/index',
            name: 'index',
            component: index,
            meta:{keepAlive:true},/*改组件是否需要缓存，一般为静态页面*/
          },
          {
              path: '/home',
              name: 'home',
              component: home,
          },
          {
              path: '/city/:cityid',
              name: 'city',
              component: city,
          },
          {
              path: '/hello/:id',
              name: 'hello',
              component: hello,
              props: true
          },
          {
              path: '/test',
              name: 'test',
              component: test
          },
          {
            path: '/test/yd',
            name: 'yd',
            component: yd,
          },
          {
              path: '/test/ele',
              name: 'ele',
              component: ele,
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
          },
          {
              path: '/test/plugin',
              name: 'plugin',
              component: plugin
          },

      ]
    },
    /*  /!************************* test *******************!/

      {
          path: '/test/api',
          name: 'apitest',
          component: apitest

      },
      {
          path: '/test/title',
          name: 'titletest',
          component: titletest

      },
      {
          path: '/test/md5',
          name: 'md5',
          component: md5

      },
      {
          path: '/test/al',
          name: 'al',
          component: alertt

      },
      {
          path: '/test/kkk',
          name: 'kkk',
          component: kkk

      },
      {
          path: '/test/vuex',
          name: 'vuex',
          component: vuex

      },
      {
          path: '/test/vuex2',
          name: 'vuex2',
          component: vuex2

      },
      {
          path: '/test/safe',
          name: 'safe',
          component: safe

      },
      {
          path: '/test/router/:router555',
          name: 'router',
          component: router,
          meta:{
              meta:'meta'
          }


      }*/







  ]
})
