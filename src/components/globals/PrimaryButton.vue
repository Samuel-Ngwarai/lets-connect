<template>
  <div>
    <button class="primaryButton" @click="onClick">{{ name }}</button>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "primary-button",
  props: {
    name: {
      type: String,
      required: true,
    },
    onClick: {
      type: Function,
      required: true,
    },
  },
});
</script>

<style scoped>
.primaryButton {
  width: 8rem;
  height: 3rem;
  background-color: rgba(54, 111, 216, 0.767);
}
</style>
