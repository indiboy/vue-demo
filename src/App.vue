<template>
  <!--同样的过渡效果，根据router中的meta.keepAlive判断那个组件需要进行缓存-->
    <div>
        <transition name="router-fade" mode="out-in">
            <keep-alive>
                <router-view v-if="$route.meta.keepAlive"></router-view>
            </keep-alive>
        </transition>
        <transition name="router-fade" mode="out-in">
            <router-view v-if="!$route.meta.keepAlive"></router-view>
        </transition>
    </div>
</template>

<script>
    export default {
        name: 'app',
        computed:{

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
