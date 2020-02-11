<template>
  <!-- 整体容器 -->
  <div class="login-container">
    <!-- 左侧盒子 -->
    <div class="left-box">
      <!-- 顶部的标题 -->
      <div class="title-box">
        <img src="../../assets/login-logo.png" alt />
        <span class="title">黑马面面</span>
        <span class="line"></span>
        <span class="sub-title">用户登录</span>
      </div>

      <!-- 表单 -->
      <el-form ref="loginForm" :rules="rules" :model="loginForm" label-width="43px">
        <!-- 手机号 -->
        <el-form-item prop="phone">
          <el-input prefix-icon="el-icon-user" placeholder="请输入手机号" v-model="loginForm.phone"></el-input>
        </el-form-item>
        <!-- 密码 -->
        <el-form-item prop="password">
          <el-input
            prefix-icon="el-icon-lock"
            show-password
            placeholder="请输入密码"
            v-model="loginForm.password"
          ></el-input>
        </el-form-item>
        <!-- 验证码 -->
        <el-form-item prop="loginCode">
          <el-row>
            <el-col :span="16">
              <el-input
                prefix-icon="el-icon-key"
                placeholder="请输入验证码"
                v-model="loginForm.loginCode"
              ></el-input>
            </el-col>
            <el-col :span="7" class="code-col" :offset="1">
              <!-- 登录验证码 -->
              <img @click="changeCode" class="loginCode" :src="codeURL" alt />
            </el-col>
          </el-row>
        </el-form-item>
        <!-- 用户协议 -->
        <el-form-item>
          <el-checkbox v-model="loginForm.isChecked">
            我已阅读并同意
            <el-link type="primary">用户协议</el-link>和
            <el-link type="primary">隐私条款</el-link>
          </el-checkbox>
        </el-form-item>
        <!-- 底部按钮 -->
        <el-form-item>
          <el-button type="primary" class="my-btn" @click="submitForm('loginForm')">登录</el-button>
          <el-button type="primary" @click="showRegister" class="my-btn">注册</el-button>
        </el-form-item>
      </el-form>
    </div>
    <!-- 右边图片 -->
    <img src="../../assets/login_banner_ele.png" alt class="logo" />
    <registerDialog ref="registerDialog"></registerDialog>
  </div>
</template>

<script>
// 导入 注册对话框
import registerDialog from './components/registerDialog.vue';
// 定义校验函数 - 手机
import { checkPhone }  from '@/utils/validator.js'

export default {
  // 组件的名字
  name: "login",
  // 注册组件
  components:{
    registerDialog //省略了属性值
  },
  data() {
    return {
      loginForm: {
        //手机
        phone: "",
        //密码
        passwprd: "",
        //验证码
        loginCode: "",
        //是否勾选
        isChecked: false,
       
      },
      rules: {
        password: [
          { required: true, message: "密码不能为空", trigger: "blur" },
          { min: 6, max: 12, message:'密码的长度为6-12位', trigger: "blur" }
        ],
        loginCode: [
          { required: true, message: "验证码不能为空", trigger: "blur" },
          { min: 4, max: 4, message: "验证码的长度为4位", trigger: "blur" }
        ],
          phone: [
          { required: true, message: '手机号不能为空', trigger: 'blur' },
          { validator: checkPhone, trigger: 'change' }
        ],
      },
       //验证码地址
        codeURL:process.env.VUE_APP_URL+'/captcha?type=login'
    };
  },
  methods: {
    //刷新图片验证码
    changeCode(){
      this.codeURL=process.env.VUE_APP_URL+'/captcha?type=login&t='+Date.now()
    },
    // 提交表单
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$message.success("验证成功!");
        } else {
          this.$message.error("验证失败!");
          return false;
        }
      });
    },
  // 显示注册对话框
    showRegister(){
      //this.$refs可以获取所有设置了ref属性的元素,包括组件
      //registerDialog和上面设置的属性要一致
      this.$refs.registerDialog.dialogFormVisible = true;
    }
  }
};
</script>

<style lang="less">
.login-container {
  height: 100%;
  background: linear-gradient(
    225deg,
    rgba(20, 147, 250, 1),
    rgba(1, 198, 250, 1)
  );
  /* 开启弹性布局 */
  display: flex;
  /* 上下居中 */
  align-items: center;
  /* 左右均分 */
  justify-content: space-around;

  // 左侧盒子
  .left-box {
    width: 478px;
    height: 550px;
    background: rgba(245, 245, 245, 1);
    // 设置样式 把表单间隙空出来
    padding-right: 41px;
    box-sizing: border-box;

    .title-box {
      display: flex;
      align-items: center;
      margin-top: 44px;
      margin-left: 48px;
      margin-bottom: 27px;
      .logo {
        width: 22px;
        height: 17px;
      }
      .title {
        font-size: 24px;
        margin-left: 16px;
        margin-right: 14px;
      }
      .line {
        width: 1px;
        height: 28px;
        background-color: #c7c7c7;
      }
      .sub-title {
        font-size: 21px;
        margin-left: 12px;
      }
    }
    //登录验证码
    .login-code{
      width: 100%;
      height: 40.8PX;
    }

    // 验证码图片
    .loginCode {
      width: 100%;
      height: 40.8px;
    }

    // 按钮
    .my-btn {
      width: 100%;
      margin-bottom: 26px;
      margin-left: 0px;
    }

    //验证码的提示高度
    .code-col {
      height: 40.8px;
    }
  }
  // 协议区域
  .el-checkbox {
    display: flex;
    align-items: center;
    .el-checkbox__label {
      display: flex;
    }
  }
}
</style>