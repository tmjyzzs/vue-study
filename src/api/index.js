import requests from './request'

export const testReqtest = () => {
    // 测试发送请求
    return requests({ url: '/api/test', method: 'get' })
}