<template>
  <div class="xinxian">
    <div class="sales-board">
      <div class="sales-board-intro">
        <h2>质量咚咚，童叟无欺</h2>
        <p>
          <img src="@/assets/slideShow/2.png" alt="">
          <br>
          本店咚咚精挑细选，选拔质量最好的咚咚为您服务，追求质量体验，高品质服务。
          本店咚咚精挑细选，选拔质量最好的咚咚为您服务，追求质量体验，高品质服务。
          本店咚咚精挑细选，选拔质量最好的咚咚为您服务，追求质量体验，高品质服务。
          本店咚咚精挑细选，选拔质量最好的咚咚为您服务，追求质量体验，高品质服务。
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
      <p>质量系列咚咚，都是最质量咚咚，本店绝不使用差版咚咚，不使用回收咚咚，保证给您最质量的体验。</p>
      <h3> 使用说明 </h3>
      <ul>
        <li>新品咚咚需仔细阅读咚咚使用手册。</li>
        <li>启动咚咚请保持安静，咚咚会录入您的信息声音。</li>
        <li>请勿长时间使用咚咚，咚咚也需要休息</li>
        <li>请勿忽略咚咚的请求，这会导致咚咚心情指数下降。</li>
      </ul>

      <h3>
        专业功能型咚咚使用介绍
      </h3>
      <ul>
        <li>打扫助手，可帮助解决大部分家庭打扫问题，解放您的双手。</li>
        <li>厨房助手，精通格式菜样，每天给您新的体验。</li>
        <li>带娃助手，本店咚咚性格温顺，给孩子最舒适的感觉，放松您的心情。</li>
        <li>工作助手，本店同时供给专业咚咚，为您解决疑难问题。</li>
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
          value: "打扫助手型",
          id: 1
        },
        {
          value: "厨房助手型",
          id: 2
        },

        {
          value: "带娃助手型",
          id: 3
        },
        {
          value: "工作助手型",
          id: 4
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