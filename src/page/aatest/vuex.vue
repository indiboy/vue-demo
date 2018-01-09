<template>
  <div class="">
    <yd-button type="primary" @click.native="test_mu()">test</yd-button>
    <yd-button type="danger">{{vuex}}</yd-button>
    <yd-button type="warning" @click.native="testa_ac">{{$store.state.count}}</yd-button>
    <yd-button type="hollow">hollow</yd-button>
    <yd-button type="disabled" disabled>disabled</yd-button>
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
        vuexa:''
      }
    },
    computed:{
      vuex(){
          return this.$store.state.count
      }
    },
    methods:{
      /*同步提交mutations*/
      test_mu(){
          this.$store.commit('MU_TEST',{n:1})
      },
      /*异步提交action*/
      testa_ac(){
          this.$store.dispatch('action',{n:3})
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" rel="stylesheet/scss">

</style>
