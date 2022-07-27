<template>
  <div class="user">
    <el-breadcrumb separator-class="el-icon-arrow-right" class="title-user">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>用户管理</el-breadcrumb-item>
      <el-breadcrumb-item>用户列表</el-breadcrumb-item>
    </el-breadcrumb>

    <div style="margin: 0 16px">
      <div class="user-content">
        <div style="margin-top: 15px">
          <el-input
            v-model="input"
            placeholder="请输入内容"
            class="input-search"
          >
            <el-button slot="append" icon="el-icon-search"></el-button
          ></el-input>
        </div>

        <el-button type="primary" class="btn-user" @click="add('add')"
          >添加用户</el-button
        >
      </div>
      <el-table
        border
        :data="tableData"
        style="margin-top: 20px"
        class="table-user"
      >
        <el-table-column label="#" width="180" prop="id"> </el-table-column>
        <el-table-column label="姓名" prop="username"> </el-table-column>
        <el-table-column label="电话" prop="mobile"> </el-table-column>
        <el-table-column label="角色" prop="role_name"> </el-table-column>
        <el-table-column label="状态">
          <template slot-scope="scope">
            <el-switch
              v-model="scope.row.mg_state"
              active-color="#13ce66"
              inactive-color="#ff4949"
            >
            </el-switch>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="180">
          <template slot-scope="scope">
            <el-button
              size="mini"
              type="primary"
              icon="el-icon-edit"
              @click="add('edit', scope.row)"
            ></el-button>
            <el-button
              type="danger"
              size="mini"
              icon="el-icon-delete"
              @click="handleDelete(scope.row)"
            ></el-button>
            <el-button
              type="warning"
              size="mini"
              icon="el-icon-setting"
              @click="Delete(scope.row)"
            ></el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :page-sizes="[5, 10, 20]"
        :page-size="pagesize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
      >
      </el-pagination>
    </div>

    <Detail
      ref="detail"
      :info="info"
      @getUserList="getUserList"
      :editUser="editUser"
    ></Detail>

    <RoleUser ref="role"></RoleUser>
  </div>
</template>

<script>
import { getUserList, delUserId } from '../../api/user'
import Detail from './detail.vue'
import RoleUser from './role.vue'
export default {
  components: {
    Detail,
    RoleUser
  },
  data() {
    return {
      pagenum: 1,
      pagesize: 10,
      total: 0,
      info: {
        type: '',
        data: null
      },
      input: '',
      tableData: [],
      // 根据id查询用户信息
      editUser: {}
    }
  },
  created() {
    this.getUserList()
  },
  computed: {},
  methods: {
    handleSizeChange(val) {
      this.pagesize = val
      this.getUserList()
    },
    handleCurrentChange(val) {
      this.pagenum = val
      this.getUserList()
    },
    // 新增 编辑
    add(type, data) {
      this.info = {
        type: '',
        data: null
      }
      this.info.type = type
      if (data) {
        this.info.data = data
      }
      console.log(data, type)
      // this.editUser = await getEditFrom(data.id)
      // console.log(this.editUser)
      this.$refs.detail.dialogVisible = true
    },
    // 删除
    async handleDelete(data) {
      // 提醒弹框
      // console.log(data)
      try {
        await this.$confirm('确定要删除吗？')
        // 调用接口删除
        await delUserId(data.id)
        // 提醒
        this.$message.success('删除成功')
        // 重新渲染
        this.getUserList()

        // console.log(id)
      } catch (e) {
        console.log(e)
      }
    },
    // 分配角色
    Delete() {
      this.$refs.role.dialogVisible = true
    },

    // 获取用户列表
    async getUserList() {
      const data = {
        query: '',
        pagenum: this.pagenum,
        pagesize: this.pagesize
      }
      const res = await getUserList(data)
      // console.log(res)
      this.total = res.data.total
      this.tableData = res.data.users
      // console.log(this.tableData)
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
