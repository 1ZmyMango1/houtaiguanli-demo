<template>
  <div class="container">
    <div class="title-logo">
      <img src="../../assets/heima.b5a855ee.png" alt="" />
      <div class="title-text">杭州黑马后台管理系统</div>
      <el-button class="title-btn" @click="exitBtn">退出</el-button>
    </div>

    <el-menu
      default-active="/user"
      class="el-menu-vertical-demo"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      router
      style="width: 14%; float: left; border: none"
    >
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>用户管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/user">用户列表</el-menu-item>
        </el-menu-item-group>
      </el-submenu>

      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>权限管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/management">角色列表</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group>
          <el-menu-item index="/power">权限列表</el-menu-item>
        </el-menu-item-group>
      </el-submenu>

      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>商品管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/goods">商品列表</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group>
          <el-menu-item index="/params">分类参数</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group>
          <el-menu-item index="/categories">商品分类</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>

    <div
      style="
        width: 86%;
        float: right;
        height: calc(100vh - 80px);
        overflow: auto;
      "
    >
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import { removeToken } from '@/utils/auth'
export default {
  methods: {
    exitBtn() {
      removeToken()
      this.$router.push({
        path: '/login'
      })
    }
  }
}
</script>

<style lang="less" scoped>
.container {
  width: 100vw;
  height: 100vh;
}

.title-logo {
  width: 100%;
  height: 70px;
  background-color: #373d41;
  display: flex;
  img {
    width: 50px;
    height: 50px;
    line-height: 70px;
    margin-top: 10px;
  }
  .title-text {
    color: #fff;
    font-size: 22px;
    margin-left: 10px;
    line-height: 70px;
  }
  .title-btn {
    position: absolute;
    bottom: 92%;
    right: 1%;
  }
}

.el-menu-vertical-demo {
  height: calc(100vh - 70px);
}
</style>
