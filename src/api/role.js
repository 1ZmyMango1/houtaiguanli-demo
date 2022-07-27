import { http } from '@/utils'

// 获取角色列表
export const getRoleList = () => {
  return http({
    url: 'roles',
    method: 'GET'
  })
}

// // 分配角色
// export const getDepartments = (roleId) => {
//   return http({
//     url: `roles/${roleId}/rights`,
//     method: 'POST'
//   })
// }

// 获取所有权限 树形所有数据
export const getAllPermissions = (type) => {
  return http({
    url: `rights/${type}`,
    method: 'GET'
  })
}
