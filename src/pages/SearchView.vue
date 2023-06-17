<template>
  <PageTemplate class="relative" v-if="listProduct.length > 0">
    <h1 class="text-4xl font-bold text-green-700 mb-5">
      Kết quả cho từ khóa:&nbsp;{{ this.$route.params.search }}
    </h1>
    <div class="xl:flex gap-5">
      <FilterBarOrganism
        v-if="getScreenWidth() > 1280"
        :productType="productType"
        @changeCategory="indexCategory = $event"
        @pickedColor="changePickedColor"
        class="hidden xl:block xl:flex-[2]"
      />
      <FilterBarMobieOrganism
        :filterBarMobieStatus="filterBarMobieStatus"
        :productType="productType"
        @closeFilterBarMobie="this.filterBarMobieStatus = false"
        @changeCategory="indexCategory = $event"
        @pickedColor="changePickedColor"
        class="xl:hidden"
      />
      <WhiteButtonAtom
        :onclick="() => (filterBarMobieStatus = !filterBarMobieStatus)"
        class="w-full my-5 xl:hidden"
        :text="'Lọc sản phẩm'"
      />
      <GridProductOrganisms
        class="xl:flex-[8]"
        :listProduct="listFiltered"
        :productType="this.productType"
      />
    </div>
  </PageTemplate>
</template>
  
  <script>
import PageTemplate from "@/components/templates/PageTemplate.vue";
import GridProductOrganisms from "@/components/organisms/GridProductOrganisms.vue";
import FilterBarOrganism from "@/components/organisms/FilterBarOrganism.vue";
// import PlantsCategoriesService from "@/service/PlantsCategoriesService";
import FilterBarMobieOrganism from "@/components/organisms/FilterBarMobieOrganism.vue";
import WhiteButtonAtom from "@/components/atoms/button/WhiteButtonAtom.vue";
import { mapGetters } from 'vuex';
// import ToolsCategoriesService from "@/service/ToolsCategoriesService";

export default {
  name: "SearchView",
  data() {
    return {
      changeNumber: 0,
      productType: "",
      listProduct: [],
      listFiltered: [],
      indexCategory: "",
      pickedColor: "",
      filterBarMobieStatus: false,
    };
  },
  watch: {
    "$route.params.search": {
      immediate: true,
      handler(newParam, oldParam) {
        if (newParam !== oldParam) {
          this.productType = this.$route.params.productType;
          this.indexCategory = "";
          this.pickedColor = "";
          this.getAllProduct();
        }
      },
    },

    "$route.params.productType": {
      immediate: true,
      handler(newParam, oldParam) {
        if (newParam !== oldParam) {
          this.productType = this.$route.params.productType;
          this.indexCategory = "";
          this.pickedColor = "";
          this.getAllProduct();
        }
      },
    },

    indexCategory: function () {
      this.filterProducts();
    },

    pickedColor: function () {
      this.filterProducts();
    },
  },
  methods: {
    ...mapGetters(['getListSearch']),

    getAllProduct() {
      this.listProduct = this.getListSearch();
      this.filterProducts();
    },

    filterProducts() {
      let result = this.listProduct;
      if (this.indexCategory) {
        result = this.filterByCategory(result);
      }
      if (this.pickedColor) {
        result = this.filterByColor(result);
      }
      this.listFiltered = result;
    },

    filterByCategory(listProduct) {
      let result = listProduct.filter((product) =>
        this.checkProductCategory(product.category_ids, this.indexCategory)
      );
      return result;
    },

    checkProductCategory(categories, currentCategoryId) {
      let arrCategories = categories.split(",");
      let result = false;
      if (arrCategories.indexOf(currentCategoryId.toString()) != -1)
        result = true;
      return result;
    },

    filterByColor(listProduct) {
      let result = listProduct;
      let arrPickedColor = JSON.parse(this.pickedColor);
      if (arrPickedColor.length > 0) {
        result = result.filter((product) =>
          this.checkProductColor(product.tool_color, arrPickedColor)
        );
      }
      return result;
    },

    checkProductColor(productColors, arrPickedColor) {
      let arrColor = productColors.split(",");
      let result = false;
      arrColor.forEach((color) => {
        if (arrPickedColor.indexOf(parseInt(color)) != -1) {
          result = true;
        }
      });
      return result;
    },

    changePickedColor(pickedColor) {
      this.pickedColor = pickedColor;
    },

    getScreenWidth() {
      return window.innerWidth;
    },
  },
  components: {
    PageTemplate,
    GridProductOrganisms,
    FilterBarOrganism,
    FilterBarMobieOrganism,
    WhiteButtonAtom,
  },
  created() {
    this.getAllProduct();
  },
};
</script>
  
  <style>
</style>