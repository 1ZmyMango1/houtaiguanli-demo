<template>
  <div id="app">
    <!-- 卡片组件 -->
    <el-card class="login-card">
      <!-- 登录表单 -->
      <el-form
        style="margin-top: 50px"
        ref="loginFromRef"
        :model="loginFrom"
        :rules="loginRules"
      >
        <div class="login-color">
          <img src="../../assets/logo.png" alt="" class="imgLogo" />
        </div>

        <el-form-item prop="username">
          <el-input placeholder="请输入手机号" v-model="loginFrom.username">
            <i slot="prefix" class="el-input__icon el-icon-user-solid"></i>
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            placeholder="请输入密码"
            v-model="loginFrom.password"
            type="password"
          >
            <i slot="prefix" class="el-input__icon el-icon-s-goods"></i>
          </el-input>
        </el-form-item>
        <el-form-item class="login-btn">
          <el-button type="primary" @click="submit">登录</el-button>
          <el-button type="info" @click="resetLoginFrom">重置</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'App',
  components: {},
  data() {
    return {
      loginFrom: {
        // 参数名字根据接口文档上来，接口报错看接口非你返回的内容（有利于找错） 这个用户名和密码不对，你写个对的
        username: 'admin',
        password: '123456'
      },
      loginRules: {
        username: [
          {
            required: true,
            trigger: 'blur',
            message: '手机号不能为空'
          }
        ],
        password: [
          {
            required: true,
            trigger: 'blur',
            message: '密码不能为空'
          },
          {
            min: 6,
            max: 12,
            message: '密码填写不正确'
          }
        ]
      }
    }
  },
  watch: {
    $route: {
      handler: function (route) {
        this.redirect = route.query && route.query.redirect
      },
      immediate: true
    }
  },
  methods: {
    ...mapActions('user', ['login']),
    // 登录
    async submit() {
      try {
        // 表单验证  如果表单验证未通过 直接catch 捕捉
        // 表单验证 返回的是 promise
        await this.$refs.loginFromRef.validate()
        // 从 vuex actions 请求登录口 loginFrom 单词写错了，下次注意点
        await this.login(this.loginFrom)
        this.$router.push({ path: '/welcome' })
      } catch (e) {
        console.log(e)
      }
      // this.$refs.loginFromRef.validate(async (valid) => {
      //   if (!valid) return
      //   const { data: res } = await this.$http.post('login', this.loginFrom)
      //   console.log(res)
      //   localStorage.setItem('token', res.data.token)
      //   if (res.meta.status !== 200) {
      //     return Message.error('登录失败')
      //   } else {
      //     Message.success('登录成功')
      //   }
      //   window.sessionStorage.setItem('token', res.data.token)
      //   this.$router.push({
      //     path: '/welcome'
      //   })
      // })
    },
    // 重置按钮
    resetLoginFrom() {
      //   console.log(this)
      this.$refs.loginFromRef.resetFields()
    }
  }
}
</script>

<style>
#app {
  width: 100%;
  height: 100vh;
  background-color: #2b4b6b;
  display: flex;
  justify-content: center;
  align-items: center;
  background-position: center;
}
.login-card {
  width: 440px;
  height: 300px;
}

.login-btn {
  position: absolute;
  right: 37%;
  bottom: 34%;
}

.login-color {
  background-color: #fff;
  border: 1px solid #41b883;
  height: 80px;
  width: 80px;
  position: absolute;
  right: 48%;
  bottom: 65%;
  border-radius: 50%;
  box-shadow: 0 0 10px green;
}

.imgLogo {
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 14%;
  bottom: 10%;
}
</style>
