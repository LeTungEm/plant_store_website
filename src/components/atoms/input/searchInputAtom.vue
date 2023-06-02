<template>
  <div
    class="flex items-center w-full h-12 px-5 border hover:border-4 duration-300"
  >
    <FontAwesomeIcon class="mr-3" :icon="['fas', 'magnifying-glass']" />
    <input
      placeholder="Tìm kiếm..."
      class="w-full h-full bg-transparent outline-0"
      type="text"
    />
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export default {
  name: "searchInputAtom",
  components: {
    FontAwesomeIcon,
  },
};
</script>

<style>
</style>