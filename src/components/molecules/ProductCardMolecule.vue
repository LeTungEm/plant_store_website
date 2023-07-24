<template>
  <div :onclick="toDetail" class="relative w-full h-full">
    <div class="relative">
      <ProductLabelAtom
        v-if="product.is_sale > 0"
        class="absolute text-sm xl:text-lg top-[2%] left-0"
        :text="'Giảm giá'"
      />
      <img
        class="border rounded-sm object-center object-cover bg-white w-full duration-300 hover:shadow-lg hover:p-1"
        :src="`http://localhost/LeTungEm/plant_store_api__php/api/Controllers/GetFileController.php?imgURL=${product.image}`"
        :alt="product.name"
      />
      <div
        v-if="product.max_quantity < 1"
        class="bg-black bg-opacity-60 inset-0 absolute"
      >
        <div
          class="text-lg md:text-xl xl:text-2xl mt-[50%] text-center text-white font-bold p-5"
        >
          Đang chờ hàng về
        </div>
      </div>
    </div>
    <!-- <h1 class="hidden group-hover:block">cacs mau o day</h1> -->
    <h5 class="block text-base md:text-2xl font-semibold text-gray-500">
      {{ product.name }}
    </h5>
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
      if (this.product.is_sale > 0) {
        let [min_price, max_price] = this.findCurrentPriceWhenSale();
        this.currentMinPrice = min_price;
        this.currentMaxPrice = max_price;
        this.oldMinPrice = this.product.min_price;
        this.oldMaxPrice = this.product.max_price;
      } else {
        this.currentMinPrice = this.product.min_price;
        this.currentMaxPrice = this.product.max_price;
      }
    },

    findCurrentPriceWhenSale() {
      let arrPrice = [
        this.product.min_sale_price,
        this.product.max_sale_price,
        this.product.min_price,
        this.product.max_price,
      ];
      let min_price = arrPrice[0];
      let max_price = arrPrice[0];
      arrPrice.forEach((price) => {
        if (price < min_price) min_price = price;
        if (price > max_price) max_price = price;
      });
      return [min_price, max_price];
    },

    toDetail() {
      if (this.product.max_quantity > 0) {
        this.$router.push(`/cua-hang/${this.productType}/${this.product.slug}`);
      }
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