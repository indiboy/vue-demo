<template>
<div>
  <h1>Class 与 Style 绑定</h1>
  <ul>
    <li><mark>class的对象语法-内联在模版</mark></li>
    <li><div :class="{foo:isa,'bar':isa}">使用对象的方式绑定</div></li>
    <li><mark>class的对象语法-不内联在模版</mark></li>
    <li><div :class="classobj">使用对象的方式绑定不内联</div></li>
    <li><mark>class的数组语法</mark></li>
    <li><div :class="[a,b]">class的数组</div></li>
  </ul>
  <router-link :to="{ path: 'demo3', params: { userId: 'jabngja' }}" tag="li">go to demo3</router-link>
  <router-link :to="{ name:'demo1', query: {username:'tiantian'}}" tag="li">go to demo1</router-link>
</div>
</template>

<script>
    export default {
        name: '',
        data () {
            return {
                isa:true,
                isb:false,
                classobj:{
                    foo:true,
                    bar:true
                },
                a:'foo',
                b:'bar'
            }
        }

    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>
li{
  padding: 0.1rem;
  margin: 0.1rem;
  background-color: teal;
  text-align: center;
}
  .foo{
    color: rebeccapurple;
  }
  .bar{
    text-shadow: 10px 10px 3px red;
  }
</style>
