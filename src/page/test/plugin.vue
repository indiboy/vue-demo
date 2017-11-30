<template>
  <div>
    <mark>插件是测试demo</mark>
    <p id="p">点我</p>
    <img src="../../assets/logo.png" alt="">
    <yd-tab>
      <yd-tab-panel label="选项一">土地是以它的肥沃和收获而被估砂地或盐池，那上面连小草也长不出来的。</yd-tab-panel>
      <yd-tab-panel label="选项二">我需要三件东西：爱情友谊和图书。然而这情可以充实图书的内容，图书又是人们最忠实的朋友。</yd-tab-panel>
      <yd-tab-panel label="选项三">时间是一切财富中最宝贵的财富。</yd-tab-panel>
      <yd-tab-panel label="选项四">真理惟一可靠的标准就是永远自相符合。</yd-tab-panel>
      <yd-tab-panel label="选项四">真理惟一可靠的标准就是永远自相符合。</yd-tab-panel>
      <yd-tab-panel label="选项四">真理惟一可靠的标准就是永远自相符合。</yd-tab-panel>
    </yd-tab>
  </div>

</template>

<script>
  /*
  * 方法1：jq作为外部静态资源 直接在index.html中引入 可以
  * 方法2：jq作为内部静态资源 在main.js全局引入  可以
  * 方法3：jq作为内部静态资源 在子组件按需引入  可以
  * 方法4：使用webpack配置 可以
  * 方法5：mounted使用引入的js 可以
  * */
//  import '../../assets/jquery-1.8.3.min'
//  import {aa} from './jq'
  import Vue from 'vue';
  import {Tab, TabPanel} from 'vue-ydui/dist/lib.rem/tab';
  import {ScrollTab, ScrollTabPanel} from 'vue-ydui/dist/lib.rem/scrolltab';
  Vue.component(Tab.name, Tab);
  Vue.component(TabPanel.name, TabPanel);
  Vue.component(ScrollTab.name, ScrollTab);
  Vue.component(ScrollTabPanel.name, ScrollTabPanel);
    export default {
        name: '',
        data () {
            return {}
        },
      mounted:function () {

      }

    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>
p{
  height: 1rem;
  line-height: 1rem;
  background-color: teal;
  text-align: center;
  font-size: 0.24rem;
}
</style>
