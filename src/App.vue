<template>
    <div>
        <transition name="router-fade" mode="out-in">
            <keep-alive>
                <router-view v-if="$route.meta.keepAlive"></router-view>
            </keep-alive>
        </transition>
        <transition name="router-fade" mode="out-in">
            <keep-alive>
                <router-view v-if="!$route.meta.keepAlive"></router-view>
            </keep-alive>
        </transition>
        <img src="./assets/logo.png">
        <svg-icon></svg-icon>
      <p>{{count555}}</p>
    </div>

</template>

<script>
    import svgIcon from './components/common/svg';
    /*获取多个状态使用mapstate,*/
//    import { mapState } from 'vuex'
    export default {
        name: 'app',
        components:{
          svgIcon
        },
        computed:{
            count555(){
              /*在子组件中获取state用this.$store*/
              return this.$store.state.todos
//              return this.$store.getters.doneTodos[0].text
            },


            /*...mapstate可以在组件中直接使用this调用*/
//            ...mapState({
//                count:function (state) {
//                    return state.count
//                }
//            }),


        }
    }
</script>

<style lang="scss" rel="stylesheet/scss">
    @import 'assets/style/common';
    .router-fade-enter-active, .router-fade-leave-active {
        transition: opacity .3s;
    }
    .router-fade-enter, .router-fade-leave-to {
        opacity: 0;
    }
</style>
