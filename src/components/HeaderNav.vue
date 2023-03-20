<template>
  <el-menu :default-active="active" mode="horizontal" background-color="#397298" text-color="#00BFFF"
    active-text-color="#FF8C00" router @select="handleSelect">
    <el-menu-item index="/">咚咚首页</el-menu-item>
    <el-menu-item index="/product">咚咚商品管理</el-menu-item>
    <el-menu-item index="/params">咚咚商品信息</el-menu-item>
    <el-menu-item index="/ad">咚咚小广告</el-menu-item>
    <el-menu-item class="user">
      <span class="user-name">
        {{ user.username }}
      </span>
      <el-button @click="logoutHandle">退出</el-button>
    </el-menu-item>
  </el-menu>
</template>

<script>
import { mapState, mapMutations } from 'vuex';


export default {
  data() {
    return {
      active: "/"
    }
  },
  computed: {
    ...mapState("login", ["user"])
  },
  mounted(){
     if(sessionStorage.getItem("key")){
      this.active = sessionStorage.getItem("key")
     }
  },
  methods: {
    ...mapMutations("login", ["setUser"]),
    logoutHandle() {
      this.setUser({})
      localStorage.removeItem("amdd");
      this.$router.push("/login")
    },
    handleSelect(key,keyPath){
         sessionStorage.setItem("key",key)
    }
  }
};

</script>

<style scoped lang="less">
.user {
  float: right !important;
  ;
  margin-right: 20px !important;
  line-height: 60px !important;

  .user-name {
    color: #fff;
    margin-right: 10px;
    font-size: 15px;
    border: 1px solid #fff;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    display: inline-block;
    line-height: 40px;
    overflow: hidden;
  }
}
</style>