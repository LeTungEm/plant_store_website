<template>
  <input
    :placeholder="placeholder"
    class="w-full h-full bg-transparent outline-0"
    :type="type"
    :onchange="change"
  />
</template>

<script>
export default {
  name: "InputAtom",
  props: {
    type: String,
    placeholder: String,
  },
  methods: {
    change(event) {
      let value = event.target.value;
      this.$emit("change", value);
    },
  },
  emits:['change'],
};
</script>

<style>
</style>