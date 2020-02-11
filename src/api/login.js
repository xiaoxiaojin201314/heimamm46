//导入axios
import axios from 'axios';

const loginRequest = axios.create({
    //基地址
    baseURL:process.env.VUE_APP_URL,
    //是否跨域
    withCredentials:true
})

// 登录页面的接口
export function login(data) {
    return loginRequest({
        url:'/login',
        method:'post',
        data
    })
}