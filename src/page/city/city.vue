<template>
<div class="city_container">
    <head-top :head-title="cityname" go-back='true'>
        <router-link to="/home" slot="changecity" class="change_city">切换城市</router-link>
    </head-top>
  <!--搜索区域-->
  <div class="search_area">
    <input type="text" class="search_box" placeholder="输入学校、商务楼、地址">
    <button>提交</button>
  </div>
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
  .search_area{
    width:100%;
    background-color: #fff;
    margin-top:0.05rem;
    padding:0.2rem 0.4rem;
    border-top: 1px solid $bc;
    .search_box {
      width:100%;
      height:0.6rem;
      line-height: 0.6rem;
      /*background-color: teal;*/
      border: 1px solid $bc;
      padding-left:0.1rem;
      @include font(0.65*0.4rem, 1.8*0.4rem);
      border-radius: 2px;
    }
    button{
      width:100%;
      height: 0.6rem;
      line-height: 0.6rem;
      background-color: $blue;
      color:#fff;
      text-align: center;
      margin-top:0.15rem;
      @include font(0.65*0.4rem, 1.8*0.4rem);
      border-radius: 2px;
    }
  }
</style>
