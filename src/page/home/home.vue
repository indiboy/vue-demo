<template>
<div>
    <head-top :go-back="true" signin-up='home'>
        <span slot="logo" class="head_logo" @click="reload">ele.me</span>
    </head-top>

    <nav class="city_nav">
        <div class="city_tip">
            <span>当前定位城市</span>
            <span>定位不准时，请在城市列表中选择</span>
        </div>
        <!--当前城市-->
        <router-link :to="'/city/'+guessCityid" class="guess_city">
            <span>{{guessCity}}</span>
            <svg class="arrow_right">
                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-right"></use>
            </svg>
        </router-link>
    </nav>

    <section id="hot_city_container">
        <h4 class="city_title">热门城市</h4>
        <ul class="citylistul clear">
            <router-link  tag="li" v-for="item in hotcity" :to="'/city/' + item.id" :key="item.id">
                {{item.name}}
            </router-link>
        </ul>
    </section>
    <!--所有城市-->
    <section class="group_city_container">
        <ul class="letter_classify">
            <li v-for="(value, key, index) in sortgroupcity" :key="key"  class="letter_classify_li">
                <h4 class="city_title">{{key}}
                    <span v-if="index == 0">（按字母排序）</span>
                </h4>
                <ul class="groupcity_name_container citylistul clear">
                    <router-link  tag="li" v-for="item in value" :to="'/city/' + item.id" :key="item.id" class="ellipsis">
                        {{item.name}}

                    </router-link>
                </ul>
            </li>
        </ul>
    </section>

</div>
</template>

<script>
    import headTop from '../../components/header/head.vue'
    import {cityGuess, hotcity, groupcity} from '../../service/getData'
    export default {
        name: '',
        data () {
            return {
                guessCity: '',   //当前城市
                guessCityid: '', //当前城市id
                hotcity: [],     //热门城市列表
                groupcity: {},   //所有城市列表
            }
        },
        components:{
            headTop
        },
        computed:{
            //将获取的数据按照A-Z字母开头排序
            sortgroupcity(){
                let sortobj = {};
                for (let i = 65; i <= 90; i++) {
                    if (this.groupcity[String.fromCharCode(i)]) {
                        sortobj[String.fromCharCode(i)] = this.groupcity[String.fromCharCode(i)];
                    }
                }
                return sortobj
            }
        },
        mounted(){
            //获取热门城市
            hotcity().then(res => {
                this.hotcity = res;
            })
            // 获取当前城市
            cityGuess().then(res => {
                this.guessCity = res.name;
                this.guessCityid = res.id;
            })
            //获取所有城市
            groupcity().then(res => {
                this.groupcity = res;
            })
        },
        methods:{
            reload(){
                window.location.reload()
            }
        }

    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss' rel="stylesheet/scss">
    @import "../../assets/style/mixin";
    .head_logo{
        font-weight: 400;
        @include sc(0.7*0.4rem, #fff);
        @include wh(2.3*0.4rem, 0.7*0.4rem);
        @include ct;
        left: 0.8rem;
        top: 0.36rem;
    }
    /*城市列表*/
    .city_nav{
        padding-top: 2.35*0.4rem;
        border-top: 1px solid $blue;
        background-color: #fff;
        margin-bottom: 0.4*0.4rem;
        .city_tip{
            @include fj;
            line-height: 1.45*0.4rem;
            padding: 0 0.45*0.4rem;
            span:nth-of-type(1){
                @include sc(0.55*0.4rem, #666);
            }
            span:nth-of-type(2){
                font-weight: 700;
                @include sc(0.475*0.4rem, #9f9f9f);
            }
        }
        .guess_city{
            @include fj;
            align-items: center;
            height: 1.8*0.4rem;
            padding: 0 0.45*0.4rem;
            border-top: 1px solid $bc;
            border-bottom: 2px solid $bc;
            @include font(0.75*0.4rem, 1.8*0.4rem);
            span:nth-of-type(1){
                color: $blue;
            }
            .arrow_right{
                @include wh(.6*0.4rem, .6*0.4rem);
                fill: #999;
            }
        }
    }
    #hot_city_container{
        background-color: #fff;
        margin-bottom: 0.4*0.4rem;
    }
    .citylistul{
        li{
            float: left;
            text-align: center;
            color: $blue;
            border-bottom: 0.025*0.4rem solid $bc;
            border-right: 0.025*0.4rem solid $bc;
            @include wh(25%, 1.75*0.4rem);
            @include font(0.6*0.4rem, 1.75*0.4rem);
        }
        li:nth-of-type(4n){
            border-right: none;
        }
    }
    .city_title{
        color: #666;
        text-indent: 0.45*0.4rem;
        border-top: 2px solid $blue;
        border-bottom: 1px solid $bc;
        @include font(0.55*0.4rem, 1.45*0.4rem, "Helvetica Neue");
        span{
            @include sc(0.475*0.4rem, #999);
        }
    }

    .letter_classify_li{
        margin-bottom: 0.4*0.4rem;
        background-color: #fff;
        border-bottom: 1px solid $bc;
        .groupcity_name_container{
            li{
                color: #666;
            }
        }
    }
</style>
