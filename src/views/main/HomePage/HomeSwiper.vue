<template>
  <div class="swiper-size">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(slide, index) in bannerImg" :key="index">
        <img clss="swiperimg" :src="slide" alt="">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  data() {
    return {
      swiperOption: {
         pagination:{
          el:'.swiper-pagination',
         },
         autoplay: true,
         navigation: {
          nextEl: ".swiper-button-next",
          prevEl:".swiper-button-prev"
         },
         loop:true
      },
      bannerImg: [
        require("../../../assets/slideShow/1.png"),
        require("../../../assets/slideShow/2.png"),
        require("../../../assets/slideShow/3.png"),
        require("../../../assets/slideShow/4.png")

      ]
    }
  }
}
</script>

<style scoped>
.swiperimg {
  width: 100%;
  height: 350px;
}

.swiper-size {
  margin-top: 15px;
}
</style>