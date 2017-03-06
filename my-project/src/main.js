// 应用的入口文件
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'


Vue.config.productionTip = false//关闭生产模式下给出的提示
/* eslint-disable no-new */
// 实例化我们的Vue，指定渲染的组件
var app = new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
});
