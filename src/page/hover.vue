<template>
  <div class="solution-list">
    <ul id="solutionList" class="clearfix">
      <li v-for="(item,index) in content" :key="item.id" :class="{active:isActive==index}" @click="click(index)">
        <div class="solution-item-wrapper">
          <p class="solution-title">{{item.title}}</p>
          <div class="short-bar"></div>
          <p class="solution-intro">{{item.intro}}</p>
          <a href="#">{{item.link}}</a>
        </div>
      </li>
    </ul>
  </div>

</template>
<script>
 export default{
   name:'hover',
   data(){
     return{
       content:[
         {
           "title":"网站解决方案",
           "intro":"网站解决方案为企业及开发者提供灵活弹性自动化的基础IT设施建设、按需付费的服务模式及低成本的运维服务体系，帮助客户推动企业核心业务创新发展。",
           "link":"查看详情"
         },
         {
           "title":"金融云解决方案",
           "intro":"金融云为客户提供量身定制的云计算服务，IT硬件零投入，云设施运维零维护，高品质保障的售后服务机制，帮助金融用户高效应用云计算服务。",
           "link":"查看详情"
         },
         {
           "title":"移动云解决方案",
           "intro":"移动云应用虚拟化系统为客户提供最佳的应用性能及灵活的应用虚拟化服务，帮助客户实现手机、平板电脑等移动设备安全顺畅地访问各种应用软件。",
           "link":"查看详情"
         },
         {
           "title":"电商云解决方案",
           "intro":"电商云帮助电商客户快速实现平台搭建、节约成本、应对业务高并发、强化安全防护能力，助力电商客户快速实现金融创新及业务增收的目标。",
           "link":"查看详情"
         },
         {
           "title":"游戏云解决方案",
           "intro":"游戏云为客户游戏开发、游戏运营提供专属服务集群；多场景多类型的游戏部署解决方案，同时提供尊贵VIP售后服务，为客户游戏稳定运行提供基石。",
           "link":"查看详情"
         }
       ],
       isActive:false
     }
   },
  methods:{
      click(index){
        this.isActive=index;
     }
   }
 }
</script>
<style  scoped lang='scss' rel="stylesheet/scss">
  *{margin:0;padding:0;list-style-type:none;}
  a,img{border:0;text-decoration:none;}

  .clearfix:after{visibility:hidden;display:block;font-size:0;content:" ";clear:both;height:0}
  *html .clearfix{height:1%}

  .solution-list{position:relative;height:412px;z-index:9;width:1200px;margin:30px auto;}
  .short-bar{position:absolute;top:187px;left:50%;margin-left:-15px;width:30px;height:3px;background-color:#fff}
  .active .short-bar{top:201px;background-color:#009dff}
  .solution-list ul li{float:left;width:240px;position:relative;height:412px;transition:all .5s;-moz-transition:all .5s;-webkit-transition:all .5s;-o-transition:all .5s}
  .solution-item-wrapper{width:240px;height:412px;background:url(./img/solution_item_bg_01.jpg) center no-repeat}
  li:nth-of-type(2) .solution-item-wrapper{width:240px;height:412px;background:url(./img/solution_item_bg_02.jpg) center no-repeat}
  li:nth-of-type(3) .solution-item-wrapper{width:240px;height:412px;background:url(./img/solution_item_bg_03.jpg) center no-repeat}
  li:nth-of-type(4) .solution-item-wrapper{width:240px;height:412px;background:url(./img/solution_item_bg_04.jpg) center no-repeat}
  li:nth-of-type(5) .solution-item-wrapper{width:240px;height:412px;background:url(./img/solution_item_bg_05.jpg) center no-repeat}

  li.active .solution-item-wrapper{position:absolute;z-index:9;top:-62px;left:-51px;width:341px;height:526px;background:url(img/solution_item_bg_active_01.jpg) no-repeat;-webkit-box-shadow:0 5px 40px rgba(0,0,0,.5);-moz-box-shadow:0 5px 40px rgba(0,0,0,.5);box-shadow:0 5px 40px rgba(0,0,0,.5)}

  //@media only screen and (max-width:1400px){
    //.product-special-li-5.active .solution-item-wrapper{left:-102px}
 // }

  li.active :nth-of-type(2) .solution-item-wrapper{background-image:url(./img/solution_item_bg_active_02.jpg)}
  li.active :nth-of-type(3) .solution-item-wrapper{background-image:url(./img/solution_item_bg_active_03.jpg)}
  li.active :nth-of-type(4) .solution-item-wrapper{background-image:url(./img/solution_item_bg_active_04.jpg)}
  li.active :nth-of-type(5) .solution-item-wrapper{background-image:url(./img/solution_item_bg_active_05.jpg)}
  .solution-list ul li p.solution-title{position:absolute;top:211px;width:100%;text-align:center;color:#fff;font-size:18px;z-index:2}
  .solution-list ul li p.solution-intro{position:absolute;top:282px;left:50%;margin-left:-121px;width:242px;overflow:hidden;color:#eee;line-height:2;z-index:2;opacity:0;filter:alpha(opacity=0);font-size:14px;text-align:justify}
  .solution-list ul li a{display:none;position:absolute;top:452px;left:50%;margin-left:-87px;width:174px;height:40px;line-height:40px;text-align:center;font-size:14px;color:#fff;z-index:2;background-color:#0af}
  .solution-list ul li a:hover{background-color:#0099e5;transition:all .6s;-moz-transition:all .6s;-webkit-transition:all .6s;-o-transition:all .6s}
  .solution-list ul li.active p.solution-title{top:158px;font-size:22px}
  .solution-list ul li.active p.solution-intro{top:230px;opacity:1;filter:alpha(opacity=100)}
  .solution-list ul li.active a{top:388px;display:block}

</style>
