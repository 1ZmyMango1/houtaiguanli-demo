<template>
  <div>
    <el-dialog title="分配角色" :visible.sync="dialogVisible" width="30%">
      <span>分配角色</span>
      <span>当前的用户：admin</span><br />
      <span>当前的角色：超级管理员</span><br />
      <span
        >分配新角色：
        <el-select v-model="value" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.roleName"
            :value="item.id"
          >
          </el-option>
        </el-select>
      </span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="roleRevise">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { getRoleList } from '../../api/role'
export default {
  name: 'roleUser',
  data() {
    return {
      input: '',
      dialogVisible: false,
      options: [],
      value: ''
    }
  },
  created() {
    this.getRoleList()
  },
  methods: {
    // 分配角色
    async getRoleList() {
      const res = await getRoleList()
      // console.log(res)
      this.options = res.data
    },
    // 点击确认
    roleRevise() {
      this.$message.error('分配失败')
    }
  }
}
</script>

<style scoped>
.input-role {
  width: 200px;
}
</style>
