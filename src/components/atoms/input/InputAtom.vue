<template>
  <input
    :placeholder="placeholder"
    class="w-full h-full bg-transparent outline-0"
    :type="type"
  />
</template>

<script>
export default {
  name: "InputAtom",
  props:{
    type: String,
    placeholder: String,
  }
};
</script>

<style>
</style>