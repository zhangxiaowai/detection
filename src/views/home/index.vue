<template>
  <el-container>
    <el-aside width="200px">
      <div class="he">
        <span>智慧水务环境监控系统</span>
      </div>

      <div class="user-panel">
        <div class="pull-left">
          <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
        </div>

        <div class="zi">
          <p>张琳凯</p>
          <p>18735681247</p>
        </div>
      </div>
      <el-menu
        background-color="#333"
        text-color="#fff"
        active-text-color="#409EFF"
        style="width:200px"
        router
      >
        <!-- 首页 -->
        <el-menu-item index="welcome" style="width:200px">
          <span slot="title">首页</span>
        </el-menu-item>

        <el-menu-item index="user" style="width:200px">
          <span slot="title">用户中心</span>
        </el-menu-item>

        <el-menu-item index="equipment " style="width:200px">
          <span slot="title">设备中心</span>
        </el-menu-item>
        
        <el-menu-item index="shebi " style="width:200px">
          <span slot="title">设备中心2</span>
        </el-menu-item>

        <el-menu-item index="inform" style="width:200px">
          <span slot="title">通知中心</span>
        </el-menu-item>

        <el-menu-item index="detections" style="width:200px">
          <span slot="title">阀井数据监测</span>
        </el-menu-item>

        <el-menu-item index="warning" style="width:200px">
          <span slot="title">报警信息</span>
        </el-menu-item>

        <el-menu-item index="abnormal" style="width:200px">
          <span slot="title">异常信息</span>
        </el-menu-item>

        <el-menu-item index="operations" style="width:200px">
          <span slot="title">操作日志</span>
        </el-menu-item>
      </el-menu>
    </el-aside>
    <el-container>
      <el-header>
        <!-- 顶部 -->
        <div class="biao">
          <i class="el-icon-s-unfold"></i>
        </div>

        <!-- <div class="right">
          <span class="tou">
            <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
          </span>
          <span>张琳凯</span>
        </div> -->
        <!-- <el-button>
          <span class="tou">
            <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
          </span>
          <span class="zi">张琳凯</span>


        </el-button> -->
  <el-popover
  placement="top"
  width="160"
  v-model="visible">
    
  <div style="text-align: right; margin: 0">
    <el-button size="mini" type="text" @click="tiao()">个人信息</el-button>
    <el-button type="primary" size="mini" @click="tui()">退出</el-button>
  </div>
  <el-button slot="reference">
    <span class="tou">
            <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
          </span>
          <span class="zi">张琳凯</span>

  </el-button>
</el-popover>
        
        
      </el-header>
      <el-main>
       <router-view />
      </el-main>
      <el-footer>
        <span class="left">版权所有 © 2020</span>
        <span class="right">Version beta 1.0</span>
        <p></p>
      </el-footer>
    </el-container>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      visible: false,
    }
  },
  methods: {
    tui(){
      this.$router.push({ name: 'login' }) 
    },

    // 个人信息
    tiao(){
      this.$router.push({ name: 'message' }) 
    }
  },
};
</script>

<style lang="less" scoped>
.el-container {
  height: 100%;
  .el-aside {
    background-color: #333;
    .he {
      width: 200px;
      height: 60px;
      background-color: #3c8dbc;
      color: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .user-panel {
      width: 200px;
      height: 65px;
      background: #333;
      position: relative;
      .zi {
        width: 88px;
        height: 46px;
        font-size: 12px;
        position: absolute;
        right: 15%;
        color: #fff;
      }
      .pull-left {
        width: 45px;
        height: 45px;

        position: absolute;
        left: 5%;
        top: 16%;
      }
    }
  }
  .el-header {
    background-color: #3c8dbc;
    position: relative;
    .biao {
      position: absolute;
      top: 30%;
    }
    .el-button{
      width: 107px;
      height: 100%;
      position: absolute;
      background: #3c8dbc;
      color: #fff;
      border: 0;
      right: 0;
      .el-avatar{
        width: 25px;
        height: 25px;
        margin-right: 3px;
        vertical-align:  middle;
        
      }
      .zi{
        font-size: 12px;
      }
    }
    
  }
 
  .el-footer {
    position: relative;
    .left {
      font-weight: 700;
      color: #444;
      position: absolute;
      top: 10%;
    }
    .right {
      font-weight: 700;
      color: #444;
      position: absolute;
      right: 3%;
      top: 10%;
    }
  }
}
</style>
