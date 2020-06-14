import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
// 配置公共根地址(线上地址)
axios.defaults.baseURL = 'http://192.168.1.161:9090'
// 配置为Vue的(原型)继承成员
Vue.prototype.$http = axios

// import '@/utils/ax.js'
import ElementUI from 'element-ui'
// 注册全部的组件和事件方法ElementUI
Vue.use(ElementUI)

// 全局样式
import '@/assets/css/global.css'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
