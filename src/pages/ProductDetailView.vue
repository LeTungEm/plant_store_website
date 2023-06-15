<template>
  <SubNavBarOrganism />
  <NavBarOrganism :cartchangeNumber="cartchangeNumber" />
  <PageTemplate class="xl:flex">
    <div class="flex-1 xl:sticky top-24 h-[80vh] mb-5 xl:mb-0">
      <img
        class="object-cover h-full max-h-full mx-auto rounded-sm"
        :src="`http://localhost:3000/images/${
          product.image[currentIndex]
            ? product.image[currentIndex]
            : 'default/default'
        }`"
        :alt="product.name"
      />
    </div>
    <ProductDetailInfoOrganism
      @addToCart="addToCart"
      @changeCurrentIndex="changeCurrentIndex"
      :product="product"
    />
  </PageTemplate>
  <CropImageMolecule class="hidden" />
</template>

<script>
import NavBarOrganism from "@/components/organisms/NavBarOrganism.vue";
import SubNavBarOrganism from "@/components/organisms/SubNavBarOrganism.vue";
import PlantsService from "@/service/PlantsService";
import ProductDetailInfoOrganism from "@/components/organisms/ProductDetailInfoOrganism.vue";
import CropImageMolecule from "@/components/molecules/CropImageMolecule.vue";
import PageTemplate from "@/components/templates/PageTemplate.vue";
import ToolsService from "@/service/ToolsService";
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
      cartchangeNumber: 0,
    };
  },
  watch: {
    "$route.params.productSlug": {
      immediate: true,
      handler(newParam, oldParam) {
        if (newParam !== oldParam) {
          this.setDefault();
          this.getProductDetail();
        }
      },
    },
  },
  methods: {
    addToCart() {
      this.cartchangeNumber++;
    },

    getProductDetail() {
      let productSlug = this.$route.params.productSlug;
      let productType = this.$route.params.productType;
      if (productType == "cay") {
        PlantsService.getDetail(productSlug).then((res) => {
          if (res.data) {
            res.data.map((plantSet) => {
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
              this.product.plantId = plantSet.plant_id;
              this.product.toolId.push(plantSet.tool_id);
              this.product.tool.push(plantSet.tool);
              this.product.toolColorId.push(plantSet.tool_color_id);
              this.product.color.push(plantSet.color);
              this.product.colorCode.push(plantSet.color_code);
              this.product.toolSizeId.push(plantSet.tool_size_id);
              this.product.size.push(plantSet.size);
            });
          }
        });
      } else {
        ToolsService.getDetail(productSlug).then((res) => {
          if (res.data) {
            res.data.map((plantSet) => {
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
      // console.log(this.product);
    },

    changeCurrentIndex(currentIndex) {
      this.currentIndex = currentIndex;
    },

    setDefault() {
      this.currentIndex = 0;
      this.product = {
        name: "",
        type: "",
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
    NavBarOrganism,
    SubNavBarOrganism,
    ProductDetailInfoOrganism,
    CropImageMolecule,
    PageTemplate,
  },
};
</script>

<style>
</style>