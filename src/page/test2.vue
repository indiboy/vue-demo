<template>
<div>
  <yd-countup
    endnum="1200"
    duration="3"
    decimals="2"
    separator=","
    prefix="$"
    suffix="美元"
    class="spannum"
  ></yd-countup>
  <p class="p"></p>
</div>
</template>

<script>
  import Vue from 'vue';
  import {CountUp} from 'vue-ydui/dist/lib.rem/countup';
  Vue.component(CountUp.name, CountUp);

  export default {
      data() {
          return {}
      },
      head:{
        title: {
          inner: 'test2'
        },
        meta:[
          {name: 'application-name', content: 'Name of my application'},
          { name: 'description', content: 'A description of the page', id: 'desc' }
        ]
      }


  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" rel="stylesheet/scss">
.p{
  width: 0.117rem;
  height: 1rem;
  background-color: teal;
}
</style>
