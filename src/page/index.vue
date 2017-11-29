<template>
<div>
  <head-top></head-top>
  <alert-tips v-if="showAlert" alertText="tishidexiaoxi" @closeTip="closeTip"></alert-tips>

  <foot-btm></foot-btm>
</div>
</template>

<script>
  import headTop from '../components/header/head.vue'
  import footBtm from '../components/footer/foot.vue'
  import alertTips from '../components/common/tips.vue'
    export default {
        name: '',
        data () {
            return {
              showAlert:true
            }
        },
        components:{
          headTop,
          footBtm,
          alertTips
        },
      methods:{
        closeTip:function () {
          this.showAlert = false;
        }
      }

    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>

</style>
