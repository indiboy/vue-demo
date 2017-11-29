<template>
  <div>
    <div>{{count}}</div>
    <div>{{counta}}</div>
    <ul>
      <li v-for="item in todo" :key="item.id">{{item.text}}</li>
    </ul>
    <p>name:{{name}}</p>


    <hr>
    <!--<h1>{{mapname}}</h1>-->
    <h2>{{$store.getters.doneTodosCount}}</h2>
    <h2>get===>:{{get}}</h2>
    <input type="text" v-model="inputname">
    <h1 @click="mut(inputname)">修改名字</h1>
  </div>

</template>

<script>
  import { mapState } from 'vuex'
  export default {
    data() {
      return {
        count: 0,
        inputname:''
      }
    },
    computed: {
      counta(){
        return this.count+1
      },
      ...mapState({
        name:'name',
        todo:'todos'
      }),
      get(){
        return this.$store.getters.doneTodosCount
      },

    },

    methods:{
      mut(newname){
        this.$store.commit('CAHNGNAME',{newname:newname})
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" rel="stylesheet/scss">

</style>
