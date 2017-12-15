<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
      <br>
      <li><a href="http://vuejs-templates.github.io/webpack/" target="_blank">Docs for This Template</a></li>
    </ul>
    <h2>{{id}}555</h2>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul>
    <div>
      <input type="text" v-model="ketou">
      <p>{{ketou}}</p>
      <label for="user">用户输入：</label><input type="text" id="user" v-model="user">
      <button @click="check">alert</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',

  data () {
    return {
      ketou:1130,
      user:0,
      msg: 'Welcome to Your Vue.js App'
    }
  },
  props:['id'],
  methods:{
      check(){
          if (this.user > this.ketou) {
              alert('最大可投为' + this.ketou + '多了')
          } else {
              if (this.user>=1000 && this.ketou - this.user >= 100 && this.user % 50 == 0) {
                  alert('xingle')
              }else if(this.user>=1000 && this.ketou - this.user <100){
                  alert('最大可投为' + this.ketou + '不能给我剩下')
              }else {
                  alert(11)
              }
          }

      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
