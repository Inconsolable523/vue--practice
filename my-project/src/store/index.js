/**
 *  Created by zhichao on 2017/3/3.
 */
// 初始化store
import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex);

// 数据初始化
const state={
  totalTime: 0,
  list:[]
};

export default new Vuex.Store({
  state,
  mutations,
  actions
})
