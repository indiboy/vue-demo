<template>
    <div class="loading">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
    </div>
</template>

<script>
    export default {
        name: "loading"
    }
</script>

<style scoped rel="stylesheet/scss" lang="scss">
  .loading{
    width: 2rem;
    height: 1rem;
    background-color: rgba(0,0,0,0.2);
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    display: flex;
    justify-content: space-around;
    align-items:center;
    span{
      display: inline-block;
      width: 0.1rem;
      height: 0.1rem;
      background-color: #fff;
    }
    span:nth-child(1){
      animation: bgcolor 1s ease infinite;
    }
    span:nth-child(2){
      animation: bgcolor 1.5s ease infinite;
    }
    span:nth-child(3){
      animation: bgcolor 2s ease infinite;
    }
    span:nth-child(4){
      animation: bgcolor 2.5s ease infinite;
    }
  }
  @keyframes bgcolor {
     0%{background-color: rgba(10,0,200,0.9)}
     50%{background-color: rgba(100,10,60,0.5)}
     100%{background-color: rgba(250,80,20,0.1)}
  }
</style>
