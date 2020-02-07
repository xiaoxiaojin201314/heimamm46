import Vue from 'vue'
import App from './App.vue'
//导入路由
import router from './router/index'
//导入element-ui
import ElementUI from 'element-ui'
// 导入 Element-ui的样式
import 'element-ui/lib/theme-chalk/index.css'
//// 注册 Element-ui
Vue.use(ElementUI)


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  //挂载到vue实例上
  router
}).$mount('#app')
