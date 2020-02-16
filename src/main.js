import Vue from 'vue'
import App from './App.vue'
//导入路由
import router from './router/index'
//导入element-ui
import ElementUI from 'element-ui'
// 导入 Element-ui的样式
import 'element-ui/lib/theme-chalk/index.css'
//导入仓库
import store from './store/index.js'
//// 注册 Element-ui
Vue.use(ElementUI)
//导入全局样式
import './style/bass.css'


Vue.config.productionTip = false

//导入全局过滤器,不需要接收,只需要保证代码执行即可
import '@/filters/index.js'

new Vue({
  render: h => h(App),
  //挂载到vue实例上,路由
  router,
  //挂载到vue实例上,仓库
  store
}).$mount('#app')
