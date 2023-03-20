<template>
 
      <div class="index-left-block">
        <h2>全部产品</h2>
        <div v-for="(product, index) in productList" :key="index">
          <h3>{{ product.title }}</h3>
          <ul>
            <li v-for="(item, index) in product.list" :key="index">
              <a :href="item.url"> {{ item.name }}</a>
              <span class="hot-tag" v-if="item.hot">Hot</span>
            </li>
          </ul>
        </div>
      </div>
  
</template>

<script>
export default {
  data() {
    return {
      productList: [
        {
          title: "家用咚咚类",
          list: [
            {
              id: 1,
              name: "打扫助手",
              url: "http://www.baidu.com",
              hot: true
            },
            {
              id: 2,
              name: "厨房助手",
              url: "http://www.baidu.com",
              hot: false
            },
            {
              id: 3,
              name: "带娃助手",
              url: "http://www.baidu.com",
              hot: true
            },
            {
              id: 4,
              name: "工作助手",
              url: "http://www.baidu.com",
              hot: true
            },

          ]
        },
        {
          title: "护理陪伴咚咚类",
          list: [

            {
              id: 1,
              name: "老人护理",
              url: "http://www.baidu.com",
              hot: true
            },
            {
              id: 2,
              name: "接送孩子",
              url: "http://www.baidu.com",
              hot: true
            },
            {
              id: 3,
              name: "失恋陪伴",
              url: "http://www.baidu.com",
              hot: false
            },
            {
              id: 4,
              name: "失意陪伴",
              url: "http://www.baidu.com",
              hot: false
            },


          ]
        },
        {
          title: "治疗类咚咚类",
          list: [

            {
              id: 1,
              name: "精神治疗",
              url: "http://www.baidu.com",
              hot: true
            },
            {
              id: 2,
              name: "物理治疗",
              url: "http://www.baidu.com",
              hot: false
            },
            {
              id: 3,
              name: "意识治疗",
              url: "http://www.baidu.com",
              hot: false
            },
            {
              id: 4,
              name: "隔空治疗",
              url: "http://www.baidu.com",
              hot: false
            }

          ]
        },
        
        {
          title: "教育咚咚类",
          list: [

            {
              id: 1,
              name: "数学教育",
              url: "http://www.baidu.com",
              hot: true
            },
            {
              id: 2,
              name: "艺术教育",
              url: "http://www.baidu.com",
              hot: true
            },
            {
              id: 3,
              name: "音乐教育",
              url: "http://www.baidu.com",
              hot: true
            },
            {
              id: 4,
              name: "人生教育",
              url: "http://www.baidu.com",
              hot: false
            }

          ]
        },
      ]
    }
  }
}
</script>

<style scoped lang="less">


.index-left-block {
  margin: 15px;
  background:	#d8eaf7;
  box-shadow: 0 0 1px #ddd;
}

.index-left-block .hr {
  margin-bottom: 20px;
  height: 1px;
  width: 100%;
  background: #ddd;

}

.index-left-block h2 {
  background: #397298;
  color: #fff;
  padding: 10px 15px;
  margin-bottom: 20px;
}

.index-left-block h3 {
  padding: 0 15px 5px 15px;
  font-weight: bold;
  color: #222;
}

.index-left-block ul {
  padding: 10px 15px;
}

.index-left-block li {
  padding: 5px;
  a{
    color:#222
  }
}



.hot-tag {
  background: red;
  color: #fff;
}
</style>