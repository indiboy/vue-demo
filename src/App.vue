<template>
    <div>app{{count}}{{console}}
        <transtion name="router-fade" mode="out-in">
            <keep-alive>
                <router-view v-if="$route.meta.keepAlive">11</router-view>
            </keep-alive>
        </transtion>
        <transtion name="router-fade" mode="out-in">
            <keep-alive>
                <router-view v-if="!$route.meta.keepAlive">22</router-view>
            </keep-alive>
        </transtion>
        <img src="./assets/logo.png">
        <svg-icon></svg-icon>
    </div>

</template>

<script>
    import svgIcon from './components/common/svg';
    import { mapState } from 'vuex'
    export default {
        name: 'app',
        components:{
          svgIcon
        },
        computed:{
            ...mapState({
               count:state => state.count,
            }),
            count(){
                /*在子组件中获取state用this.$store*/
                return this.$store.state.count
            },
            console(){
              return this.count
            }
        }
    }
</script>

<style lang="scss" rel="stylesheet/scss">
    @import './style/common';
    .router-fade-enter-active, .router-fade-leave-active {
        transition: opacity .3s;
    }
    .router-fade-enter, .router-fade-leave-to {
        opacity: 0;
    }
</style>
