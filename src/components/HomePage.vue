<template>
  <div>
    <div id="name">{{ firstName }} {{ lastName }}</div>
    <p id="subTitle">Time for some introductions</p>
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
#name {
  font-size: 8rem;
}

#subTitle {
  font-size: 2rem;
}
</style>
