<template>
  <div class="box">
    <router-view></router-view>
    <span class="left">个人信息</span>
    <span class="right">首页 >个人信息</span>

    <!--  表单大盒子 -->
    <div class="he">
      <!-- 上面表单 -->
      <div class="shang">
        <!-- 表单 -->
        <div class="sd">
          <el-form>
            <el-form-item>
              <h3>个人信息</h3>

              <span>姓名：</span>
              <el-input v-model="loginForm.mobile" placeholder="请输入手机号码">姓名</el-input>
            </el-form-item>
            <el-form-item>
              <span>手机：</span>
              <el-input v-model="loginForm.mobile" placeholder="请输入手机号码">手机</el-input>
            </el-form-item>

            <el-button>修改</el-button>
          </el-form>
        </div>
      </div>

      <!-- 下面表单 -->
      <div class="xia">
        <div class="xd">
            <el-form>
            <el-form-item>
              <h3>个人信息</h3>

              <span>旧密码：</span>
              <el-input v-model="loginForm.mobile" placeholder="password">姓名</el-input>
            </el-form-item>
            <el-form-item>
              <span>新密码：</span>
              <el-input v-model="loginForm.mobile" placeholder="password">手机</el-input>
            </el-form-item>

             <el-form-item>
              <span>确认密码：</span>
              <el-input v-model="loginForm.mobile" placeholder="password">手机</el-input>
            </el-form-item>
            <el-button>修改</el-button>
          </el-form>
          
        </div>
      </div>
    </div>

    <div></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loginForm: {
        mobile: ""
      }
    };
  },

  methods: {}
};
</script>

<style lang="less" scoped>
.box {
  .left {
    font-size: 24px;
  }
  .right {
    position: absolute;
    right: 10px;
  }

  .he {
    width: 1065px;
    height: 600px;
    
    position: relative;
    .shang {
      width: 100%;
      height: 300px;

      position: absolute;
      display: flex;
      justify-content: center;
      align-items: center;
      .sd {
        text-align: center;
        border: solid;
        width: 550px;
        height: 280px;
        position: relative;
        .el-input {
          width: 436px;
          height: 34px;
        }
        .el-button{
            position: absolute;
            right: 10px;
            bottom: 10px;

        }
      }
    }
    .xia {
      width: 100%;
      height: 300px;
      position: absolute;
      top: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
     
      
      .xd{
        text-align: center;
        border: solid;
        width: 550px;
        height: 300px;
        position: relative;
        .el-input {
          width: 460px;
          height: 34px;
        }
        .el-button{
            position: absolute;
            right: 10px;
            bottom: 10px;

        }
      }
    }
  }
}
</style>
