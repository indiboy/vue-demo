<template>
  <div>
    <!--导航栏-->
    <h1 v-html="msg"></h1>
    <router-link v-bind:to="'/index'" tag="span">{{ msg2 }}</router-link>
    <router-link :to="{ path:'/login',query:{ plan:'private' }}">登录</router-link>
    <router-link :to="{ name:'register',params:{ userId:123}}">注册</router-link>
    <router-link to="/test">test</router-link>
    <br>
    <div v-if="Num>0.5">YES {{Num}}</div>
    <div v-else>sorry {{ Num }}</div>
    <label>{{ message }}</label><input type="text" v-model="input1"/>
    <yd-button v-if="input1>5" bgcolor ="#ccc" @click.native = "inputBtn">{{ btnvalue }}</yd-button>
    <yd-button disabled>disabled</yd-button>
    <br>
    <child :my-childval="input1"></child>
    <br>
    <child01 v-bind:btn="1+2"></child01>
    <div class="djd"></div>
    <img src="../../assets/images/logo.png" alt="" />

    <ul>
      <li v-for="(item,index) in tabs" :class="{active:index == num}" @click="tab(index)">{{item}}</li>
    </ul>
    <div class="tabCon">
      <div v-for='(itemCon,index) in tabContents' v-show=" index == num">{{itemCon}}</div>
    </div>
  </div>
</template>

<style lang="scss">
  .djd{
    background-image: url(../../assets/images/loginSprite.png);
    background-position: -137px -52px;
    width: 24px;
    height: 20px;
  }
  ul:after{
    content: "";
    visibility: hidden;
    height: 0;
    line-height: 0;
    clear: both;
    display: block;
  }
  ul li{
    float: left;
    width: 70px;
    height: 24px;
    line-height: 24px;
    background: #000;
    color: #fff;
    margin: 0 5px;
    text-align: center;
  }

</style>

<script>
  import Vue from 'vue';
  import {Button, ButtonGroup} from 'vue-ydui/dist/lib.rem/button';

  Vue.component(Button.name, Button);
  Vue.component(ButtonGroup.name, ButtonGroup);

  export default {
    data(){
      return {
        msg:'<div>导航栏：</div>',
        msg2: '首页',
        message:'bye',
        input1:'8888899999',
        btnvalue:0,
        Num:Math.random(),
        tabs: ["标题一", "标题二","标题三"],
        tabContents: ["内容一1111111", "内容二2222222","内容三3333333"],
        num: 1
      }
    },
    created(){
      this.message = '绑定';
      console.log('message is' + this.message)
    },
    methods:{
      inputBtn:function(e){
        this.input1 = this.input1.split('').reverse().join('');
        this.btnvalue += 1;
      },
      userNameChange(){
        this.$store.state.user_name = this.username;
      },
      tab(index) {
        this.num = index;
        console.log(index)
      }
    },
    components:{
      'child':{
        //驼峰式：html标签中要传递的值要写成短横线式的，而在props的数组中，应该和插值保持一致，写成驼峰式的（如btnTest），
        //利用props绑定动态数据:v-bind:子组件的值="父组件的属性"。
        props:['myChildval'],
        template:'<span>child:{{myChildval}}</span>'
      },
      'child01':{
        props:['btn'],
        template:'<span>btn:{{btn}}</span>'//这里的btn的值是3（而不是没有加v-bind时，作为字符串的1+2）
      }
    },
  }

</script>
