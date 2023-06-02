<template>
  <img
    class="absolute z-[-1]"
    :src="src"
    :alt="alt"
  />
</template>

<script>
export default {
    name:"AbsoluteFlowerAtom",
    props:{
      src: String,
      alt: String,
    }
};
</script>

<style>
</style>