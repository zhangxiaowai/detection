<template>
  <div>
    <div class="box">
      <h3>设备信息</h3>
      <span class="right">首页>用户中心</span>
    </div>

    
    <el-card class="box-card">
      <el-button-group>
          <el-button type="primary" icon="el-icon-plus" @click="addModel">新增</el-button>
          <el-dialog title :visible.sync="dialogFormVisible">
            <el-form :model="form">
              <el-form-item label="设备号码：" :label-width="formLabelWidth">
                <el-input v-model="form.sb" autocomplete="off"></el-input>
              </el-form-item>

              <el-form-item label="部门：" :label-width="formLabelWidth">
                <el-input v-model="form.bm" autocomplete="off"></el-input>
              </el-form-item>
             

              <el-form-item label="部门分支：" :label-width="formLabelWidth">
                <el-input v-model="form.fz" autocomplete="off"></el-input>
              </el-form-item>

              <el-form-item label="井号" :label-width="formLabelWidth">
                <el-input v-model="form.jh" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="管理员" :label-width="formLabelWidth">
                <el-input v-model="form.name" autocomplete="off"></el-input>
              </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
              <el-button @click="dialogFormVisible = false">取 消</el-button>
              <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
            </div>
          </el-dialog>

          <!-- 修改 -->
          <el-button type="primary" icon="el-icon-edit" @click="editModel">修改</el-button>

          <el-dialog title :visible.sync="edit1">请选择要编辑的项目</el-dialog>

          <el-dialog title :visible.sync="edit2">
            <el-form :model="form">
              <el-form-item label="id：" :label-width="formLabelWidth">
                <el-input v-model="form.id" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="姓名" :label-width="formLabelWidth">
                <el-input v-model="form.name" autocomplete="off"></el-input>
              </el-form-item>

              <el-form-item label="手机号：" :label-width="formLabelWidth">
                <el-input v-model="form.telephone" autocomplete="off"></el-input>
              </el-form-item>
              
              <el-form-item label="权限：" :label-width="formLabelWidth">
                <el-input v-model="form.identity" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="密码：" :label-width="formLabelWidth">
                <el-input v-model="form.jh" autocomplete="off"></el-input>
              </el-form-item>
               <el-form-item label="重新密码：" :label-width="formLabelWidth">
                <el-input v-model="form.passwd" autocomplete="off"></el-input>
              </el-form-item>
              
              <el-form-item label="创建时间：" :label-width="formLabelWidth">
                <el-input v-model="form.ctime" autocomplete="off"></el-input>
              </el-form-item>
               <el-form-item label="账号状态：" :label-width="formLabelWidth">
                <el-input v-model="form.status" autocomplete="off"></el-input>
              </el-form-item>
               

            </el-form>
            <div slot="footer" class="dialog-footer">
              <el-button @click="edit2 = false">取 消</el-button>
              <el-button type="primary" @click="edit2 = false">确 定</el-button>
            </div>
          </el-dialog>
          <!-- 删除 -->
          <el-button type="primary" icon="el-icon-close" @click="del = true">删除</el-button>
          <el-dialog title :visible.sync="del">
            <el-form :model="form">你确定要删除吗</el-form>
            <div slot="footer" class="dialog-footer">
              <el-button @click="del = false">取 消</el-button>
              <el-button type="primary" @click="del = false">确 定</el-button>
            </div>
          </el-dialog>
        </el-button-group>
      <el-table
        ref="multipleTable"
        :data="tableData"
        tooltip-effect="dark"
        style="width: 100%"
        @selection-change="handleSelectionChange"
      >
        <el-table-column type="selection" width="55"></el-table-column>
        <el-table-column prop="name" label="姓名" min-width="110"></el-table-column>
        <el-table-column prop="telephone" label="手机号：" min-width="110"></el-table-column>
        <el-table-column prop="name" label="权限" min-width="110">
           <template slot-scope="tableData">
            <el-tag v-if="tableData.row.identity===0">南水普通管理员</el-tag>
            <el-tag v-else-if="tableData.identity===1" type="success">超级管理员</el-tag>
            <el-tag v-else-if="tableData.identity===2" type="success">超级管理员</el-tag>
            <el-tag v-else-if="tableData.identity===3" type="success">水务普通管理员</el-tag>
            <el-tag v-else-if="tableData.identity===4" type="success">水务超级管理员</el-tag>
            <el-tag v-else-if="tableData.identity===5" type="success">南水超级管理员</el-tag>
          </template>


        </el-table-column>

      
        <el-table-column prop="status" label="账号状态" min-width="110">
          <template slot-scope="tableData">
            <el-tag v-if="tableData.row.status===0">正常</el-tag>
            <el-tag v-else-if="tableData.row.status===1" type="success">不正常</el-tag>
          </template>
        </el-table-column>
        <el-table-column label="创建时间" min-width="110">
            <template slot-scope="scope">{{ scope.row.createTime }}</template>
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
      json: {"status":200,"msg":"OK","data":{"total":13,"rows":[{"id":49,"name":"亚索3","telephone":"13453970596","passwd":"e10adc3949ba59abbe56e057f20f883e","identity":3,"type":1,"status":0,"createTime":1592040673000,"updateTime":1592040673000},{"id":42,"name":"亚索","telephone":"13453970590","passwd":"e996d0786cb8c57a15ae0644a842599b","identity":0,"type":0,"status":0,"createTime":1591936265000,"updateTime":1591936265000},{"id":41,"name":"张林凯","telephone":"18735681247","passwd":"25d55ad283aa400af464c76d713c07ad","identity":0,"type":0,"status":0,"createTime":1591598170000,"updateTime":1591944253000},{"id":38,"name":"牛跃鹏","telephone":"13552080015","passwd":"25d55ad283aa400af464c76d713c07ad","identity":0,"type":0,"status":0,"createTime":1575533750000,"updateTime":1583727160000},{"id":22,"name":"维修班","telephone":"68556407","passwd":"25d55ad283aa400af464c76d713c07ad","identity":4,"type":2,"status":0,"createTime":1551692122000,"updateTime":1551692122000},{"id":21,"name":"常斌","telephone":"18611078870","passwd":"25d55ad283aa400af464c76d713c07ad","identity":4,"type":2,"status":0,"createTime":1551691119000,"updateTime":1551691119000},{"id":20,"name":"姜国艳","telephone":"13520972006","passwd":"25d55ad283aa400af464c76d713c07ad","identity":4,"type":2,"status":0,"createTime":1551691079000,"updateTime":1551691079000},{"id":17,"name":"李科长","telephone":"13466665953","passwd":"25d55ad283aa400af464c76d713c07ad","identity":2,"type":2,"status":0,"createTime":1551680167000,"updateTime":1551680167000},{"id":13,"name":"田小布","telephone":"17835708664","passwd":"25d55ad283aa400af464c76d713c07ad","identity":0,"type":0,"status":0,"createTime":1541127790000,"updateTime":1583734635000},{"id":12,"name":"王立军","telephone":"13811319877","passwd":"d67db8bdec3738f083726eef108efa41","identity":1,"type":1,"status":0,"createTime":1515386082000,"updateTime":1575271511000}]}},
      json2: {"status":200,"msg":"OK","data":{"total":13,"rows":[{"id":10,"name":"王科长","telephone":"13683267277","passwd":"de753b9c9051807f6b9e96f078debd28","identity":1,"type":1,"status":0,"createTime":1506737087000,"updateTime":1576480270000},{"id":9,"name":"刘晓凯","telephone":"15101031038","passwd":"25d55ad283aa400af464c76d713c07ad","identity":0,"type":0,"status":0,"createTime":1502879959000,"updateTime":1553243464000},{"id":8,"name":"李毅飞","telephone":"18515282866","passwd":"25d55ad283aa400af464c76d713c07ad","identity":1,"type":0,"status":2,"createTime":1502536304000,"updateTime":1591785246000}]}},
      dialogFormVisible: false,
      edit1: false,
      edit2: false,
      selection: true,
      del: false,
      multipleSelection: [],

      form: {
       id: "",
name: '',
telephone: '',
identity: '',
ctime: '' ,
status: '',

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
      // let pro = this.$http({
      //   url: "/web/admin/list",
      //   method: "POST",
      //   data: {
      //     limit: this.searchForm.page, //yonghumingba
      //     offset: this.searchForm.per_page,
      //     userId: 41
      //   }
      // });
      // pro.then(result => {
      //   console.log(result);

      //   this.tableData = result.data.data.rows;
      //   this.tot = result.data.data.total;
      // });
      if(this.searchForm.page===1){
this.tableData = this.json.data.rows;
        this.tot = this.json.data.total;
      }else if (this.searchForm.page===2){
this.tableData = this.json2.data.rows;
        this.tot = this.json2.data.total;
      }
              
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
      console.log(val);
    },
    addModel() {
      this.dialogFormVisible = true;
      console.log(this.edit1, this.edit2, this.dialogFormVisible);
    },
    editModel() {
      
      if(this.multipleSelection.length === 0){
        this.edit1 = true;
        this.edit2 = false;
        this.edit3 = false;
      }else if(this.multipleSelection.length === 1){
        this.form.id=this.multipleSelection[0].id;
      this.form.name=this.multipleSelection[0].name;
      this.form.telephone=this.multipleSelection[0].telephone;
      this.form.identity=this.multipleSelection[0].identity;
      this.form.ctime=this.multipleSelection[0].ctime;
      this.form.status=this.multipleSelection[0].status;
        this.edit1 = false;
        this.edit2 = true;
        this.edit3 = false;
      }else {
        this.edit1 = false;
        this.edit2 = false;
        this.edit3 = true;
      }
      
    
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
