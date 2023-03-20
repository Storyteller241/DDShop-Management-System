<template>
  <div class="pagination-container">
    <el-pagination layout="prev, pager, next,jumper" @current-change="handleCurrentChange"
      :current-page.sync="currentPage" :total="total" background @size-change="handleSizechange">

    </el-pagination>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentPage: 1,
    }
  },
 props:{
   total:{
    type:[String,Number],
    default:0
   }
 },
  methods: {
    handleSizechange() {

    },
    handleCurrentChange(val) {
      console.log(val);
      this.$bus.$emit("page",val)
    }
  }
}
</script>

<style scoped>
.pagination-container{
  margin-top: 40px;
}
</style>