import { getToken, setToken, removeToken } from '@/utils/auth'
import { login } from '@/api/user'

// 状态
// 初始化的时候从缓存中读取状态 并赋值到初始化的状态上
const state = {
  token: getToken() // 设置token状态
}
// 修改状态
const mutations = {
  // 设置token
  setToken(state, token) {
    // 存到vuex里面一份，
    state.token = token // vuex里面
    // vuex变化 => 缓存数据
    setToken(token) // 本地缓存
  },
  //   删除缓存
  removeToken(state) {
    state.token = null // 删除vuex的token
    removeToken() // 先清除token 在清除缓存 vuex和缓存同步
  }
}
// 执行异步
const actions = {
  // 定义login action  也需要参数 调用action时 传递过来的参数
  async login(context, data) {
    const result = await login(data) // 实际上就是promise    result就是执行的结果
    // console.log(result, 'result')
    if (result.meta.status === 200) {
      // 表示登录接口调用成功 也就是意味着你的用户名和密码是正确的
      // 现在有用户token
      // actions 修改state 必须通过mutations
      context.commit('setToken', result.data.token)
    }
  }
}
export default {
  namespaced: true,
  state,
  mutations,
  actions
}
