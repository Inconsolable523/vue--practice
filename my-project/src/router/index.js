/**
 *  Created by zhichao on 2017/3/2.
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

import Home from '../components/Home'
import 'bootstrap/dist/css/bootstrap.css'

//开启debug模式
//Vue.config.debug = true;

Vue.use(VueRouter)
Vue.use(VueResource)

export default new VueRouter({
  routes:[
    {
  path : '/',
  component : Home
},{
  path : '/home',
  component : Home
}
  ]
})

