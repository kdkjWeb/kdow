<template>
  <!-- 入口文件 -->
  <div id="app">
    <router-view
          class="view"
          keep-alive
          transition
          transition-mode="out-in">
    </router-view>
    <div class="loading" v-if="showLoading">
       <div class="loading_shadow"></div>
       <img src="/static/loading.gif" class="loading_img" alt="加载图片..">
    </div>
  </div>
</template>

<script>
export default {
   computed: {
      showLoading (){
          return this.$store.state.showLoading
      }
   }
}
</script>

<style>
   @import "./css/app.css";
  .loading{position: absolute;z-index: 9999; top:100px; left:200px;}
  .loading_shadow{position:fixed;width:100%;height:1800px;left:0; top:0; opacity: 0.5;z-index: 9999;}
  .loading_img{position: fixed; z-index: 9999; left: 40%; top:30%; width:40px;height:40px;padding:60px 100px;box-sizing: content-box; background-color: #333;border-radius: 10px;   filter:alpha(opacity=50);  -moz-opacity:0.5;  -khtml-opacity: 0.5; opacity: 0.5;  }
</style>
