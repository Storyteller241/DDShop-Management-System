<template>
    <div class="index-wrap">
    <div class="index-left">
      <HomeNav></HomeNav>
    </div>
    <div class="index-right">
      <HomeSwiper></HomeSwiper>
      <HomeProductList></HomeProductList>
    </div>
  </div>
    
    
</template>

<script>
// @ is an alias to /src
import HomeNav from "./HomeNav.vue";
import HomeSwiper from "./HomeSwiper.vue"
import HomeProductList from "./HomeProductList.vue";

export default {
  name: 'HomeView',
  components: {
    HomeNav,
    HomeSwiper,
    HomeProductList
  }
}
</script>
<style lang="less" scoped>
.index-wrap {
  width: 1200px;
  margin: 0 auto;
}


.index-left {
  float: left;
  width: 300px;
  text-align: left;
}
.index-right {
  float: left;
  width: 900px;
}
</style>
