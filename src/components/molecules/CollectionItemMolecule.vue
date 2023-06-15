<template>
  <div class="w-full h-full">
    <img
      class="border rounded-sm object-center object-cover bg-white w-full duration-300 hover:shadow-lg hover:p-1"
      :src="`http://localhost:3000/images/${colectionItem.image}`"
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
      name: String,
      alt: String,
      slug: String,
    }
  }
};
</script>

<style>
</style>