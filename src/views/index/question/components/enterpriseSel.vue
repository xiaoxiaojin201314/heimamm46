<template>
  <el-select v-model="selfEnterprise" placeholder="请选择企业">
    <el-option label="所有企业" value></el-option>
    <el-option
      v-for="(item, index) in enterpriseList"
      :key="index"
      :label="item.name"
      :value="item.id"
    ></el-option>
  </el-select>
</template>

<script>
//导入企业接口
import { enterpriseList } from "@/api/enterprise.js";
export default {
  props: ["value"],
  data() {
    return {
      //企业数据
      enterpriseList: [],
      //内部选择的企业
      selfEnterprise: this.value
    };
  },
  created() {
    window.console.log(this.value);
    //获取学科数据
    enterpriseList().then(res => {
      this.enterpriseList = res.data.items;
    });
  },
  //监听数据改变
  watch: {
    selfEnterprise() {
      this.$emit("input", this.selfEnterprise);
    }
  }
};
</script>
<style>
</style>