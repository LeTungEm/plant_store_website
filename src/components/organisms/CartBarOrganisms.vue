<template>
  <RightSidebarMolecule class="w-3/4 md:w-2/5" :status="status">
    <h1>cart</h1>
  </RightSidebarMolecule>
</template>

<script>
import RightSidebarMolecule from "../molecules/RightSidebarMolecule.vue";
export default {
  name: "CartBarOrganisms",
  props: {
    status: Boolean,
  },
  components: { RightSidebarMolecule },
};
</script>

<style>
</style>