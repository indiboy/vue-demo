<template>
  <div>{{teststore[0].id}}
    <yd-button type="primary">primary</yd-button>
    <yd-button type="danger">danger</yd-button>
    <yd-button type="warning">warning</yd-button>
    <yd-button type="hollow" @click.native="changtheme()">test</yd-button>
    <yd-button type="disabled" disabled>disabled</yd-button>
    <yd-countup
      endnum="1200"
      duration="3"
      decimals="2"
      separator=","
      prefix="$"
      suffix="美元"
    ></yd-countup>
    <yd-backtop></yd-backtop>
    <yd-tabbar class="foo">
      <yd-tabbar-item title="首页" link="#">
        <yd-icon name="home" slot="icon" size="0.54rem"></yd-icon>
      </yd-tabbar-item>
      <yd-tabbar-item title="购物车" link="#" active>
        <yd-icon name="shopcart" slot="icon" size="0.54rem"></yd-icon>
      </yd-tabbar-item>
      <yd-tabbar-item title="个人中心" link="#">
        <yd-icon name="ucenter-outline" slot="icon" size="0.54rem"></yd-icon>
      </yd-tabbar-item>
    </yd-tabbar>
    <yd-button size="large" type="primary" @click.native="show1 = true" >打开</yd-button>

    <yd-keyboard v-model="show1" :callback="done1" ref="keyboardDemo1" title="阿朋贷安全键盘" ></yd-keyboard>
    <yd-rollnotice autoplay="2000" >
      <yd-rollnotice-item v-for="item in list" :key="item.id"><span style="color:#F00;"> 荐 </span>{{item.title}}</yd-rollnotice-item>
    </yd-rollnotice>
  </div>
</template>

<script type="text/babel">
  import Vue from 'vue';
  import {ActionSheet} from 'vue-ydui/dist/lib.rem/actionsheet';
  import {Button, ButtonGroup} from 'vue-ydui/dist/lib.rem/button';
  import {CountUp} from 'vue-ydui/dist/lib.rem/countup';
  import {BackTop} from 'vue-ydui/dist/lib.rem/backtop';
  import {TabBar, TabBarItem} from 'vue-ydui/dist/lib.rem/tabbar';
  import {Icons} from 'vue-ydui/dist/lib.rem/icons';
  import { Confirm, Alert, Toast, Notify, Loading } from 'vue-ydui/dist/lib.rem/dialog';
  import {KeyBoard} from 'vue-ydui/dist/lib.rem/keyboard';
  import {RollNotice, RollNoticeItem} from 'vue-ydui/dist/lib.rem/rollnotice';
  Vue.component(Button.name, Button);
  Vue.component(ButtonGroup.name, ButtonGroup);
  Vue.component(CountUp.name, CountUp);
  Vue.component(BackTop.name, BackTop);
  Vue.component(TabBar.name, TabBar);
  Vue.component(TabBarItem.name, TabBarItem);
  Vue.component(Icons.name, Icons);
  Vue.component(KeyBoard.name, KeyBoard);
  Vue.component(RollNotice.name, RollNotice);
  Vue.component(RollNoticeItem.name, RollNoticeItem);
  Vue.prototype.$dialog = {
    confirm: Confirm,
    alert: Alert,
    toast: Toast,
    notify: Notify,
    loading: Loading,
  };
  export default {
    data() {
      return {
        show1: false,
        list: [
          {img: "//img1.shikee.com/try/2016/06/23/14381920926024616259.jpg", title: "标题111标题标题标题标题", price: 156.23, w_price: 89.36},
          {img: "//img1.shikee.com/try/2016/06/21/10172020923917672923.jpg", title: "标题222标题标题标题标题", price: 256.23, w_price: 89.36},
          {img: "//img1.shikee.com/try/2016/06/23/15395220917905380014.jpg", title: "标题333标题标题标题标题", price: 356.23, w_price: 89.36},
          {img: "//img1.shikee.com/try/2016/06/25/14244120933639105658.jpg", title: "标题444标题标题标题标题", price: 456.23, w_price: 89.36},
          {img: "//img1.shikee.com/try/2016/06/26/12365720933909085511.jpg", title: "标题555标题标题标题标题", price: 556.23, w_price: 89.36},
          {img: "//img1.shikee.com/try/2016/06/19/09430120929215230041.jpg", title: "标题666标题标题标题标题", price: 656.23, w_price: 89.36}
        ],
        theme:3,
        show1: false,
        datetime0: ''
      }
    },
    computed:{
      teststore:function () {
        return this.$store.state.todos
      }
    },
    methods:{
      aaa(){
        alert(1)
      },
      done1(val) {
        console.log('输入的密码是：' + val);
        this.$dialog.loading.open('验证支付密码');

        /* 模拟异步验证密码 */
        setTimeout(() => {
          this.$refs.keyboardDemo1.$emit('ydui.keyboard.error', '对不起，您的支付密码不正确，请重新输入。');
          this.$dialog.loading.close();
        }, 2000);
      },
      changtheme(){
        var that = this;
        this.$ajax({
            method:'get',
            url:'api/activity/draw'
          }).then(function (data) {
          console.log(data);
          that.$dialog.confirm({
              title: data.data.code,
              mes: data.data.msg,
              opts: () => {
                that.$dialog.toast({mes: '你点了确定', timeout: 1000});
              }
            });
          }).catch(function (err) {
            alert(err)
          })
      }
    }
  }
</script>
<style scoped rel="stylesheet/scss" lang="scss">
.foot{
  background-color: red;

}
  .ooo{
    height: 2rem;
    width: 80%;
    margin: 0 auto;
    border-radius: 10rem;
    overflow: hidden;
    background-color: red;
  }
</style>
