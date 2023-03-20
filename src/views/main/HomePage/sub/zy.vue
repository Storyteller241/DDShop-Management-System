<template>
  <div class="xinxian">
    <div class="sales-board">
      <div class="sales-board-intro">
        <h2>专业咚咚，专业培训</h2>
        <p>
          <img src="@/assets/slideShow/3.png" alt="">
          <br>
          专业咚咚挑选自各大行业领先咚咚，专业能力一流，为您提供666的服务。
          专业咚咚挑选自各大行业领先咚咚，专业能力一流，为您提供666的服务。
          专业咚咚挑选自各大行业领先咚咚，专业能力一流，为您提供666的服务。
          专业咚咚挑选自各大行业领先咚咚，专业能力一流，为您提供666的服务。
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
      <p>专业系列咚咚，都是各行各业顶尖咚咚，为您提供最专业的服务。</p>
      <h3> 使用说明 </h3>
      <ul>
        <li>新品咚咚需仔细阅读咚咚使用手册。</li>
        <li>启动咚咚请保持安静，咚咚会录入您的信息声音。</li>
        <li>请勿长时间使用咚咚，咚咚也需要休息</li>
        <li>请勿忽略咚咚的请求，这会导致咚咚心情指数下降。</li>
      </ul>

      <h3>
        专业型咚咚使用方面
      </h3>
      <ul>
        <li>数学教育，本店咚咚来自咚咚界数学泰斗级别大师的麾下，给您最专业的数学教育。</li>
        <li>艺术教育，咚咚的艺术细胞很高，可以为您的一些想法添砖加瓦。</li>
        <li>音乐教育，本店咚咚热爱音乐，时刻为您演奏美妙乐曲。</li>
        <li>人生教育，本店选取十年以上咚咚龄的老咚咚，为您提供最全面的人生教育。</li>
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
          value: "数学教育型",
          id: 1
        },
        {
          value: "艺术教育型",
          id: 2
        },

        {
          value: "音乐教育型",
          id: 3
        },
        {
          value: "人生教育型",
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

.button {
  background: #397298;
  color: #fff;
  display: inline-block;
  padding: 10px 20px;
  cursor: pointer;
}</style>