<template>
  <BannerOrganism />
  <WelcomMolecule />
  <PageTemplate class="relative">
    <CollectionOrganism />
    <listProductsOrganism
      v-for="displayCategorie in displayCategories"
      :key="displayCategorie.slug"
      :categoryId="displayCategorie.category_id"
      :header="displayCategorie.name"
    />
    <BenefitOrganisms />
  </PageTemplate>
</template>

<script>
import BannerOrganism from "@/components/organisms/BannerOrganism.vue";
import CollectionOrganism from "@/components/organisms/CollectionOrganism.vue";
import PageTemplate from "@/components/templates/PageTemplate.vue";
import WelcomMolecule from "@/components/molecules/WelcomMolecule.vue";
import listProductsOrganism from "@/components/organisms/listProductsOrganism.vue";
import CategoriesService from "@/service/CategoriesService";
import BenefitOrganisms from "@/components/organisms/benefitOrganisms.vue";

export default {
  name: "HomeView",
  data() {
    return {
      displayCategories: [],
    };
  },
  methods: {
    getAllDisplay() {
      CategoriesService.getDisplayCategories().then((res) => {
        this.displayCategories = res.data;
      });
    },

  },
  components: {
    BannerOrganism,
    CollectionOrganism,
    PageTemplate,
    WelcomMolecule,
    listProductsOrganism,
    BenefitOrganisms,
  },
  created() {
    this.getAllDisplay();
  },
};
</script>
