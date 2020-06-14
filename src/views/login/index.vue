<template>
  <div class="big">
    <span class="zi">阀井远程无线监测系统</span>
    <div class="show">
      <el-form ref="loginFormRef" :model="loginForm" :rules="loginFormRules">
        <h3 class="biao">用户登录</h3>
        <el-form-item prop="mobile">
          <el-input v-model="loginForm.mobile" placeholder="请输入手机号码"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model="loginForm.password" placeholder="密码"></el-input>
        </el-form-item>
        <el-form-item class="verification" prop="code">
          <el-input v-model="loginForm.code" placeholder="验证码"></el-input>
          <div>
            <button class="nie" v-show="Verification" @click="handleClick">点击获取验证码</button>
            <button class="nie" v-show="!Verification">
              重新发送验证码
              <span>{{timer}}</span>
            </button>
          </div>
        </el-form-item>
        <el-form-item class="bu">
          <!-- 登录按钮 -->
          <el-button type="primary" style="width:100%;" @click="login()">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import api from "@/api/api";
import md5 from "md5.js";
export default {
  name: "",
  data() {
    return {
      Verification: true,
      timer: 60,
      // 表单数据对象
      an: "获取验证码",
      loginForm: {
        mobile: "18735681247", // 手机号码
        code: "246810", // 验证码
        password: "12345678"
      },
      loginFormRules: {
        mobile: [
          { required: true, message: "手机号码必填" },
          { pattern: /^1[35789]\d{9}$/, message: "手机号码格式不对" }
        ],
        code: [{ required: true, message: "验证码必填" }],
        password: [{ required: true, message: "密码必填" }]
      }
    };
  },
  methods: {
    handleClick() {
      this.Verification = false; //点击button改变v-show的状态

      // api
      //   .post("/web/SMS", { telephone: this.loginForm.mobile })
      //   .then(res => {});
      let auth_timer = setInterval(() => {
        //定时器设置每秒递减
        this.timer--; //递减时间
        if (this.timer <= 0) {
          this.Verification = true; //60s时间结束还原v-show状态并清除定时器
          clearInterval(auth_timer);
        }
      }, 1000);
    },

    login() {
      
      // 表单要做校验
      // el-form表单对象.validate()
      // console.log(this)
      // this.$refs.loginFormRef // 获得el-form的组件对象
      // this.$refs.loginFormRef.validate(回调函数)
      console.log(
        this.loginForm.mobile,
        this.loginForm.password,
        this.loginForm.password
      );

      this.$refs.loginFormRef.validate(valid => {
        // valid:true 校验通过
        // valid:false 校验失败
        // 校验失败，代码停止
        // api
        //   .post("/web/login", {
        //     mobile: this.loginForm.mobile, //yonghumingba
        //     password: new md5().update(this.loginForm.password).digest("hex"), //密码//加密的  你需要知道加密格式
        //     codes: this.loginForm.code //yanzhengma
        //   })
        //   .then(res => {
        //     console.log(res);
        //   });
             let pro =this.$http({
          url: '/web/login',
          method: 'POST',
           data:{
             mobile: this.loginForm.mobile, //yonghumingba
            password: new md5().update(this.loginForm.password).digest("hex"), //密码//加密的  你需要知道加密格式
            codes: this.loginForm.code,
            userId:41
           }
        })
        pro
          .then(result=>{
            console.log(result);
            
          })

        if (!valid) {
          return false;
        }

        // 路由编程式导航
        // this.$router.push('/home') // 路由地址 实现导航
        this.$router.push({ name: "home" }); // name属性实现编程式导航
      });
    }
  }
};
</script>

<style lang="less" scoped>
.big {
  width: 100%;
  height: 100%;

  position: relative;
  background-image: url("./login.jpg");
  background-size: cover;
  text-align: center;
  position: relative;
  .zi {
    font-size: 50px;
    color: #fff;
    letter-spacing: 27px;
    font-weight: 700;
    text-shadow: 0.1em 0.1em 0.2em black;
    position: absolute;

    left: 20%;
    top: 15%;
  }
}
.show {
  width: 278px;
  height: 340px;
  background: red;
  position: absolute;
  right: 10%;
  bottom: 10%;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 25px;
  .biao {
    text-align: center;
    line-height: 46px;
    font-size: 22px;
    width: 100%;
    font-weight: bold;
    color: #009bd0;
  }
  .el-form {
    width: 75%;
  }
  .verification {
    width: 200px;
    display: inline-block;
  }
  .an {
    height: 34px;
    margin-left: 30px;
    background-color: #166eb2;
    border-color: #006abc;
    color: #fff;
  }
  .nie {
    height: 34px;
    margin-left: 30px;
    background-color: #166eb2;
    border-color: #006abc;
    color: #fff;
  }
}
</style>
