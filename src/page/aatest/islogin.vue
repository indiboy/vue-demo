<template>
    <div>{{islogin}}</div>
</template>

<script>
    export default {
        name: '',
        data () {
            return {
                islogin:'151515'
            }
        }

    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>
    div{
      width: 100%;
      height: 2rem;
      background-color: teal;
      text-align: center;
      line-height: 2rem;
      color: #fff;
      font-size: 0.2rem;
    }
</style>
