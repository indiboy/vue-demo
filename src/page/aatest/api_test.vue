<template>
    <div class="">
      <yd-button type="primary" @click.native="test()">test</yd-button>
      <yd-button type="danger">danger</yd-button>
      <yd-button type="warning">warning</yd-button>
      <yd-button type="hollow">hollow</yd-button>
      <yd-button type="disabled" disabled>disabled</yd-button>
    </div>
</template>

<script>
  import Vue from 'vue';
  import {Button, ButtonGroup} from 'vue-ydui/dist/lib.rem/button';

  Vue.component(Button.name, Button);
  Vue.component(ButtonGroup.name, ButtonGroup);
    export default {
        data () {
            return {}
        },
        methods:{
            test(){
//              /api/v2/user/accessKey
//              /static/test.json
              var u = navigator.userAgent;
              var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
              var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
              if(isAndroid){
                var type = "Android"
              }else {
                var type = "ios"

              }
              alert(type)
                this.$ajax.get('/api/v2/user/accessKey',{
                  userName:13611173619,
                  type:type
                }).then(function (data) {
                    console.log(data);
                }).catch(function (err) {
                    console.log('catch2'+err);
                })
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" rel="stylesheet/scss">

</style>
