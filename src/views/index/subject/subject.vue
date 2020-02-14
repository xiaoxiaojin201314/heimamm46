<template>
  <div class="subject-container">
    <!-- 顶部的盒子 -->
    <el-card class="top-card">
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="学科编号">
          <el-input class="short" v-model="formInline.user" placeholder="审批人"></el-input>
        </el-form-item>
        <el-form-item label="学科名称">
          <el-input class="normal" v-model="formInline.user" placeholder="审批人"></el-input>
        </el-form-item>
        <el-form-item label="创建者">
          <el-input class="short" v-model="formInline.user" placeholder="审批人"></el-input>
        </el-form-item>
        <el-form-item label="状态">
          <el-select class="normal" v-model="formInline.region" placeholder="活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary">查询</el-button>
          <el-button>清除</el-button>
          <el-button icon="el-icon-plus" type="primary">新增学科</el-button>
        </el-form-item>
      </el-form>
    </el-card>
    <!-- 底部的盒子 -->
    <el-card class="bottom-card">
      <!--表格  -->
      <el-table :data="tableData" style="width: 100%">
        <el-table-column type="index" width="50" label="序号"></el-table-column>
        <el-table-column property="date" label="学科编号"></el-table-column>
        <el-table-column property="date" label="学科名称"></el-table-column>
        <el-table-column property="date" label="简称"></el-table-column>
        <el-table-column property="date" label="创建者"></el-table-column>
        <el-table-column property="name" label="创建日期"></el-table-column>
        <el-table-column property="address" label="状态"></el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button type="text" size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            <el-button type="text" size="mini" @click="handleNotAllow(scope.$index, scope.row)">禁用</el-button>
            <el-button type="text" size="mini" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "subject",
  data() {
    return {
      //顶部表单数据
      formInline: {
        user: "",
        region: ""
      },
      //底部表单数据
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ]
    };
  },
  methods: {
    //编辑
    handleEdit(index,row){
      window.console.log(index,row);
      row.name='小小金'
    },
    //删除
    handleDelete(index,row){
      window.console.log(index,row);
    },
    //禁用
    handleNotAllow(index,row){
      window.console.log(index,row);
    },
  },
};
</script>

<style lang='less'>
//最外层容器
.subject-container {
  //顶部的卡片
  .top-card {
    //短的输入框
    .short {
      width: 100px;
    }
    //长的输入框
    .normal {
      width: 150px;
    }
  }
}
</style>