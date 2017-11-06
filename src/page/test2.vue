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
</div>
</template>

<script>
  import Vue from 'vue';
  import {CountUp} from 'vue-ydui/dist/lib.rem/countup';
  Vue.component(CountUp.name, CountUp);

  export default {
        data() {
            return {}
        }

    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" rel="stylesheet/scss">

</style>
