<template>
  <div>
    <router-view></router-view>
     <div class="bao"> 
         <span class="left">首页</span>
        <span class="right">首页</span>
     </div>

        <!-- 图片 -->
        <div class="center">
          <el-row :gutter="20">
            <el-col :span="8">
              <div class="grid-content bg-purple" ref="main2">
                
              </div>
            </el-col>
            <el-col :span="8" >
              <div class="grid-content bg-purple" ref="main3"></div>
            </el-col>
            <el-col :span="8">
              <div class="grid-content bg-purple" ref="main4"></div>
            </el-col>

            <el-col :span="8">
              <div class="grid-content bg-purple" ref="main5"></div>
            </el-col>
            <el-col :span="8">
              <div class="grid-content bg-purple" ref="main6"></div>
            </el-col>
            <el-col :span="8">
              <div class="grid-content bg-purple" ref="main7"></div>
            </el-col>
          </el-row>
        </div>


  </div>
</template>

<script>

import echarts from 'echarts'
  export default {
   
    data() {
      return {
        
      }
    },


     mounted () {
    // 绘制图表
    this.paintPic()
     this.a()
     this.b()
     this.c()
     this.d()
     this.e()

    
  },
  methods: {
    // 绘制图表
    paintPic () {
      // 基于准备好的dom，初始化echarts实例
      // 在Vue中获得页面元素有两种方式：
      // 1. dom方式，例如document.getElementById('main')
      // 2. ref方式，this.$refs.xxx  // el-form ref="loginForm" this.$refs.loginForm.validate()
      //    ref既可以获得组件对象 还可以获得html标签对象(与document.getElementById()表达意思相同)
      // var myChart = echarts.init(document.getElementById('main'))
      let dv = this.$refs.main2
      var myChart = echarts.init(dv)

      let option = {
        title:{
          text:'甲烷',
           left: 'center'
        },
        tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    legend: {
        orient: 'vertical',
        left: 10,
        data: ['正常', '不正常']
    },
    series: [
        {
            name: '访问来源',
            type: 'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
                show: false,
                position: 'center'
            },
            emphasis: {
                label: {
                    show: true,
                    fontSize: '30',
                    fontWeight: 'bold'
                }
            },
            labelLine: {
                show: false
            },
            data: [
                {value: 335, name: '正常'},
                {value: 310, name: '不正常'},
              
            ]
        }
    ]
      }

      // 绘制图表
      myChart.setOption(option)
    },
    b () {
      // 基于准备好的dom，初始化echarts实例
      // 在Vue中获得页面元素有两种方式：
      // 1. dom方式，例如document.getElementById('main')
      // 2. ref方式，this.$refs.xxx  // el-form ref="loginForm" this.$refs.loginForm.validate()
      //    ref既可以获得组件对象 还可以获得html标签对象(与document.getElementById()表达意思相同)
      // var myChart = echarts.init(document.getElementById('main'))
      let dv = this.$refs.main4
      var myChart = echarts.init(dv)

      let option = {
        title:{
          text:'甲烷',
           left: 'center'
        },
         tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    legend: {
        orient: 'vertical',
        left: 10,
        data: ['正常', '不正常', ]
    },
    series: [
        {
            name: '访问来源',
            type: 'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
                show: false,
                position: 'center'
            },
            emphasis: {
                label: {
                    show: true,
                    fontSize: '30',
                    fontWeight: 'bold'
                }
            },
            labelLine: {
                show: false
            },
            data: [
                {value: 335, name: '正常'},
                {value: 310, name: '不正常'},
              
            ]
        }
    ]
      }

      // 绘制图表
      myChart.setOption(option)
    },
    a () {
      // 基于准备好的dom，初始化echarts实例
      // 在Vue中获得页面元素有两种方式：
      // 1. dom方式，例如document.getElementById('main')
      // 2. ref方式，this.$refs.xxx  // el-form ref="loginForm" this.$refs.loginForm.validate()
      //    ref既可以获得组件对象 还可以获得html标签对象(与document.getElementById()表达意思相同)
      // var myChart = echarts.init(document.getElementById('main'))
      let dv = this.$refs.main3
      var myChart = echarts.init(dv)

      let option = {
        title:{
          text:'甲烷',
           left: 'center'
        },
         tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    legend: {
        orient: 'vertical',
        left: 10,
        data: ['正常', '不正常']
    },
    series: [
        {
            name: '访问来源',
            type: 'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
                show: false,
                position: 'center'
            },
            emphasis: {
                label: {
                    show: true,
                    fontSize: '30',
                    fontWeight: 'bold'
                }
            },
            labelLine: {
                show: false
            },
            data: [
                {value: 335, name: '正常'},
                {value: 310, name: '不正常'},
                
            ]
        }
    ]
      }

      // 绘制图表
      myChart.setOption(option)
    },
     c () {
      // 基于准备好的dom，初始化echarts实例
      // 在Vue中获得页面元素有两种方式：
      // 1. dom方式，例如document.getElementById('main')
      // 2. ref方式，this.$refs.xxx  // el-form ref="loginForm" this.$refs.loginForm.validate()
      //    ref既可以获得组件对象 还可以获得html标签对象(与document.getElementById()表达意思相同)
      // var myChart = echarts.init(document.getElementById('main'))
      let dv = this.$refs.main5
      var myChart = echarts.init(dv)

      let option = {
        title:{
          text:'甲烷',
           left: 'center'
        },
         tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    legend: {
        orient: 'vertical',
        left: 10,
        data: ['正常', '不正常']
    },
    series: [
        {
            name: '访问来源',
            type: 'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
                show: false,
                position: 'center'
            },
            emphasis: {
                label: {
                    show: true,
                    fontSize: '30',
                    fontWeight: 'bold'
                }
            },
            labelLine: {
                show: false
            },
            data: [
                {value: 335, name: '正常'},
                {value: 310, name: '不正常'},
                
            ]
        }
    ]
      }

      // 绘制图表
      myChart.setOption(option)
    },
    d() {
      // 基于准备好的dom，初始化echarts实例
      // 在Vue中获得页面元素有两种方式：
      // 1. dom方式，例如document.getElementById('main')
      // 2. ref方式，this.$refs.xxx  // el-form ref="loginForm" this.$refs.loginForm.validate()
      //    ref既可以获得组件对象 还可以获得html标签对象(与document.getElementById()表达意思相同)
      // var myChart = echarts.init(document.getElementById('main'))
      let dv = this.$refs.main6
      var myChart = echarts.init(dv)

      let option = {
        title:{
          text:'甲烷',
           left: 'center'
        },
         tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    legend: {
        orient: 'vertical',
        left: 10,
        data: ['正常', '不正常']
    },
    series: [
        {
            name: '访问来源',
            type: 'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
                show: false,
                position: 'center'
            },
            emphasis: {
                label: {
                    show: true,
                    fontSize: '30',
                    fontWeight: 'bold'
                }
            },
            labelLine: {
                show: false
            },
            data: [
                {value: 335, name: '正常'},
                {value: 310, name: '不正常'},
               
            ]
        }
    ]
      }

      // 绘制图表
      myChart.setOption(option)
    },
     e() {
      // 基于准备好的dom，初始化echarts实例
      // 在Vue中获得页面元素有两种方式：
      // 1. dom方式，例如document.getElementById('main')
      // 2. ref方式，this.$refs.xxx  // el-form ref="loginForm" this.$refs.loginForm.validate()
      //    ref既可以获得组件对象 还可以获得html标签对象(与document.getElementById()表达意思相同)
      // var myChart = echarts.init(document.getElementById('main'))
      let dv = this.$refs.main7
      var myChart = echarts.init(dv)

      let option = {
        title:{
          text:'甲烷',
           left: 'center'
        },
         tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    legend: {
        orient: 'vertical',
        left: 10,
        data: ['正常', '不正常']
    },
    series: [
        {
            name: '访问来源',
            type: 'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
                show: false,
                position: 'center'
            },
            emphasis: {
                label: {
                    show: true,
                    fontSize: '30',
                    fontWeight: 'bold'
                }
            },
            labelLine: {
                show: false
            },
            data: [
                {value: 335, name: '正常'},
                {value: 310, name: '不正常'},
               
            ]
        }
    ]
      }

      // 绘制图表
      myChart.setOption(option)
    }
  }
}
</script>

<style lang="less" scoped>
.el-main {
    background-color: #f2f3f5;
    position: relative;
    .bao{
        width: 100%;
        height: 30px;
       
        position: relative;
        .left {
      font-size: 20px;
    }
    .right {
      position: absolute;
      right: 0;
    }
    }
    
    .center {
     
      .el-row {
        margin-bottom: 20px;
        &:last-child {
          margin-bottom: 0;
        }
      }
      .el-col {
        border-radius: 4px;
      }
      .bg-purple-dark {
        background: #99a9bf;
      }
      .bg-purple {
        width: 325px;
        height: 218px;
        margin-right: 10px;
        background-color: #ecf0f5;
        box-shadow: 0 -4px 18px #3c8dbc;
        border-radius: 15px;
        padding: 0;
        padding-top: 18px;
        margin-bottom: 20%;
      }
      .bg-purple-light {
        background: #e5e9f2;
      }
      .grid-content {
        border-radius: 4px;
        min-height: 36px;
      }
      .row-bg {
        padding: 10px 0;
        background-color: #f9fafc;
      }
    }
  }
</style>
