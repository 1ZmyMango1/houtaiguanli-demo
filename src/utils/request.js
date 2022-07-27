import axios from 'axios'
import { getToken } from './auth'
import router from '@/router'
import { Message } from 'element-ui'
const http = axios.create({
  baseURL: 'http://liufusong.top:8899/api/private/v1/',
  timeout: '500000'
})

http.interceptors.request.use(
  (config) => {
    config.headers.Authorization = getToken()
    return config
  },
  (err) => {
    return Promise.reject(err)
  }
)

http.interceptors.response.use(
  (config) => {
    // console.log(config, 'config')
    if (config.data.meta.status === 400) {
      router.push('/login')
      Message({
        message: 'token失效',
        center: true
      })
    }
    return config.data
  },
  (err) => {
    console.log(err, 'eee')
    return Promise.reject(err)
  }
)

export { http }
