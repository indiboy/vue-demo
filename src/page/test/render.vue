<template>

</template>

<script>
    export default {
        name: '',
        data () {
            return {
                a:'a',
                b:'b'
            }
        },
        render:function (createElement) {
            return createElement('h1', this.a)
        }

    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>

</style>
