<template>
<div class="index-board-list">
<div class="index-board-item" v-for="(item,index) in buyData" :key="index" :class="['index-board-' + item.url,{'line-last':index%2 !==0}]">
<div class="index-board-item-inner">
  <h2>{{ item.title }}</h2>
  <p>{{ item.desc }}</p>
  <div class="index-board-button">
     <router-link :to="'/details/' + item.url" class="button">立即订购</router-link>
  </div>
</div>
</div>
</div>
</template>

<script>


export default {
  data() {
 return{
  buyData:[
    {
      title:"新鲜咚咚",
      desc:"新鲜咚咚，每日提供",
      url:"xx"
    },
    {
      title:"质量咚咚",
      desc:"质量咚咚，吨位诚实，保质保量",
      url:"zl"
    },
    {
      title:"专业咚咚",
      desc:"专业咚咚，专业培训",
      url:"zy"
    },
    {
      title:"暖心咚咚",
      desc:"暖心咚咚，雪中送炭",
      url:"nx"
    }
  ]
 }
  }
}
</script>

<style scoped>

.index-board-list {
  overflow: hidden;
  margin-top: 15px;
}

.index-board-item {
  float: left;
  width: 400px;
  background: #fff;
  box-shadow: 0 0 1px #ddd;
  padding: 20px;
  margin-right: 20px;
  margin-bottom: 20px;
}

.index-board-item-inner {
  min-height: 125px;
  padding-left: 120px;
}
.index-board-xx .index-board-item-inner {
  background: url(@/assets/images/T1.png) no-repeat;
}

.index-board-zl .index-board-item-inner {
  background: url(@/assets/images/T2.png) no-repeat;
}

.index-board-zy .index-board-item-inner {
  background: url(@/assets/images/T3.png) no-repeat;
}

.index-board-nx .index-board-item-inner {
  background: url(@/assets/images/T4.png) no-repeat;
}

.index-board-item h2 {
  font-size: 18px;
  font-weight: bold;
  color: #000;
  margin-bottom: 15px;
}
.line-last {
  margin-right: 0;
}

.index-board-button {
  margin-top: 20px;
}

.lastest-news {
  min-height: 350px;
}
.new-item {
  display: inline-block;
  width: 230px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.button {
  background: #397298;
  color: #fff;
  display: inline-block;
  padding: 10px 20px;
  cursor: pointer;
}
</style>