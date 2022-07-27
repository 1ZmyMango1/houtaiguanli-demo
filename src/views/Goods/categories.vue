<template>
  <div class="user">
    <el-breadcrumb separator-class="el-icon-arrow-right" class="title-user">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>用户管理</el-breadcrumb-item>
      <el-breadcrumb-item>角色列表</el-breadcrumb-item>
    </el-breadcrumb>

    <div style="margin: 0 16px">
      <div class="user-content">
        <el-button type="primary" class="btn-user" @click="add('add')"
          >添加角色</el-button
        >
      </div>
      <el-table
        border
        :data="tableData"
        style="margin-top: 20px"
        class="table-user"
      >
        <el-table-column label="#" width="180" type="index"> </el-table-column>
        <el-table-column label="#" width="180" type="index"> </el-table-column>
        <el-table-column label="角色姓名" prop="roleName"> </el-table-column>
        <el-table-column label="角色描述" prop="roleDesc"> </el-table-column>

        <el-table-column label="操作" width="330">
          <template slot-scope="scope">
            <el-button
              size="mini"
              type="primary"
              icon="el-icon-edit"
              @click="add('edit', scope.row)"
              >编辑</el-button
            >
            <el-button
              type="danger"
              size="mini"
              icon="el-icon-delete"
              @click="handleDelete(scope.row)"
              >删除</el-button
            >
            <el-button
              type="warning"
              size="mini"
              icon="el-icon-setting"
              @click="Delete(scope.row)"
              >分配权限</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </div>

    <DistriBution ref="detail" :info="info"></DistriBution>
  </div>
</template>

<script>
export default {}
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

.user-content {
  // padding-left: 1%;
  display: flex;
}

.input-search {
}

.search-user {
  background-color: #f5f7fa;
}

.btn-user {
  height: 40px;
  margin-top: 15px;
  margin-left: 10px;
}

// .table-user {
//   margin-left: 18px;
//   width: 500px;
// }
</style>
