<template>
<div>
  <alert-tips v-if="showAlert.at" alertText="tishidexiaoxi" @closeTip="closeTip"></alert-tips>
    <head-top v-else></head-top>

    <input v-model="message" placeholder="edit me">
    <p>Message is: {{ message | kkk}}</p>
  <foot-btm></foot-btm>
  <loading></loading>
</div>
</template>

<script>
  import headTop from '../components/header/head.vue'
  import footBtm from '../components/footer/foot.vue'
  import alertTips from '../components/common/tips.vue'
  import loading from '../components/common/loading'
  import Vue from 'vue'
  Vue.filter('kkk',function (value) {
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
  })
  // 创建构造器
  var aa = {
      data: function () {
          return {
              showAlert:{
                  at:false
              }
          }
      }
  }
  // 创建 Profile 实例，并挂载到一个元素上。
  export default {
      name: '',
      data () {
          return {
              message:'',
              showAlert:{
                  at:false
              }
          }
      },

      components:{
          headTop,
          footBtm,
          alertTips,
          loading
      },
      methods:{
          closeTip:function () {
//            this.showAlert.at = false;
//            Vue.set(this.showAlert,'at',false)
              Vue.delete(this.showAlert,'at')

          }
      },
//      extends:aa,


  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>

</style>
