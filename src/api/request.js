import axios from "axios";

const requests = axios.create({

    //基础路径
    baseURL: "/api",
    timeout: 5000
});

// 请求拦截器
requests.interceptors.request.use((config) => {
    return config;
})

// 相应拦截器
requests.interceptors.response.use((request) => {
    return request.data
}), (error) => {
    return Promise.reject(new Error('faile'))
}
// 对外暴露
export default axios