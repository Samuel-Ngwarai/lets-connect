<template>
  <div>
    <div id="nameContainer">
      <p id="name">{{ firstName }} {{ lastName }}</p>
    </div>
    <div id="navigationBar"></div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
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

#name {
  font-size: 8rem;
  position: relative;
}

#navigationBar {
  height: 15vh;
  border: dashed gray;
}
</style>
