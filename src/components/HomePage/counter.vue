<template>
  <div class=".counter-component">
    <div class="counter-btn" @click="minHandle"> - </div>
    <div class="counter-show">
      <input type="text" v-model="counter" @keyup="inputHandle">
    </div>
    <div class="counter-btn" @click="addHandle"> + </div>
  </div>
</template>

<script>
export default {
  name: "Counter",
  data() {
    return {
      counter: 1
    }
  },
  props: {
    counterObj: {
      type: Object,
      default: {
        min: 1,
        max: 1
      }
    }
  },
  methods: {
    minHandle() {
      if (this.counter <= this.counterObj.min) {
        alert('一个都不要吗/(ㄒoㄒ)/~~')
        return;
      }
      this.counter--
    },
    addHandle() {
      if (this.counter >= this.counterObj.max) {
        alert('没有那么多咚咚啊！')
        return
      }
      this.counter++
    },
    inputHandle() {
      var fix //最终值
      if (typeof this.counter === "string") {
        fix = Number(this.counter.replace(/\D/g, ""));
      } else {
        fix = this.counterObj.min;
      }
      if (fix <= this.counterObj.min || fix > this.counterObj.max) {
        fix = this.counterObj.min;
      }
      this.counter = fix
    }
  }
}
</script>

<style scoped>
.counter-component {
  position: relative;
  display: inline-block;
  overflow: hidden;
  vertical-align: middle;
}

.counter-show {
  float: left;
}

.counter-show input {
  border: none;
  border-top: 1px solid #e3e3e3;
  border: 1px solid #e3e3e3;
  height: 23px;
  line-height: 23px;
  width: 25px;
  margin: 0 10px;
}

.counter-btn {
  text-align: center;
  width: 23px;
  height: 23px;
  background-color: #66b2d8;
  display: inline-block;
  margin-right: 2px;
}

.counter-btn:hover {
  background-color: rgb(123, 150, 198);
  color: aliceblue;
}</style>