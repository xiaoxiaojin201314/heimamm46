//导入axios
import axios from 'axios';
//导入token工具函数
import { getToken } from '../utils/token.js';

const subjectRequest = axios.create({
    //基地址
    baseURL:process.env.VUE_APP_URL,
    //是否跨域
    withCredentials:true
});

//添加一个请求拦截器,注册给创建的那个请求对象
subjectRequest.interceptors.request.use(
    function(config) {
        //在发送之前设置token
        config.headers.token = getToken();
        return config;
    },
    function(error) {
        //如果请求出错了,干一些事情
        return Promise.reject(error);
    }
);

//注册一个响应的拦截器
subjectRequest.interceptors.response.use(
    function(response) {
        //拿掉.data
        return response.data;
    },
    function(error) {
        //可以在这里对错误进行一些处理
        return Promise.reject(error);
    }
);

//学科删除
export function subjectEdit(data) {
    return subjectRequest({
        url:'/subject/edit',
        method:'post',
        data
    });
}

//学科状态设置
export function subjectStatus(data) {
    return subjectRequest({
        url:'/subject/status',
        method:'post',
        data
    });
}

//学科列表
//记住参数不同
export function subjectList(params) {
    return subjectRequest({
        url:'/subject/list',
        method:'get',
        params
    });
}

//学科添加
export function subjectAdd(data) {
    return subjectRequest({
        url:'/subject/add',
        method:'post',
        data
    });
}