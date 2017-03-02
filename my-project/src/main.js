import Vue from 'vue'
import App from './App'
import router from './router'


Vue.config.productionTip = false
/* eslint-disable no-new */
// 实例化我们的Vue
var app = new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
});
