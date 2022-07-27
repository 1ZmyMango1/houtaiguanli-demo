// import Cookies from 'js-cookie'

const TokenKey = 'houtaiguanli-token' // 设定一个独一无二的key

// 获取token
export function getToken() {
  return localStorage.getItem(TokenKey)
}

// 设置token
export function setToken(token) {
  return localStorage.setItem(TokenKey, token)
}

// 删除token
export function removeToken() {
  return localStorage.removeItem(TokenKey)
}
