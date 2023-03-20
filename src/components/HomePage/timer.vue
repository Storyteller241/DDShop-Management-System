<template>
  <div class="chooser-component">
    <ul class="chooser-list">
      <li @click="timerHandle(item,index)" :class="{active:nowIndex === index}" v-for="(item, index) in timerData" :key="index">
        {{ item.value }}
      </li>
    </ul>

  </div>
</template>

<script>
export default {
  data() {
   
    return { 
      nowIndex:0,
     
    };
  },
  props:{
   timerData:{
    type:Array,
    default:function(){
      return [
        {
          value:"xin",
          id:1,
        }
      ]
    }
   }
  },
  methods:{
    timerHandle(item,index){
    this.nowIndex = index;
    }
  }
}
</script>

<style scoped>
.chooser-component {
  position: relative;
  display: inline-block;
}

.chooser-list li {
  display: inline-block;
  border: 1px solid #e3e3e3;
  height: 25px;
  line-height: 25px;
  padding: 8px;
  margin-right: 5px;
  border-radius: 3px;
  text-align: center;
  cursor: pointer;
}

.chooser-list li.active {
  border-color: #e3e3e3;
  background: #5d9cd3;
  color: #fff;
}
</style>