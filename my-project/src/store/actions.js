/**
 *  Created by zhichao on 2017/3/3.
 */
import * as types from './mutation-types'
// 触发事件 传入参数
export default {
  addTotalTime({commit},time){
    commit(types.ADD_TOTAL_TIME,time)
  },
  decTotalTime({commit},time){
    commit(types.DEC_TOTAL_TIME,time)
  },
  savePlan({commit},plan){
    commit(types.SAVE_PLAN,plan)
  },
  deletePlan({commit},plan){
    commit(types.DELETE_PLAN,plan)
  }
};
