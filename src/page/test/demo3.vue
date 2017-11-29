<template>
  <div>
    <h1>条件渲染</h1>
    <div v-if="show" @click.alt.exact="show = !show">111111111111111{{show}} </div>
    <p v-else @click="show = !show">22222222222222222222222222</p>
    <h1>事件处理</h1>
    <div @click="count += 1">{{count}}</div>
    <input v-model="message" placeholder="edit me">
    <p>Message is: {{ message }}</p>

    <demo1 :name="12"></demo1>

    <input type="file">
  </div>
</template>

<script>
  import demo1 from './demo1.vue'
    export default {
        name: 'dd',
        data () {
            return {
                message:'',
                show:true,
                count:0
            }
        },
        methods:{

        },
        components:{
          demo1
        },


    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>

</style>
