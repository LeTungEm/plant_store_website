<template>
  <div @click="toShop" class="w-full h-full">
    <img
      class="border rounded-sm object-center object-cover bg-white w-full duration-300 hover:shadow-lg hover:p-1"
      :src="`http://localhost/LeTungEm/plant_store_api__php/api/Controllers/GetFileController.php?imgURL=${colectionItem.image}`"
      :alt="colectionItem.alt"
    />
    <h5 class="block text-sm md:text-2xl">{{ colectionItem.name }}</h5>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "ColectionItemMolecule.vue",
  props: {
    colectionItem: {
      image: String,
      name: String,
      alt: String,
      id: String,
      productType: String,
    },
  },
  methods: {
    ...mapActions(["changeSpecialCategoryId"]),

    toShop() {
      this.changeSpecialCategoryId(this.colectionItem.id);
      this.$router.push(`cua-hang/${this.colectionItem.productType}`);
    },
  },
};
</script>

<style>
</style>