import { http } from '@/utils'

// 登录接口
export const login = (data) => {
  return http({
    url: 'login',
    method: 'POST',
    data: {
      username: data.username,
      password: data.password
    }
  })
}

// 用户数据列表
export const getUserList = (data) => {
  return http({
    url: 'users',
    method: 'GET',
    params: data
  })
}

// 添加用户
export const getAddUser = (data) => {
  return http({
    url: 'users',
    method: 'POST',
    data: data
  })
}

// 删除用户
export const delUserId = (id) => {
  return http({
    url: `users/${id}`,
    method: 'delete',
    id
  })
}

// 编辑用户
export const getEditUser = (data) => {
  return http({
    url: `users/${data.id}`,
    method: 'PUT',
    data: {
      email: data.email,
      mobile: data.mobile
    }
  })
}

// 根据id查询用户信息
export const getEditFrom = (id) => {
  return http({
    url: `users/${id}`,
    method: 'GET',
    params: id
  })
}
