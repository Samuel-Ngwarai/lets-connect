import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    firstName: "Samuel",
    lastName: "Ngwarai",
  },
  getters: {
    getCombinedName: (state: any): string => {
      return `${state.firstName} ${state.lastName}`;
    },
  },
});
