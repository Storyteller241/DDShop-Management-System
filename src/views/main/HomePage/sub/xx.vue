<template>
  <div class="xinxian">
    <div class="sales-board">
      <div class="sales-board-intro">
        <h2>新鲜咚咚，每日提供</h2>
        <p>
          <img src="@/assets/slideShow/1.png" alt="">
          <br>
          本咚咚供应不使用陈旧咚咚，每天新鲜咚咚新鲜发送，给您最好，最新的体验。
          本咚咚供应不使用陈旧咚咚，每天新鲜咚咚新鲜发送，给您最好，最新的体验。
          本咚咚供应不使用陈旧咚咚，每天新鲜咚咚新鲜发送，给您最好，最新的体验。
          本咚咚供应不使用陈旧咚咚，每天新鲜咚咚新鲜发送，给您最好，最新的体验。
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
      <p>陪伴系列咚咚，都是最新款咚咚，本店绝不使用旧版咚咚，不使用回收咚咚，保证给您最新鲜的体验。</p>
      <h3> 使用说明 </h3>
      <ul>
        <li>新品咚咚需仔细阅读咚咚使用手册。</li>
        <li>启动咚咚请保持安静，咚咚会录入您的信息声音。</li>
        <li>请勿长时间使用咚咚，咚咚也需要休息</li>
        <li>请勿忽略咚咚的请求，这会导致咚咚心情指数下降。</li>
      </ul>

      <h3>
        陪伴型咚咚使用方面
      </h3>
      <ul>
        <li>家庭陪伴，可弥补亲人缺失的空缺。</li>
        <li>休闲陪伴，为休闲生活增添乐趣。</li>
        <li>无聊陪伴，为您提供情绪价值。</li>
        <li>老人陪伴，为无子女在家的老人提供陪伴，让老人幸福感提升</li>
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
          value: "老人护理型",
          id: 1
        },
        {
          value: "接送孩子型",
          id: 2
        },

        {
          value: "失恋陪伴型",
          id: 3
        },
        {
          value: "失意陪伴型",
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