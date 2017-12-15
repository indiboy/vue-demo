<template>
  <div>
    <yd-pullrefresh :callback="loadList" ref="pullrefreshDemo">

      <yd-list theme="4">
        <yd-list-item v-for="item, key in list" :key="key">
          <img slot="img" :src="item.img">
          <span slot="title">{{item.title}}</span>
          <yd-list-other slot="other">
            <div>
              <span class="list-price"><em>¥</em>{{item.marketprice}}</span>
              <span class="list-del-price">¥{{item.productprice}}</span>
            </div>
            <div>content</div>
          </yd-list-other>
        </yd-list-item>
      </yd-list>

    </yd-pullrefresh>
    <yd-cell-group>
      <yd-cell-item>
        <yd-icon55 slot="icon" name="phone3" size=".45rem"></yd-icon55>
        <input type="text" slot="right" placeholder="请输入手机号码">

        <!-- ↓↓关键代码是这里↓↓ -->
        <yd-sendcode slot="right"
                     v-model="start1"
                     @click.native="sendCode1"
                     type="warning"
        ></yd-sendcode>
        <!-- ↑↑关键代码是这里↑↑ -->

      </yd-cell-item>
    </yd-cell-group>
    <div id="myChart" :style="{width: '300px', height: '300px'}"></div>
  </div>
</template>

<script>
  import Vue from 'vue';
  let echarts = require('echarts/lib/echarts')
  // 引入柱状图组件
  require('echarts/lib/chart/bar')
  // 引入提示框和title组件
  require('echarts/lib/component/tooltip')
  require('echarts/lib/component/title')
  import {SendCode} from 'vue-ydui/dist/lib.rem/sendcode';
  import {CellGroup, CellItem} from 'vue-ydui/dist/lib.rem/cell';
  import {Icons} from 'vue-ydui/dist/lib.rem/icons';
  import { Confirm, Alert, Toast, Notify, Loading } from 'vue-ydui/dist/lib.rem/dialog';
  /* 使用px：import { Confirm, Alert, Toast, Notify, Loading } from 'vue-ydui/dist/lib.px/dialog'; */

  Vue.prototype.$dialog = {
    confirm: Confirm,
    alert: Alert,
    toast: Toast,
    notify: Notify,
    loading: Loading,
  };
  Vue.component(CellGroup.name, CellGroup);
  Vue.component(CellItem.name, CellItem);
  Vue.component(SendCode.name, SendCode);
  Vue.component(Icons.name, Icons);
  export default {
    data() {
      return {
        start1: false
      }
    },
    mounted() {
      this.drawLine();
    },
    methods: {
        loadList() {
            const url = 'http://list.ydui.org/getdata.php';

            this.$ajax.get('/static/data/test.json', {params: {type: 'pulldown', page: this.page}}).then((response) => {

                const _list = response.body;

                this.list = [..._list, ...this.list];

                this.$dialog.toast({
                    mes: _list.length > 0 ? '为您更新了' + _list.length + '条内容' : '已是最新内容'
                });

                this.$refs.pullrefreshDemo.$emit('ydui.pullrefresh.finishLoad');

                this.page++;
            });
        },
        drawLine() {
            // 基于准备好的dom，初始化echarts实例
            let myChart = echarts.init(document.getElementById('myChart'))
            // 绘制图表
            myChart.setOption({
              title: { text: 'ECharts 入门示例' },
              tooltip: {},
              xAxis: {
                data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
              },
              yAxis: {},
              series: [{
                name: '销量',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
              }]
            });
          },
        sendCode1() {
            this.$dialog.loading.open('发送中...');
            setTimeout(() => {

              this.start1 = true;
              this.$dialog.loading.close();

              this.$dialog.toast({
                mes: '已发送',
                icon: 'success',
                timeout: 1500
              });

            }, 1000);
          }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>

</style>
