<template>
<div>
  {{title}}
  <router-link to="/index" tag="div">go to index</router-link>
  <router-link to="/index" tag="p">go to {{$route.params}}</router-link>
  <router-link to="/index" tag="p">go to {{$route.query}}</router-link>
  <router-link to="/index" tag="p">go to {{$route.meta}}</router-link>
</div>
</template>

<script>
    export default {
        name: '',
        data () {
            return {
                title:'router-test'
            }
        },
      beforeRouteEnter (to, from, next) {
        // react to route changes...
        // don't forget to call next()
        console.log(to);
        console.log(from);
        alert(1111)
        next()
      }

    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>

</style>
