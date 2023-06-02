<template>
  <RightSidebarMolecule class="w-3/4 md:w-2/5" :status="status">
    <SearchInputAtom/>
  </RightSidebarMolecule>
</template>

<script>
import SearchInputAtom from '../atoms/input/searchInputAtom.vue';
import RightSidebarMolecule from "../molecules/RightSidebarMolecule.vue";
export default {
  name: "SearchBarOrganisms",
  props: {
    status: Boolean,
  },
  components: { RightSidebarMolecule, SearchInputAtom },
};
</script>

<style>
</style>