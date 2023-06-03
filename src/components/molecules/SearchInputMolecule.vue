<template>
  <div
    class="flex items-center w-full h-12 px-5 border hover:border-4 duration-300"
  >
    <FontAwesomeIcon class="mr-3" :icon="['fas', 'magnifying-glass']" />
    <InputAtom :type="'text'" :placeholder="'Tìm kiếm...'"/>
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import InputAtom from "../atoms/input/InputAtom.vue";

export default {
  name: "SearchInputMolecule",
  components: {
    FontAwesomeIcon,
    InputAtom
},
};
</script>

<style>
</style>