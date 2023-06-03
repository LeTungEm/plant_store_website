<template>
  <div class="relative w-full h-full">
    <ProductLabelAtom v-if="product.labelText && product.labelIcon" class="absolute text-sm xl:text-lg top-[2%] left-0" :text="product.labelText" :icon="product.labelIcon"/>
    <img
      class="border rounded-sm object-center object-cover bg-white w-full duration-300 hover:shadow-lg hover:p-1"
      :src="product.image"
      :alt="product.alt"
    />
    <h5 class="block text-base md:text-2xl">{{ product.name }}</h5>
    <GrayTextAtom :text="'Chọn loại và màu chậu'" />
    <div class="flex justify-between text-xs md:text-lg">
      <PriceTextAtom :price="currentPrice" />
      <PriceTextWLineThroughAtom v-if="product.isSale" :price="oldPrice" />
    </div>
  </div>
</template>

<script>
import ProductLabelAtom from '../atoms/ProductLabelAtom.vue';
import GrayTextAtom from '../atoms/text/GrayTextAtom.vue';
import PriceTextAtom from "../atoms/text/PriceTextAtom.vue";
import PriceTextWLineThroughAtom from "../atoms/text/PriceTextWLineThroughAtom.vue";

export default {
  name: "ProductCardMolecule",
  data() {
    return {
      currentPrice: "",
      oldPrice: "",
    };
  },
  props: {
    product: {
      image: String,
      alt: String,
      name: String,
      price: Number,
      isSale: Boolean,
      salePrice: Number,
      labelText: String,
      labelIcon: String,
    },
  },
  methods: {
    getCurrentPrice() {
      if (this.product.isSale) {
        this.currentPrice = this.product.salePrice;
        this.oldPrice = this.product.price;
      } else {
        this.currentPrice = this.product.price;
      }
    },
  },
  components: { PriceTextAtom, PriceTextWLineThroughAtom, GrayTextAtom, ProductLabelAtom },
  created() {
    this.getCurrentPrice();
  },
};
</script>

<style>
</style>