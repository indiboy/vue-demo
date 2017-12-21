<template>
<div class="city_container">
    <head-top :head-title="cityname" go-back='true'>
        <router-link to="/home" slot="changecity" class="change_city">切换城市</router-link>
    </head-top>
</div>
</template>

<script>
    import headTop from '../../components/header/head.vue'
    import {setStorage,getStorage,delStorage} from '../../service/localStorage'
    import {currentcity} from '../../service/getData'
    export default {
        name: '',
        data () {
            return {
                cityid:'', // 当前城市id
                cityname:'', // 当前城市名字
            }
        },
        components:{
            headTop
        },
        mounted(){
            var that = this;
            this.cityid = this.$route.params.cityid;
            currentcity(this.cityid).then(function (data) {
                that.cityname = data.name;
            })
        }


    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss' rel="stylesheet/scss">
    @import "../../assets/style/mixin";
    .city_container{
        padding-top: 2.35*0.4rem;
    }
    .change_city{
        @include ct;
        @include sc(0.6*0.4rem,#fff);
        right: 0.4rem;
    }
</style>