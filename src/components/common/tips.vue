<template>
    <div class="alert_container">
      <section class="tip_text_container">
        <div  class="tip_icon">
          <span></span>
          <span></span>
        </div>
        <p class="tip_text"> {{alertText}}</p>
        <div class="confrim" @click="closeTip">确认</div>
      </section>
    </div>
</template>

<script>
    export default {
        data() {
            return {}
        },
        props:['alertText'],
        methods: {
          closeTip(){
            this.$emit('closeTip')
          }
        }

    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" rel="stylesheet/scss">
  @import "../../assets/style/mixin";
  @keyframes tipMove {
    0%   { transform: scale(1) }
    35%  { transform: scale(.8) }
    70%  { transform: scale(1.1) }
    100% { transform: scale(1) }
  }
.alert_container{
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 200;
}
  .tip_text_container{
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -6*0.4rem;
    margin-left: -6*0.4rem;
    width: 12*0.4rem;
    animation: tipMove .4s ;
    background-color: rgba(255,255,255,1);
    border: 1px;
    padding-top: .6*0.4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border: 1px;
    border-radius: 0.25*0.4rem;
    .tip_icon{
      @include wh(3*0.4rem, 3*0.4rem);
      border: 0.15*0.4rem solid #f8cb86;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      span:nth-of-type(1){
        @include wh(.12*0.4rem, 1.5*0.4rem);
        background-color: #f8cb86;
      }
      span:nth-of-type(2){
        @include wh(.2*0.4rem, .2*0.4rem);
        border: 1px;
        border-radius: 50%;
        margin-top: .2*0.4rem;
        background-color: #f8cb86;
      }
    }
    .tip_text{
      @include sc(.7*0.4rem, #333);
      line-height: .9*0.4rem;
      text-align: center;
      margin-top: .8*0.4rem;
      padding: 0 .4*0.4rem;
    }
    .confrim{
      @include sc(.8*0.4rem, #fff);
      font-weight: bold;
      margin-top: .8*0.4rem;
      background-color: #4cd964;
      width: 100%;
      text-align: center;
      line-height: 1.8*0.4rem;
      border: 1px;
      border-bottom-left-radius: 0.25*0.4rem;
      border-bottom-right-radius: 0.25*0.4rem;
    }
  }
</style>
