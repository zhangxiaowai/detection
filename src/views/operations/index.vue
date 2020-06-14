<template>
  <div>
    <div class="box">
      <h3>操作日志 </h3>
      <span class="right"> 首页 > 设备信息</span>
    </div>

    
    <el-card class="box-card">
     
        <!-- 修改 -->
      
      <el-table
        ref="multipleTable"
        :data="tableData"
        tooltip-effect="dark"
        style="width: 100%"
        @selection-change="handleSelectionChange"
      >
        <el-table-column type="selection" width="55"></el-table-column>
        <el-table-column prop="userName" label="姓名" min-width="110"></el-table-column>
        <el-table-column prop="modules" label="模块" min-width="110"></el-table-column>
        <el-table-column prop="handle" label="操作" min-width="110"></el-table-column>
        <el-table-column label="操作时间" min-width="110">
          <template slot-scope="scope">{{ scope.row.handleTime }}</template>
        </el-table-column>
      <el-table-column prop="datails" label="详情" min-width="110"></el-table-column>
       
      </el-table>
      <!-- 分页效果 -->
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="searchForm.page"
        :page-sizes="  [10, 20, 30, 40]  "
        :page-size="searchForm.per_page"
        layout="total, sizes, prev, pager, next, jumper"
        :total="tot"
      ></el-pagination>
      <!-- <el-pagination
        @size-change="handleSizeChange" // 事件，每页条数变化的回调处理
        @current-change="handleCurrentChange" // 事件，当前页码变化的回调处理
        :current-page="currentPage4" // 属性绑定，默认当前页码，默认第1页
        :page-sizes="  [100, 200, 300, 400]  " // 属性绑定，下拉列表，设定每页显示条数
        :page-size="100"  // 属性绑定，设置默认每页显示条数的
        layout="total, sizes, prev, pager, next, jumper" // 分页布局元素构成
        :total="400" // 属性绑定，设置记录总条数
      ></el-pagination>-->
    </el-card>
  </div>
</template>

<script>
export default {
  // 每个组件都要设置一个唯一属性值的name属性，好处：在devtools里边方便寻找当前的组件

  data() {
    return {
      dialogFormVisible: false,
      edit1: false,
      edit2: false,
      selection: true,
      san: false,
      multipleSelection: [],

      form: {
        jx: "",
        gl: "",
        name: ""
      },
      formLabelWidth: "120px",
      tableData: [],
      // 文章列表
      tot: 0, // 文章总条数

      searchForm: {
        page:1, // 当前数据记录页码
        per_page:10, // 分页数据记录条数(10~50)
        begin_pubdate: "", // 开始时间
        end_pubdate: "", // 结束时间
        channel_id: "", // 频道id
        status: "" // 文章状态，''-全部, 0-草稿，1-待审核，2-审核通过，3-审核失败
      }
    };
  },
  created() {
    
    
    // 获得文章
    this.getArticleList();
  },
  methods: {
    //分页
    handleSizeChange(val) {
      // val: 变化后的每页条数
      console.log(val);
      // 更新每页条数
      this.searchForm.per_page = val;
      // 根据变化后的每页条数重新获得文章列表
      this.getArticleList();
    },
    // 页码变化的回调处理
    handleCurrentChange(val) {
      // val: 变化后的页码
      // console.log(val)
      // 更新页码
      this.searchForm.page = val;
      // 根据变化后页码重新获得文章列表
      this.getArticleList();
    },
    getArticleList() {
      let pro = this.$http({
        url: "/web/log/list",
        method: "POST",
        data: {
          limit: this.searchForm.per_page, //yonghumingba
          offset: this.searchForm.page,
          userId: 41
        }
      });
      pro.then(result => {
        console.log(result);

        this.tableData = result.data.data.rows;
        this.tot = result.data.data.total;
      });
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    addModel() {
      this.dialogFormVisible = true;
      console.log(this.edit1, this.edit2, this.dialogFormVisible);
    },
    editModel() {
      let key = false;
      this.multipleSelection.length === 0 ? (key = true) : (key = false);
      this.multipleSelection.length > 0 ? (key = true) : (key = false);
      this.edit1 = !key;
      this.edit2 = key;
    },
    //删除
    del() {
      if (this.multipleSelection.length === 1) {
        this.san = true;
      }
    }
  }
};
</script>

<style lang="less" scoped>
/*给卡片区设置统一样式*/
.box {
  position: relative;
  .right{
    position: absolute;
    right: 0;
    top: 0;
  }
}
.right {
    float: right;
  }
  .box-card {
    margin-bottom: 15px;
    .el-input__inner {
      width: 40px;
      height: 40px;
    }
  }
  /*分页组件样式*/
  .el-pagination {
    margin-top: 15px;
  }
</style>
