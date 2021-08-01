<template>
  <div>
    <p id="name">{{ combinedName }}</p>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  computed: {
    combinedName() {
      return this.$store.getters.getCombinedName;
    },
  },
});
</script>

<style scoped>
#name {
  font-size: 8rem;
  position: relative;
}
</style>
