<template>
  <div class="w-full h-full">
    <img
      class="border object-center object-cover bg-white w-full duration-300 hover:shadow-lg hover:p-1"
      :src="colectionItem.image"
      :alt="colectionItem.alt"
    />
    <h5 class="block text-sm md:text-2xl">{{ colectionItem.name }}</h5>
  </div>
</template>

<script>
export default {
  name: "ColectionItemMolecule.vue",
  props:{
    colectionItem:{
      image: String,
      alt: String,
      name: String,
    }
  }
};
</script>

<style>
</style>