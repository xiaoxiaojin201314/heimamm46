//导入vue
import Vue from 'vue';
//导入vuex
import Vuex from 'vuex';
//注册
Vue.use(Vuex);
//创建仓库对象
const store = new Vuex.Store({
    state:{
        //用户头像
        userIcon:'',
        //用户名
        username:'',
        //用户的角色
        role:''
    },
    mutations:{
        //修改头像
        changeIcon(state,newIcon){
            state.userIcon = newIcon;
        },
        //修改名字
        changeName(state,newName){
            state.username = newName
        },
        //修改角色
        changeRole(state,newRole){
            state.role=newRole
        }
    }
}) 
//暴露出去
export default store;