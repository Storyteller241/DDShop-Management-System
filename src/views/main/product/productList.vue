<template>
  <el-table :data='tableData'>
    <el-table-column show-overflow-tooltip prop="id" label="产品id" width="100"></el-table-column>
    <el-table-column show-overflow-tooltip prop="title" label="产品名称" width="150"></el-table-column>
    <el-table-column show-overflow-tooltip prop="image" label="产品图片" width="100"></el-table-column>
    <el-table-column show-overflow-tooltip prop="sellPoint" label="产品卖点" width="300"></el-table-column>
    <el-table-column show-overflow-tooltip prop="price" label="产品价格" width="100"></el-table-column>
    <el-table-column show-overflow-tooltip prop="num" label="产品数量" width="100"></el-table-column>
    <el-table-column show-overflow-tooltip prop="descs" label="产品描述">
      <template v-slot="scope">
        <div v-html="scope.row.descs"></div>
      </template>
    </el-table-column>
    <el-table-column label="操作">
      <template v-slot="scope">
        <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
        <el-button class="e-b"  size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  data() {
    return {
      tableData: []
    }
  },
  mounted() {
    this.http(1);
    this.$bus.$on("page", page => {
      // console.log(page);
      this.http(page);
    });
    this.$bus.$on("searchData", data => {
      this.tableData = data
    })
    this.$bus.$on("refresh", () => {
      this.http(1);
    })
  },
  methods: {
    http(page) {
      this.$api.selectTbItemAllByPage({ page }).then(res => {
        // console.log(res.data);
        if (res.data.status === 200) {
          this.tableData = res.data.result
        }
      })
    },
    //编辑按钮
    handleEdit(index, row) {
        this.$bus.$emit("onEditorEvent",row)
    },
    //删除按钮
    handleDelete(index, row) {

      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        //确定删除
        this.$api.deleteItemById({ id: row.id }).then(res => {
          if (res.data.status === 200) {
            this.$message({
              type: 'success',
              message: '删除成功!'
            });
            this.http(1);
          }else{
            this.$message({
          type: 'error',
          message: '删除失败!'
        });
          }
        })

      }).catch(() => {
        //取消删除
        this.$message({
          type: 'info',
          message: '已取消删除'
        });
      });
    }
  }
}
</script>

<style scoped>
.e-b{
 background-color: rgb(107, 144, 193);
}
</style>