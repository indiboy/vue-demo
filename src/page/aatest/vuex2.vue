<template>
  <div class="">
    <yd-button type="primary" @click.native="test()">test</yd-button>
    <yd-button type="danger">{{vuex}}</yd-button>
    <yd-button type="warning" @click.native="testact">{{$store.state.count}}</yd-button>
    <yd-button type="hollow">hollow</yd-button>
    <yd-button type="disabled" disabled>disabled</yd-button>
    <p>{{vuexa}}</p>
  </div>
</template>

<script>
  import Vue from 'vue';
  import {Button, ButtonGroup} from 'vue-ydui/dist/lib.rem/button';

  Vue.component(Button.name, Button);
  Vue.component(ButtonGroup.name, ButtonGroup);
  export default {
    data () {
      return {
        /*注意这种方式
         * 虽然也能访问到vuex的状态信息，但是vuexa获取的一直是vuex的初始值，不会动态修改
         *
         *
         * */
        vuexa:this.$store.state.count

      }
    },
    computed:{
      vuex(){
         return this.$store.state.count
      }
    },
    methods:{
      test(){
        this.$store.commit('MU_TEST',{n:10})
      },
      testact(){
        this.$store.dispatch('action',{n:6})
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" rel="stylesheet/scss">

</style>
