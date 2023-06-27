<template>
  <div
    class="flex items-center w-full h-12 relative"
  >
    <div
      class="flex justify-center items-center absolute top-0 left-0 bottom-0 ml-4"
    >
      <FontAwesomeIcon
        class="mr-3 duration-700"
        :icon="['fas', 'magnifying-glass']"
      />
    </div>
    <InputAtom
      class="pl-10 pr-5 border rounded-md focus:outline-2 focus:border-0 focus:outline-green-700"
      :status="status"
      @change="change"
      :type="'search'"
      :placeholder="'Tìm kiếm...'"
    />
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import InputAtom from "../atoms/input/InputAtom.vue";

export default {
  name: "SearchInputMolecule",
  props: {
    status: Boolean,
  },
  components: {
    FontAwesomeIcon,
    InputAtom,
  },
  methods: {
    change(value) {
      this.$emit("change", value);
    },
  },
  emits: ["change"],
};
</script>

<style>
</style>