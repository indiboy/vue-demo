<template>
    <div>
      <input type="text" v-model="a">
      <input type="text" v-model="b">
      <input type="text" v-model="c">
      <button @click="test1()">click</button>
    </div>
</template>

<script>
    import {getCheckToken} from '../../service/md5'
    export default {
        name: '',
        data () {
            return {
                a:'',
                b:'',
                c:''
            }
        },
        methods:{
            test1:function () {
                var m = getCheckToken([this.a,this.b,this.c]);
                console.log(m);
            }
        }

    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>

</style>
