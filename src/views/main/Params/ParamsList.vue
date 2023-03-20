<template>
  <div class="params">
    <el-table :data="tableData">
      <el-table-column prop="id" label="商品信息ID" width="80" show-overflow-tooltip></el-table-column>
      <el-table-column prop="itemCatId" label="商品关联ID" width="80" show-overflow-tooltip></el-table-column>
      <el-table-column prop="paramData" label="商品信息内容" show-overflow-tooltip></el-table-column>
    </el-table>
  </div>
</template>

<script>

export default {
  data() {
    return {
      tableData: []
    }
  },
  mounted() {
    this.http(1)
    this.$bus.$on("page", (data) => {
      this.http(data)
    })
    this.$bus.$on("onSearch", data => {
      this.tableData = data;
    })
  },
  methods: {
    http(page) {
      this.$api.selectItemParamAll({ page }).then(res => {

        this.tableData = res.data.result
      })
    }
  }
}
</script>

<style scoped>
.params {
  width: 1200px;
  margin: 0 auto;
}
</style>