<template>
  <div class="xinxian">
    <div class="sales-board">
      <div class="sales-board-intro">
        <h2>暖心咚咚，雪中送炭</h2>
        <p>
          <img src="@/assets/slideShow/4.png" alt="">
          <br>
          暖心咚咚可以成为您生命中一道明亮的光，解救您于不自由不快乐的境地。
          暖心咚咚可以成为您生命中一道明亮的光，解救您于不自由不快乐的境地。
          暖心咚咚可以成为您生命中一道明亮的光，解救您于不自由不快乐的境地。
          暖心咚咚可以成为您生命中一道明亮的光，解救您于不自由不快乐的境地。
        </p>
      </div>
      <div class="sales-board-form">
        <div class="sales-board-line-left">购买数量: </div>
        <div class="sales-board-line-right">
          <Counter :counterObj="counterObj"></Counter>
        </div>
      </div>
      <div class="sales-board-form">
        <div class="sales-board-line-left">咚咚类型: </div>
        <div class="sales-board-line-right">
          <Types :selecterData="selecterData" ></Types>
        </div>
      </div>
      <div class="sales-board-form">
        <div class="sales-board-line-left">有效时间: </div>
        <div class="sales-board-line-right">
          <Timer :timerData="timerData"></Timer>
        </div>
      </div>
    </div>
    <div class="sales-board-des">
      <h2>咚咚产品说明</h2>
      <p>暖心系列咚咚，数量较少，需求量大，本店绝对保证对每一个用户的服务统一且专业。</p>
      <h3> 使用说明 </h3>
      <ul>
        <li>新品咚咚需仔细阅读咚咚使用手册。</li>
        <li>启动咚咚请保持安静，咚咚会录入您的信息声音。</li>
        <li>请勿长时间使用咚咚，咚咚也需要休息</li>
        <li>请勿忽略咚咚的请求，这会导致咚咚心情指数下降。</li>
      </ul>

      <h3>
        暖心型咚咚使用方面
      </h3>
      <ul>
        <li>精神治疗，给您放松的体验，深入内心交流。</li>
        <li>物理治疗，本店咚咚有最专业的手法最专业的设备，给您最好体验。</li>
        <li>意念治疗，啊吧啊吧。</li>
        <li>隔空治疗，[]~(￣▽￣)~*</li>
      </ul>
    </div>
  </div>
</template>

<script>


import Counter from "@/components/HomePage/counter.vue"
import Types from "@/components/HomePage/types.vue"
import Timer from "@/components/HomePage/timer.vue"

export default {
  data() {
    return {
      counterObj: {
        min: 1,
        max: 20
      },
      selecterData: [
      {
          value: "精神治疗型",
          id: 1
        },
        {
          value: "物理治疗型",
          id: 2
        },

        {
          value: "意念治疗型",
          id: 3
        },
        {
          value: "隔空治疗型",
          id: 4
        },

        {
          value: "按摩护理型",
          id: 5
        }
      ],
      timerData: [
        {
          value: '6小时',
          id: 6
        },
        {
          value: '8小时',
          id: 8
        },
        {
          value: '10小时',
          id: 10
        },
        {
          value: '12小时',
          id: 12
        }
      ]
    }
    

  },
  components: {
    Counter,
    Types,
    Timer
  }
}
</script>

<style scoped>
.xinxian {
  text-align: left;
}

.buy-dialog-title {
  font-size: 16px;
  font-weight: bold;
}

.buy-dialog-btn {
  margin-top: 20px;
}

。buy-dialog-table {
  width: 100%;
  margin-bottom: 20px;
}

.buy-dialog-table td,
.buy-dialog-table th {
  border: 1px solid #e3e3e3;
  text-align: center;
  padding: 5px 0;
}

.buy-dialog-table th {
  background: #397298;
  color: #fff;
  border: 1px solid #397298;
}

.button {
  background: #397298;
  color: #fff;
  display: inline-block;
  padding: 10px 20px;
  cursor: pointer;
}</style>