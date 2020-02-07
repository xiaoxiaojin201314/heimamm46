// 导入Vue
import Vue from 'vue';
// 导入路由
//import router from 'vue-router';
import VueRouter from 'vue-router';
//导入login
import login from '../views/login/login.vue'

// 注册路由
Vue.use(VueRouter);

// 创建路由规则
// const routes = [{
//   path:'/login',
//   component:login
// }];

// 创建路由对象
const router = new VueRouter({
  routes:[{
    path:'/login',
    component:login
  }]
});

// 暴露出去
export default router;