import Vue from "vue";
import Vuex from "vuex";
import * as types from "./types";
import user from "./modules/user";
import article from "./modules/article";

Vue.use(Vuex);
const initPageState = () => {
  return {
    token: ""
  };
};
const store = new Vuex.Store({
  strict: process.env.NODE_ENV !== "production",
  // 具体模块
  modules: {
    user,
    article
  },
  state: initPageState(),
  mutations: {
    [types.SAVE_TOKEN](state: any, pageState: any) {
      for (const prop in pageState) {
        state[prop] = pageState[prop];
      }
    }
  },
  actions: {}
});

export default store;
