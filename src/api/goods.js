import { http } from '@/utils'

// ๅๅๅ่กจ
export const getGoodsList = (data) => {
  return http({
    url: 'goods',
    method: 'GET',
    params: data
  })
}
