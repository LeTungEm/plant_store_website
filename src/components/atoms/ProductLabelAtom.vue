<template>
  <!-- icon: paw/star/heart -->
  <div class="py-1 px-2 text-white bg-sky-500">
    <font-awesome-icon :icon="icon" />
    &nbsp;{{ text }}
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export default {
  name: "ProductLabelAtom",
  components: {
    FontAwesomeIcon,
  },
  props:{
    icon: String,
    text: String,
  }
};
</script>

<style>
</style>