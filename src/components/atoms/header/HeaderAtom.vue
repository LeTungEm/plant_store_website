<template>
  <h1 class="mb-2 md:mb-5 text-2xl md:text-5xl xl:text-6xl">{{ text }}</h1>
</template>

<script>
export default {
  name: "HeaderAtom",
  props:{
    text: String,
  }
};
</script>

<style>
</style>