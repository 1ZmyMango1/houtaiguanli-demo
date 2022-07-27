<template>
  <div>
    <el-dialog title="添加用户对话框" :visible.sync="dialogVisible" width="50%">
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
      >
        <el-form-item label="用户名" prop="username">
          <el-input
            v-model="ruleForm.username"
            style="width: 80%"
            :disabled="!isShow"
          ></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password" v-if="isShow">
          <el-input v-model="ruleForm.password" style="width: 80%"></el-input>
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
          <el-input v-model="ruleForm.email" style="width: 80%"></el-input>
        </el-form-item>
        <el-form-item label="手机号" prop="mobile">
          <el-input v-model="ruleForm.mobile" style="width: 80%"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="submitForm('ruleForm')"
          >确 定</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { getAddUser, getEditUser } from '../../api/user'
export default {
  props: {
    info: Object,
    editUser: {
      type: Object
    }
  },
  data() {
    return {
      dialogVisible: false,
      ruleForm: {
        username: '888888',
        password: '123456',
        email: '2655111111@qq.com',
        mobile: '18888888888'
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          {
            pattern: /^[a-zA-Z0-9_-]{3,16}$/,
            message: '长度在 3 到 16 个字符(字母，下划线，数字，减号)',
            trigger: 'blur'
          }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, max: 12, message: '长度在 6 到 12 个字符', trigger: 'blur' }
        ],
        email: [
          { required: true, message: '请输入邮箱', trigger: 'blur' },
          {
            pattern: /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/,
            message: '邮箱格式不正确',
            trigger: 'blur'
          }
        ],
        mobile: [
          { required: true, message: '请输入手机号', trigger: 'blur' },
          {
            pattern:
              /^1(3[0-9]|4[01456879]|5[0-35-9]|6[2567]|7[0-8]|8[0-9]|9[0-35-9])\d{8}$/,
            message: '手机号输入不正确',
            trigger: 'blur'
          },
          {
            max: 11,
            message: '手机号输入不正确',
            trigger: 'blur'
          }
        ]
      }
    }
  },
  watch: {
    info(val) {
      if (val.data) {
        this.ruleForm = val.data
      }
    }
  },
  computed: {
    // itemInfo() {
    //   return this.info
    // }
    isShow() {
      return this.info.type === 'add'
    }
  },
  created() {},
  methods: {
    // 确认
    submitForm(formName) {
      this.$refs[formName].validate(async (valid) => {
        if (valid) {
          if (this.info.type === 'add') {
            await getAddUser(this.ruleForm)
            this.dialogVisible = false
            this.$emit('getUserList')
          } else {
            // console.log(this.ruleForm, 'ruleForm') // 看好控制太的打印
            /**
             * 既然修改数据，你修改的数据传给后台了吗？
             * id是后台为了确认你要修改那条数据。后台根据id来修改数据库的内
             * 你给id传给后台了，但是你修改的内容传过去了没 既然id告诉后台了，那也是修改的接口，他怎么不修改
             * 自己写 好看多了，你自己写吧
             *  */
            await getEditUser(this.ruleForm)
            this.dialogVisible = false
            this.$emit('getUserList')
            // 重置尽量不要这样写，这样写效果也行。但是会有bug
            // 这样写好一点
            this.ruleForm = {
              username: '',
              password: '',
              email: '',
              mobile: ''
            }
          }
        }
      })
    }
  }
}
</script>

<style></style>
