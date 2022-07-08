import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import axios from "axios";
import VueAxios from "vue-axios";

import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    question: {},
    questions: {},
    currentID:0,
    newquestions: {},
    finallResult:{},
  },
  getters: {
    CurrentQuestion: (state) => state.question,
    AllQuestion: (state) => state.questions,
    AllNewQuestion: (state) => state.newquestions,
    finallResult: (state) => state.finallResult,
  },
  mutations: {
    set_data: (state, questions) => {
      state.questions = questions;
    },
    set_data_id: (state, questions) => {
      for (var key in questions) {
        questions[key].id = Number(key);

        state.newquestions = questions;
      }
 
    },
 
  },

  actions: {
    getData: ({ commit }) => {
      return new Promise((resolve, reject) => {
        axios
          .get(
            "https://opentdb.com/api.php?amount=10&category=18&difficulty=medium&type=multiple"
          )
          .then((resp) => {
            commit("set_data", resp.data.results);
            commit("set_data_id", resp.data.results);
            // commit("get_current_qs", resp.data.results);

            resolve(resp);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    getCurrentQS: ({ commit },payload) => {
      commit("get_current_qs", payload);


  


    },
  },
});

import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
Vue.use(VueAxios, axios);
Vue.use(store);
Vue.use(BootstrapVue);

Vue.use(IconsPlugin);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
