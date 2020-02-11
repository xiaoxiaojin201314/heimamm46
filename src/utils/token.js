//操纵token的key一般用常量加大写(大部分都这么做)
const TOKENKEY = 'heimammToken';

//设置token
export function setToken(token) {
    window.localStorage.setItem(TOKENKEY,token);
}

//获取token
export function getToken() {
   return window.localStorage.getItem(TOKENKEY);
}

//移出token
export function removeToken() {
    window.localStorage.removeItem(TOKENKEY);
}