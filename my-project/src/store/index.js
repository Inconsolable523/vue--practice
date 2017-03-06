/**
 *  Created by zhichao on 2017/3/3.
 */

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

// 数据初始化
const state={
  totalTime: 0,
  list:[{
    name:'支超',
    avatar : 'https://sfault-avatar.b0.upaiyun.com/147/223/147223148-573297d0913c5_huge256',
    date:'2017-03-03',
    totalTime:'6',
    comment:'看电影看电影'
  }]
};

export default new Vuex.Store({
  state
})
