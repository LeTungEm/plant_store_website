<template>
  <PageTemplate class="xl:flex">
    <div class="flex-1 xl:sticky top-24 h-[80vh] mb-5 xl:mb-0">
      <img
        class="object-cover h-full max-h-full mx-auto rounded-sm"
        :src="`http://localhost/LeTungEm/plant_store_api__php/api/Controllers/GetFileController.php?imgURL=${product.image[currentIndex]}`"
        :alt="product.name"
      />
    </div>
    <ProductDetailInfoOrganism
      @changeCurrentIndex="changeCurrentIndex"
      :product="product"
    />
  </PageTemplate>
</template>

<script>
import PlantsService from "@/service/PlantsService";
import ProductDetailInfoOrganism from "@/components/organisms/ProductDetailInfoOrganism.vue";
import PageTemplate from "@/components/templates/PageTemplate.vue";
import ToolsService from "@/service/ToolsService";
import { scrollToTop } from "@/assets/js/quickFunction.js";

export default {
  name: "ProductDetailView",
  data() {
    return {
      product: {
        name: "",
        type: "",
        slug: "",
        plantQuantity: 0,
        toolQuantity: [],
        description: "",
        image: [],
        price: [],
        isSale: [],
        salePrice: [],
        funFact: null,
        light: null,
        petFriendly: null,
        sadPlantSigns: null,
        water: null,
        score: 5,
        plantSetId: [],
        plantId: null,
        toolId: [],
        tool: [],
        toolColorId: [],
        color: [],
        colorCode: [],
        toolSizeId: [],
        size: [],
      },
      currentIndex: null,
    };
  },
  watch: {
    "$route.params.productSlug": {
      immediate: true,
      handler(newParam, oldParam) {
        if (newParam !== oldParam) {
          this.setDefault();
          this.getProductDetail();
          scrollToTop();
        }
      },
    },
  },
  methods: {
    getProductDetail() {
      let productSlug = this.$route.params.productSlug;
      let productType = this.$route.params.productType;
      if (productType == "cay") {
        PlantsService.getDetail(productSlug).then((res) => {
          if (res.data.message) {
            res.data.data.map((plantSet) => {
              this.product.name = plantSet.name;
              this.product.type = productType;
              this.product.slug = plantSet.slug;
              this.product.plantQuantity = plantSet.plant_quantity;
              this.product.toolQuantity.push(plantSet.tool_quantity);
              this.product.description = plantSet.description;
              this.product.image.push(plantSet.image);
              this.product.price.push(plantSet.price);
              this.product.isSale.push(plantSet.is_sale);
              this.product.salePrice.push(plantSet.sale_price);
              this.product.funFact = plantSet.fun_fact;
              this.product.light = plantSet.light;
              this.product.petFriendly = plantSet.pet_friendly;
              this.product.sadPlantSigns = plantSet.sad_plant_signs;
              this.product.water = plantSet.water;
              this.product.score = plantSet.score;
              this.product.plantSetId.push(plantSet.plant_set_id);
              this.product.plantId = plantSet.plant_id;
              this.product.toolId.push(plantSet.tool_id);
              this.product.tool.push(plantSet.tool);
              this.product.toolColorId.push(plantSet.tool_color_id);
              this.product.color.push(plantSet.color);
              this.product.colorCode.push(plantSet.color_code);
              this.product.toolSizeId.push(plantSet.tool_size_id);
              this.product.size.push(plantSet.size);
            });
          } else {
            this.$router.push("/cua-hang/cay");
          }
        });
      } else {
        ToolsService.getDetail(productSlug).then((res) => {
          if (res.data.message) {
            res.data.data.map((plantSet) => {
              this.product.name = plantSet.name;
              this.product.type = productType;
              this.product.slug = plantSet.slug;
              this.product.plantQuantity = null;
              this.product.toolQuantity.push(plantSet.tool_quantity);
              this.product.description = plantSet.description;
              this.product.image.push(plantSet.image);
              this.product.price.push(plantSet.price);
              this.product.isSale.push(plantSet.is_sale);
              this.product.salePrice.push(plantSet.sale_price);
              this.product.score = plantSet.score;
              this.product.plantSetId.push(plantSet.plant_set_id);
              this.product.plantId = plantSet.plant_id;
              this.product.toolId.push(plantSet.tool_id);
              this.product.tool.push(plantSet.name);
              this.product.toolColorId.push(plantSet.tool_color_id);
              this.product.color.push(plantSet.color);
              this.product.colorCode.push(plantSet.color_code);
              this.product.toolSizeId.push(plantSet.tool_size_id);
              this.product.size.push(plantSet.size);
            });
          }
        });
      }
    },

    changeCurrentIndex(currentIndex) {
      this.currentIndex = currentIndex;
      this.imgErr = false;
    },

    setDefault() {
      this.currentIndex = 0;
      this.product = {
        name: "",
        type: "",
        slug: "",
        plantQuantity: 0,
        toolQuantity: [],
        description: "",
        image: [],
        price: [],
        isSale: [],
        salePrice: [],
        funFact: null,
        light: null,
        petFriendly: null,
        sadPlantSigns: null,
        water: null,
        score: 5,
        plantSetId: [],
        plantId: null,
        toolId: [],
        tool: [],
        toolColorId: [],
        color: [],
        colorCode: [],
        toolSizeId: [],
        size: [],
      };
    },
  },
  components: {
    ProductDetailInfoOrganism,
    PageTemplate,
  },
};
</script>

<style>
</style>