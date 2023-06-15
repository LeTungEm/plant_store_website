<template>
  <div
    class="flex items-center w-full h-12 px-5 border hover:border-4 duration-300"
  >
    <FontAwesomeIcon class="mr-3" :icon="['fas', 'magnifying-glass']" />
    <InputAtom @change="change" :type="'search'" :placeholder="'Tìm kiếm...'" />
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import InputAtom from "../atoms/input/InputAtom.vue";

export default {
  name: "SearchInputMolecule",
  components: {
    FontAwesomeIcon,
    InputAtom,
  },
  methods: {
    change(value) {
      this.$emit("change", value);
    },
  },
  emits:['change'],
};
</script>

<style>
</style>