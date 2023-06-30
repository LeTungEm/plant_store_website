<template>
  <div :onclick="toDetail" class="relative w-full h-full">
    <ProductLabelAtom
      v-if="product.is_sale"
      class="absolute text-sm xl:text-lg top-[2%] left-0"
      :text="'Giảm giá'"
    />
    <img
      class="border rounded-sm object-center object-cover bg-white w-full duration-300 hover:shadow-lg hover:p-1"
      :src="`https://tenebrific-crust.000webhostapp.com/api/Controllers/GetFileController.php?imgURL=${product.image}`"
      :alt="product.name"
    />
    <!-- <h1 class="hidden group-hover:block">cacs mau o day</h1> -->
    <h5 class="block text-base md:text-2xl">{{ product.name }}</h5>
    <GrayTextAtom :text="'Chọn loại và màu chậu'" />
    <div class="text-xs md:text-lg">
      <PriceTextAtom
        :minPrice="this.currentMinPrice"
        :maxPrice="this.currentMaxPrice"
      />
      <PriceTextWLineThroughAtom
        v-if="true"
        :minPrice="this.oldMinPrice"
        :maxPrice="this.oldMaxPrice"
      />
    </div>
  </div>
</template>

<script>
import ProductLabelAtom from "../atoms/ProductLabelAtom.vue";
import GrayTextAtom from "../atoms/text/GrayTextAtom.vue";
import PriceTextAtom from "../atoms/text/PriceTextAtom.vue";
import PriceTextWLineThroughAtom from "../atoms/text/PriceTextWLineThroughAtom.vue";

export default {
  name: "ProductCardMolecule",
  data() {
    return {
      currentMinPrice: 0,
      currentMaxPrice: 0,
      oldMinPrice: 0,
      oldMaxPrice: 0,
    };
  },
  props: {
    product: Object,
    productType: String,
  },
  methods: {
    getCurrentPrice() {
      if (this.product.is_sale) {
        this.currentMinPrice = this.product.min_sale_price;
        this.currentMaxPrice = this.product.max_sale_price;
        this.oldMinPrice = this.product.min_price;
        this.oldMaxPrice = this.product.max_price;
      } else {
        this.currentMinPrice = this.product.min_price;
        this.currentMaxPrice = this.product.max_price;
      }
    },

    toDetail() {
      this.$router.push(`/cua-hang/${this.productType}/${this.product.slug}`);
    },
  },
  components: {
    PriceTextAtom,
    PriceTextWLineThroughAtom,
    GrayTextAtom,
    ProductLabelAtom,
  },
  created() {
    this.getCurrentPrice();
  },
};
</script>

<style>
</style>