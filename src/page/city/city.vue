<template>
<div class="city_container">
    <head-top :head-title="cityname" go-back='true'>
        <router-link to="/home" slot="changecity" class="change_city">切换城市</router-link>
    </head-top>
    <form class="city_form" v-on:submit.prevent>
        <div>
            <input type="search" name="city" placeholder="输入学校、商务楼、地址" class="city_input input_style" required v-model='inputVaule'>
        </div>
        <div>
            <input type="submit" name="submit" class="city_submit input_style" @click='postpois' value="提交">
        </div>
    </form>
    <header v-if="historytitle" class="pois_search_history">搜索历史</header>
    <ul class="getpois_ul">
        <li v-for="(item,index) in placelist" @click="nextpage(index,item.geohash)" :key="index">
            <h4 class="pois_name ellipsis">{{item.name}}</h4>
            <p class="pois_address ellipsis">{{item.address}}</p>
        </li>
    </ul>
    <footer v-if="historytitle && placelist.length" class="clear_all_history" @click="clearAll">清空所有</footer>
    <div class="search_none_place" v-if="placeNone">很抱歉！无搜索结果</div>


</div>
</template>

<script>
    import headTop from '../../components/header/head.vue'
    import {setStorage,getStorage,delStorage} from '../../service/localStorage'
    import {currentcity,searchplace} from '../../service/getData'
    export default {
        name: '',
        data () {
            return {
                cityid:'', // 当前城市id
                cityname:'', // 当前城市名字
                inputVaule:'',//搜索地址
                placelist:[],//搜索城市列表
                placeHistory:[],//历史搜索
                historytitle: true, // 默认显示搜索历史头部，点击搜索后隐藏
                placeNone: false, // 搜索无结果，显示提示信息
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
            this.initData();
        },
        methods:{
            initData(){
               /*h获取历史记录*/
               if(getStorage('placeHistory')){
                   this.placelist = JSON.parse(getStore('placeHistory'));
               }else{
                   this.placelist = [];
               }
            },
            /*搜索地址*/
            postpois(){
                if(this.inputVaule){
                    searchplace(this.cityid,this.inputVaule).then(res => {
                        this.historytitle = false;
                        this.placelist = res;
                        this.placeNone = res.length?false:true;
                    })
                }
            },
            /**
             * 点击搜索结果进入下一页面时进行判断是否已经有一样的历史记录
             * 如果没有则新增，如果有则不做重复储存，判断完成后进入下一页
             */
            nextpage(index,geohash){
                let history = getStorage('placeHistory');
                let choosePlace = this.placelist[index];
                if(history){
                    let checkrepeat = false;
                    this.placeHistory = JSON.parse(history);
                    this.placeHistory.forEach(function (item) {
                        if (item.geohash == geohash) {
                            checkrepeat = true;
                        }
                    })
                    if (!checkrepeat) {
                        this.placeHistory.push(choosePlace)
                    }
                }else{
                    this.placeHistory.push(choosePlace)
                }
                setStorage('placeHistory',this.placeHistory)
                this.$router.push({path:'/msite', query:{geohash}})
            },

            clearAll(){
                delStorage('placeHistory');
                this.initData();
            }


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
        right: 0.4*0.4rem;
    }
    .city_form{
        background-color: #fff;
        border-top: 1px solid $bc;
        border-bottom: 1px solid $bc;
        padding-top: 0.4*0.4rem;
        div{
            width: 90%;
            margin: 0 auto;
            text-align: center;
            .input_style{
                border-radius: 0.1*0.4rem;
                margin-bottom: 0.4*0.4rem;
                @include wh(100%, 1.4*0.4rem);
            }
            .city_input{
                border: 1px solid $bc;
                padding: 0 0.3*0.4rem;
                @include sc(0.65*0.4rem, #333);
            }
            .city_submit{
                background-color: $blue;
                @include sc(0.65*0.4rem, #fff);
            }
        }
    }
    .pois_search_history{
        border-top: 1px solid $bc;
        border-bottom: 1px solid $bc;
        padding-left: 0.5*0.4rem;
    }
    .getpois_ul{
        background-color: #fff;
        border-top:1px solid $bc;
        li{
            margin:0 auto;
            padding-top: 0.65*0.4rem;
            border-bottom:1px solid $bc;
            .pois_name{
                margin: 0 auto 0.35*0.4rem;
                width: 90%;
                @include sc(0.45*0.4rem,#999)
            }
            .pois_address{
                width: 90%;
                margin: 0 auto 0.55*0.4rem;
                @include sc(0.45*0.4rem,#999)
            }
        }
    }
    .clear_all_history{
        @include sc(0.7rem*0.4, #666);
        text-align: center;
        line-height: 2*0.4rem;
        background-color: #fff;
    }
    .search_none_place{
        margin: 0 auto;
        @include font(0.65*0.4rem ,1.75*0.4rem);
        color: #333;
        background-color: #fff;
        text-indent: 0.5*0.4rem;
    }
</style>