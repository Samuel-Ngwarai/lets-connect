<template>
  <div>
    <div id="nameContainer">
      <component :is="selectedComponent"></component>
    </div>
    <primary-button
      name="Toggle Components"
      :onClick="toggleComponent"
    ></primary-button>
    <div id="navigationBar"></div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import MyName from "./MyName.vue";
import AboutPage from "./AboutPage.vue";

export default Vue.extend({
  data: function () {
    return {
      selectedComponent: "my-name",
    };
  },
  methods: {
    toggleComponent() {
      if (this.selectedComponent === "my-name")
        this.selectedComponent = "about-page";
      else this.selectedComponent = "my-name";
    },
  },
  components: {
    MyName,
    AboutPage,
  },
});
</script>

<style scoped>
#nameContainer {
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

#navigationBar {
  height: 15vh;
  border: dashed gray;
}
</style>
