<template>
    <div class="tis">
      {{tipstext}}
    </div>
</template>

<script>
    export default {
        data() {
            return {}
        },
        props:['tipstext']

    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" rel="stylesheet/scss">
.tis{
  background: rgba(0,0,0,0.6);
  padding: 0.1rem 0.2rem;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateX(-50%);
}
</style>
