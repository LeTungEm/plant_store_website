<template>
  <div
    class="w-full border rounded-sm min-h-[320px] hover:shadow-lg hover:-translate-y-1 duration-300"
  >
    <img
      class="max-h-60 h-full w-full object-cover object-center"
      src="../../assets/image/default.jpg"
    />
    <div class="p-3 italic">
      <h1 class="text-lg font-bold">{{ news.name }}</h1>
      <p class="pb-3">
        {{ news.description.substr(0, 300) }}...
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "NewsItemMolecule",
  props: {
    news: Object,
  }
};
</script>

<style>
</style>