<template>
    <!--<apd-head :headtitle=headtitle></apd-head>-->
  <div>title test page</div>
</template>

<script>
//    import apdHead from '@/components/header/head'
    export default {
        head: {
            title: {
              inner: 'It will be a pleasure'
            },
            meta: [
                { name: 'description', content: 'A description of the page', id: 'desc' }, // id to replace intead of create element
                // ...
                // Twitter
                { name: 'twitter:title', content: 'Content Title' },
                // with shorthand
                { n: 'twitter:description', c: 'Content description less than 200 characters'},
                // ...
                // Google+ / Schema.org
                { itemprop: 'name', content: 'Content Title' },
                { itemprop: 'description', content: 'Content Title' },
                // ...
                // Facebook / Open Graph
                { property: 'fb:app_id', content: '123456789' },
                { property: 'og:title', content: 'Content Title' },
                // with shorthand
                { p: 'og:image', c: 'https://example.com/image.jpg' }
                // ...
            ]
        },
        data () {
            return {
              headtitle:'login'
            }
        },
        components:{
//          apdHead
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" rel="stylesheet/scss">

</style>
