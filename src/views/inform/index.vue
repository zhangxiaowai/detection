<template>
  <div>
    <div class="box">
      <h3>管理员信息</h3>
      <span class="right">首页>管理员信息</span>
    </div>

    <el-card class="box-card">
      <el-form :inline="true" :model="form">
        <el-form-item label="活动名称">
          <el-input v-model="form.name" style="width:100px"></el-input>
        </el-form-item>
        <el-form-item label="井号：">
          <el-input v-model="form.jh" style="width:100px"></el-input>
        </el-form-item>
        <el-form-item label="管理员">
          <el-input v-model="form.gl" style="width:100px"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary">查询</el-button>
        </el-form-item>
      </el-form>
    </el-card>
    <el-card class="box-card">
      <el-button-group>
        <!-- 修改 -->
        <el-button type="primary" icon="el-icon-edit" @click="editModel">修改</el-button>

        <el-dialog title :visible.sync="edit1">请选择要编辑的项目</el-dialog>

        <el-dialog title :visible.sync="edit2">
          <el-form :model="form">
            <el-form-item label="id：" :label-width="formLabelWidth">
              <el-input v-model="form.name" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="姓名：" :label-width="formLabelWidth">
              <el-input v-model="form.name" autocomplete="off"></el-input>
            </el-form-item>

            <el-form-item label="手机号：" :label-width="formLabelWidth">
              <el-input v-model="form.phone" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="权限管理员" :label-width="formLabelWidth">
              <el-select v-model="form.region" placeholder="请选择活动区域">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>

            <el-form-item label="密码：" :label-width="formLabelWidth">
              <el-input v-model="form.password" autocomplete="off"></el-input>
            </el-form-item>

            <el-form-item label="重复密码：" :label-width="formLabelWidth">
              <el-input v-model="form.password" autocomplete="off"></el-input>
            </el-form-item>

            <el-form-item label="创建时间：" :label-width="formLabelWidth">
              <el-input v-model="form.time" autocomplete="off"></el-input>
            </el-form-item>

            <el-form-item label="账号状态" :label-width="formLabelWidth">
              <el-select v-model="form.zh" placeholder="请选择活动区域">
                <el-option label="正常" value="shanghai"></el-option>
                <el-option label="异常" value="beijing"></el-option>
              </el-select>
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="xiu = false">取 消</el-button>
            <el-button type="primary" @click="xiu = false">确 定</el-button>
          </div>
        </el-dialog>
        <!-- 删除 -->
      </el-button-group>
      <el-table
        ref="multipleTable"
        :data="tableData"
        tooltip-effect="dark"
        style="width: 100%"
        @selection-change="handleSelectionChange"
      >
        <el-table-column type="selection" width="55"></el-table-column>
        <el-table-column prop="deviceNumber" label="设备编号" min-width="110"></el-table-column>
        <el-table-column prop="siloNumber" label="井号：" min-width="110"></el-table-column>
        <el-table-column prop="adminName" label="管理员" min-width="110"></el-table-column>

        <el-table-column prop="phone1" label="通知电话1" min-width="110"></el-table-column>
        <el-table-column prop="phone2" label="通知电话2" min-width="110"></el-table-column>
        <el-table-column prop="phone3" label="通知电话3" min-width="110"></el-table-column>
        <el-table-column prop="phone4" label="通知电话4" min-width="110"></el-table-column>

        <el-table-column prop="phone5" label="通知电话5" min-width="110"></el-table-column>

        <el-table-column prop="phone6" label="通知电话6" min-width="110"></el-table-column>
        <el-table-column prop="status" label="短信通知设置" min-width="110">
          <template slot-scope="tableData">
            <el-tag v-if="tableData.row.status===1">管理通知</el-tag>
            <el-tag v-else-if="tableData.row.status===2" type="success">全部通知</el-tag>
          </template>
        </el-table-column>
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
        page: 1, // 当前数据记录页码
        per_page: 10, // 分页数据记录条数(10~50)
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
        url: "/web/inform/list",
        method: "POST",
        data: {
          limit: this.searchForm.page, //yonghumingba
          offset: this.searchForm.per_page,
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
