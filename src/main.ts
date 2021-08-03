import Vue from "vue";
import App from "./App.vue";
import PrimaryButton from "./components/globals/PrimaryButton.vue";

import { store } from "./vuex";

Vue.config.productionTip = false;

Vue.component("primary-button", PrimaryButton);

new Vue({
  render: (h) => h(App),
  store,
}).$mount("#app");
