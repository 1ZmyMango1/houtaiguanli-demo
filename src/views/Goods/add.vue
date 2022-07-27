<template>
  <div class="user">
    <el-breadcrumb separator-class="el-icon-arrow-right" class="title-user">
      <el-breadcrumb-item :to="{ path: '/welcome' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>用户管理</el-breadcrumb-item>
      <el-breadcrumb-item>角色列表</el-breadcrumb-item>
    </el-breadcrumb>

    <div class="goodInformation">
      <div class="titleGoods">
        <div class="titleText">
          <i class="el-icon-coordinate"></i>添加商品信息
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AddGoods'
}
</script>

<style scoped lang="less">
.user {
  // width: 100vw;
}
.title-user {
  width: 100%;
  height: 40px;
  background-color: #eaedf1;
  line-height: 40px;
}

.goodInformation {
  display: flex;
  border: 1px solid red;
  width: 96%;
  margin: 10px auto;

  .titleGoods {
    display: flex;
    text-align: center;
    width: 96%;
    height: 50px;
    line-height: 50px;
    background-color: #eee;
    margin: 0 auto;
    border-radius: 8%;
    .titleText {
      width: 90%;
      text-align: center;
    }
  }
}
</style>
