<template>
  <div>
  <yd-navbar title="NavBar"></yd-navbar>
    <yd-slider autoplay="3000" class="ooo">
      <yd-slider-item>
        <a href="http://www.ydcss.com">
          <img src="http://static.ydcss.com/uploads/ydui/1.jpg">
        </a>
      </yd-slider-item>
      <yd-slider-item>
        <a href="http://www.ydcss.com">
          <img src="http://static.ydcss.com/uploads/ydui/2.jpg">
        </a>
      </yd-slider-item>
      <yd-slider-item>
        <a href="http://www.ydcss.com">
          <img src="http://static.ydcss.com/uploads/ydui/3.jpg">
        </a>
      </yd-slider-item>
    </yd-slider>
  <yd-list theme=3>
    <yd-list-item v-for="item, key in list" :key="key">
      <img slot="img" :src="item.img">
      <span slot="title">{{item.title}}</span>
      <yd-list-other slot="other">
        <div>
          <span class="demo-list-price"><em>¥</em>{{item.price}}</span>
          <span class="demo-list-del-price">¥{{item.w_price}}</span>
        </div>
        <div>content</div>
      </yd-list-other>
    </yd-list-item>

  </yd-list>
    <yd-datetime style="border:1px solid #000;height: 50px;line-height: 50px;text-align: center;" v-model="datetime0"></yd-datetime>
    <yd-button size="large" type="primary" @click.native="show1 = true">打开</yd-button>
    <yd-keyboard v-model="show1" :callback="done1" ref="keyboardDemo1"></yd-keyboard>
    <yd-tabbar class="foot">
      <yd-tabbar-item title="首页" link="#" @click.native="changtheme()">
        <yd-icon name="home" slot="icon" size="0.54rem"></yd-icon>
      </yd-tabbar-item>
      <yd-tabbar-item title="购物车" link="#" active>
        <yd-icon name="shopcart" slot="icon" size="0.54rem"></yd-icon>
      </yd-tabbar-item>
      <yd-tabbar-item title="个人中心" link="#">
        <yd-icon name="ucenter-outline" slot="icon" size="0.54rem"></yd-icon>
      </yd-tabbar-item>
    </yd-tabbar>
  </div>
</template>

<script type="text/babel">
  export default {
    data() {
      return {
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

    methods:{
      changtheme(){
          this.theme = 5;
          alert(5)
      },
      done1(val) {
        console.log('输入的密码是：' + val);
        this.$dialog.loading.open('验证支付密码');

        /* 模拟异步验证密码 */
        setTimeout(() => {
          this.$refs.keyboardDemo1.$emit('ydui.keyboard.error', '对不起，您的支付密码不正确，请重新输入。');
          this.$dialog.loading.close();
        }, 2000);
      }
    }
  }
</script>
<style scoped>
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
