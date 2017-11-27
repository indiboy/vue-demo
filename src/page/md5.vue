<template>
  <div>
    <input type="text" v-model="pwd" placeholder="请输入...">
    <input type="password" v-model="username" placeholder="请输入...">
    <button @click="showmima()">加密</button>
  </div>

</template>

<script>
  import apdmd5 from '../service/md5'
  console.log(apdmd5);

  export default {
        name: '',
        data () {
            return {
                pwd:'',
                username:''
            }
        },
        methods:{
            showmima(){
                var arr=[this.pwd,this.username];
//                var check = '689d3783957d65d57229ba3dc70a20fb';
//                var m = md5(str+check);
//                a(str);
                var aa = apdmd5.apdmd5(arr);
                alert(aa);
            }
        }

    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>

</style>
