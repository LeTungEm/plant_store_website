<template>
  <div>
    <HeaderAtom class="my-2 md:my-5" :text="'Danh mục nổi bật'" />
    <div class="grid grid-cols-3 md:grid-cols-5 gap-5 lg:gap-10">
      <CollectionItemMolecule
        v-for="category in listSpecialCategories"
        :key="category"
        :colectionItem="{
          image: category.image,
          name: category.name,
          alt: category.name,
          id: category.category_id,
          productType: category.parent_slug
        }"
      />
    </div>
  </div>
</template>

<script>
import CategoriesService from '@/service/CategoriesService';
import HeaderAtom from "../atoms/header/HeaderAtom.vue";
import CollectionItemMolecule from "../molecules/CollectionItemMolecule.vue";
import { COLLECTION_DISPLAY_NUMBER } from '@/assets/js/config';
export default {
  name: "CollectionOrganism",
  data(){
    return {
      listSpecialCategories: [],
    };
  },
  components: { HeaderAtom, CollectionItemMolecule },
  methods: {
    getSpecialCategories(){
      CategoriesService.getSpecialCategories().then(res => {
        this.listSpecialCategories = this.sliceList(res.data);
      });
    },

    sliceList(list){
      return list.slice(0, COLLECTION_DISPLAY_NUMBER);
    }
  },
  created(){
    this.getSpecialCategories();
  }
};
</script>

<style>
</style>