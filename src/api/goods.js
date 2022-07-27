import { http } from '@/utils'

// 商品列表
export const getGoodsList = (data) => {
  return http({
    url: 'goods',
    method: 'GET',
    params: data
  })
}
