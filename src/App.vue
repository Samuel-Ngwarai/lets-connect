<template>
  <div id="app">
    <HomePage :firstName="firstName" :lastName="lastName" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import HomePage from "./components/HomePage.vue";

export default Vue.extend({
  data: function () {
    return {
      firstName: "Samuel",
      lastName: "Ngwarai",
    };
  },
  name: "App",
  components: {
    HomePage,
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
