import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'

Vue.use(Vuex)

//  vuex 中 state 可以理解为存储数据的仓库;
//  mutations 为异步调用的方法
//  getters 相当于 computed, 用于处理 state 里的值的计算
//  moudle 将功能拆分成模块,每个模块拥有自己的 state, mutations, actions 等
export default new Vuex.Store({
  state,
  mutations
})
