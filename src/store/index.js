/**
 * Created by Administrator on 2017/10/17.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'


Vue.use(Vuex)


const state = {
    /*test*/
    todos: [
      { id: 1, text: 'id1', done: false },
      { id: 2, text: 'id2', done: true }
    ],
    name:'tyy',

    /*******正式*********/
    userInfo:null, //用户信息

}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
})
