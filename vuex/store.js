import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
const state = {
  count:0,
}
const mutations ={
  mutationsAddCount(state,n=0){
    return (state.count += n);
  },
  mutationsReduceCount(state,n = 0){
    return (state.count -= n);
  }
}
const actions = {
  actionsAddCount(context, n = 0) {
    console.log(context)
    return context.commit('mutationsAddCount', n)
  },
  actionsReduceCount({ commit }, n = 0) {
    return commit('mutationsReduceCount', n)
  }
}
/*
 *@description:所谓的getter就是store的计算属性，就是把数据计算好后供组件调用，免得每个组件需要做同样数据处理的时候都要封装数据转换函数
 *@author: yxd
 *@date:
*/
const getters = {
  getterCount(state) {
    return (state.count )
  }
}
export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
