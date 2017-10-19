<template>
    <div>app
        <transtion name="router-fade" mode="out-in">
            <keep-alive>
                <router-view v-if="$route.meta.keepAlive"></router-view>
            </keep-alive>
        </transtion>
        <transtion name="router-fade" mode="out-in">
            <keep-alive>
                <router-view v-if="!$route.meta.keepAlive"></router-view>
            </keep-alive>
        </transtion>
        <img src="./assets/logo.png">
        <svg-icon></svg-icon>
    </div>

</template>

<script>
    import svgIcon from './components/common/svg';
    export default {
        //name: 'app'
        components:{
          svgIcon
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
