<template>
  <div
    v-bind:class="status ? 'translate-x-0' : 'absolute -translate-x-full'"
    class="p-5 bg-white shadow-lg z-[22] overflow-y-scroll scrollbar-hide duration-500 w-auto xl:w-1/6 min-h-[100vh]"
  >
    <slot></slot>
  </div>
</template>
  
  <script>
export default {
  name: "LeftSideBarMolecule",
  props: {
    status: Boolean,
  },
};
</script>
  
  <style>
</style>