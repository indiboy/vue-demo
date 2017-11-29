<template>
  <div>
      <h1>{{title}}</h1>
      <mark>注意:{{}}不能用在属性当中，在属性中只能使用v-bind，动态的修改属性需要用v-bind绑定</mark>
      <h1>{{title.split('').reverse().join('')}}</h1>
      <mark>可以在{{}}中直接使用js表达式</mark>
      <div class="head" :class="foo+'class'">{{html}}需要用v-html绑定才能解析</div>
      <mark>解析原生html需要用指令v-html</mark>
      <ul>
          <li>{{title}}</li>
          <li>{{jisuan}}</li>
          <li><mark>如果在computed中直接是对data属性重新赋值</mark></li>
      </ul>
      <router-link to="/test/demo2">go to demo2</router-link>
      <br>
      <div>{{name}}</div>
  </div>
</template>

<script>
    export default {
        name: '',
        data () {
            return {
                title:'模版语法的基本demo',
                foo:'foo',
                bar:'barclass',
                html:'<span>这是span的内容</span>'
            }
        },
        computed:{
            jisuan:function () {
                //this.title = '这是计算后的' //如果不使用return 页面中{{jisuan}}获取不到。页面中写了{{jiusan}}后{{title}}会更新
                return this.title = '这是计算后的' //{{jisuan}}获取到 {{title}}会更新
            }
        },
      props:{
            name:{
                type:Number,
                default:1000
            }
      }


    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>
  h1{
    background-color: tan;
    padding: 0.1rem;
  }
.head{
  height: 2rem;
  background-color: teal;
  text-align: center;
  line-height: 2rem;
  color: #fff;
}
  .fooclass{
    font-size: 0.2rem;
    color: pink;
  }
  .barclass{
    text-shadow: 3px 3px 3px;
    font-size: 0.4rem ;
  }
  li{
      margin: 0.1rem;
      text-align: center;
  }
</style>
