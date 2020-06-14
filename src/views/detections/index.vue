<template>
  <div class="box">
      <router-view></router-view>
    <span class="left">请选择井号 </span>
    <span class="right">首页>阀井数据监测</span>
    <!-- 按钮 -->
    <div class="btn" @click="tiao()">
         <el-button plain>全部井数据
            

         </el-button>
         
    </div>
    <div>

    </div>
  </div>
  
</template>

<script>
export default {
    data() {
        return {
            
        }
    },

    methods: {
        tiao(){
            this.$router.push({ name: 'ce' })
        }
    },
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
  .btn{
      padding-top: 10px;
  }
}
</style>
