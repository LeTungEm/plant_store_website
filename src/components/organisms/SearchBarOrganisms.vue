<template>
  <RightSidebarMolecule class="w-3/4 md:w-2/5" :status="status">
    <SearchInputMolecule/>
  </RightSidebarMolecule>
</template>

<script>
import RightSidebarMolecule from "../molecules/RightSidebarMolecule.vue";
import SearchInputMolecule from '../molecules/SearchInputMolecule.vue';
export default {
  name: "SearchBarOrganisms",
  props: {
    status: Boolean,
  },
  components: { RightSidebarMolecule, SearchInputMolecule },
};
</script>

<style>
</style>