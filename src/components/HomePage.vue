<template>
  <div>
    <div id="nameContainer">
      <MyName />
    </div>
    <div id="navigationBar"></div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import MyName from "./MyName.vue";

export default Vue.extend({
  components: {
    MyName,
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
