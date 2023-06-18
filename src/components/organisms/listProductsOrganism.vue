<template>
  <div>
    <div class="flex justify-between items-center my-2 md:my-5">
      <HeaderAtom :text="header" />
      <AmberHeaderAtom
        class="text-base cursor-pointer pr-1 md:text-2xl xl:text-[2vw] hover:translate-x-1 duration-300"
        :text="'Xem tất cả ->'"
      />
    </div>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-5 lg:gap-10">
      <ProductCardMolecule
        v-for="plant in plants"
        :key="plant.plant_id"
        :product="plant"
        :productType="productType"
      />
    </div>
  </div>
</template>

<script>
import PlantsCategoriesService from "@/service/PlantsCategoriesService";
import AmberHeaderAtom from "../atoms/header/AmberHeaderAtom.vue";
import HeaderAtom from "../atoms/header/HeaderAtom.vue";
import ProductCardMolecule from "../molecules/ProductCardMolecule.vue";
import { PRODUCT_DISPLAY_NUMBER } from '@/assets/js/config';
export default {
  name: "listProductsOrganism",
  data() {
    return {
      plants: [],
    };
  },
  props:{
    categorySlug: String,
    productType: String,
    header: String,
  },
  components: { ProductCardMolecule, HeaderAtom, AmberHeaderAtom },
  methods: {
    getPlants() {
      PlantsCategoriesService.getByCategoriesSlug(this.categorySlug)
        .then((res) => {
          this.plants = this.sliceList(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    sliceList(list){
      return list.slice(0, PRODUCT_DISPLAY_NUMBER);
    }
  },
  created() {
    this.getPlants();
  },
};
</script>

<style>
</style>