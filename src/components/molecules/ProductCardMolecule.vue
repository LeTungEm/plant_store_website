<template>
  <div class="w-full h-full">
    <img
      class="border object-center object-cover bg-white w-full duration-300 hover:shadow-lg hover:p-1"
      :src="product.image"
      :alt="product.alt"
    />
    <h5 class="block text-sm md:text-2xl">{{ product.name }}</h5>
    <div class="flex justify-between text-xs md:text-lg">
      <PriceTextAtom :price="currentPrice" />
      <PriceTextWLineThroughAtom v-if="product.isSale" :price="oldPrice" />
    </div>
  </div>
</template>

<script>
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
  components: { PriceTextAtom, PriceTextWLineThroughAtom },
  created() {
    this.getCurrentPrice();
  },
};
</script>

<style>
</style>