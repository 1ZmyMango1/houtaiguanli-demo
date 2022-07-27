<template>
  <div class="user">
    <el-breadcrumb separator-class="el-icon-arrow-right" class="title-user">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>用户管理</el-breadcrumb-item>
      <el-breadcrumb-item>权限列表</el-breadcrumb-item>
    </el-breadcrumb>

    <div style="margin: 0 16px">
      <el-table
        border
        :data="tableData"
        style="margin-top: 20px"
        class="table-user"
      >
        <el-table-column label="#" width="180" type="index"> </el-table-column>
        <el-table-column label="权限名称" prop="authName"> </el-table-column>
        <el-table-column label="路径" prop="path"> </el-table-column>

        <el-table-column label="权限等级" width="330" prop="level">
          <template slot-scope="scope">
            <el-tag v-if="scope.row.level === '0'">等级一</el-tag>
            <el-tag type="success" v-else-if="scope.row.level === '1'"
              >等级二</el-tag
            >
            <el-tag type="warning" v-else>等级三</el-tag>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import { getAllPermissions } from '../../../api/role'
export default {
  data() {
    return {
      tableData: []
    }
  },
  created() {
    this.getAllPermissions()
  },

  methods: {
    async getAllPermissions() {
      const res = await getAllPermissions('list')
      console.log(res)
      this.tableData = res.data
      console.log(this.tableData)
    }
  }
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
