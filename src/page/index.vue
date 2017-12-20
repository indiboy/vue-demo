<template>
<div>
    <head-top></head-top>
    <alert-tips v-if="showAlert.at" alertText="tishidexiaoxi" @closeTip="closeTip"></alert-tips>
    <loading v-if="loading"></loading>
    <foot-btm></foot-btm>
</div>
</template>

<script>
  import headTop from '../components/header/head.vue'
  import footBtm from '../components/footer/foot.vue'
  import alertTips from '../components/common/tips.vue'
  import loading from '../components/common/loading.vue'
  import Vue from 'vue'
  Vue.filter('kkk',function (value) {
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
  })
  // 创建构造器
  var aa = {
      data: function () {
          return {
              showAlert:false
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
              },
              loading:true
          }
      },
      created(){
//          this.fetchData()
      },
      watch: {
          // 如果路由有变化，会再次执行该方法
          '$route': 'fetchData'
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

          },
          fetchData () {
              this.loading = false
          }
      },

//      extends:aa,


  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>

</style>
