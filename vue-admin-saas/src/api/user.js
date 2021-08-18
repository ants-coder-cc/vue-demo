import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/memberapi/user/userLogin',
    method: 'get',
    params: data
  })
}

export function logout() {
  return request({
    url: '/vue-admin-template/user/logout',
    method: 'post'
  })
}
