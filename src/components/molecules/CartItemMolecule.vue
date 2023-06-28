<template>
  <div class="flex gap-5 w-full">
    <div class="relative flex-[3] lg:flex-[2]">
      <img
        class="border rounded-sm object-center object-cover bg-white duration-300 hover:shadow-lg hover:p-1"
        :src="`http://localhost:3000/images/${
          product.image ? product.image : 'default/default'
        }`"
        :alt="product.name"
      />
      <div
        v-if="quantityBarStatus == false"
        class="absolute text-sm flex justify-center items-center -top-2 -right-2 px-[10px] py-[1px] font-bold text-white bg-gray-500 rounded-full"
      >
        {{ product.quantity }}
      </div>
    </div>
    <div class="flex-[7] lg:flex-[8]">
      <h5
        :onclick="() => toDetail(product.slug)"
        class="block text-base md:text-2xl cursor-pointer hover:underline duration-300"
      >
        {{ product.name }}
      </h5>
      <GrayTextAtom
        :text="`${product.toolName}&nbsp;/&nbsp;${product.size}&nbsp;/&nbsp;${product.color}`"
      />
      <div class="flex justify-between text-xs md:text-lg">
        <PriceTextAtom
          v-if="quantityBarStatus"
          :minPrice="product.price"
          :maxPrice="product.price"
        />
        <span v-else>&nbsp;</span>
        <button
          v-if="quantityBarStatus"
          :onclick="removeProduct"
          class="italic underline text-gray-500"
        >
          xóa
        </button>
        <PriceTextAtom
          v-else
          :minPrice="product.quantity * product.price"
          :maxPrice="product.quantity * product.price"
        />
      </div>
      <QuantityBarMolecule
        v-if="quantityBarStatus"
        class="mt-2 w-2/3 xl:w-1/2 [&>*]:text-sm md:[&>*]:text-lg [&>*]:w-5 [&>*]:h-5 md:[&>*]:w-7 md:[&>*]:h-7"
        @changeProductQuantity="changeProductQuantity"
        :defaultQuantity="product.quantity"
        :maximun="product.maximumQuantity"
      />
    </div>
  </div>
</template>
  
  <script>
import GrayTextAtom from "../atoms/text/GrayTextAtom.vue";
import PriceTextAtom from "../atoms/text/PriceTextAtom.vue";
import QuantityBarMolecule from "./QuantityBarMolecule.vue";

export default {
  name: "CartItemMolecule",
  props: {
    product: Object,
    productType: String,
    index: Number,
    quantityBarStatus: Boolean,
  },
  emits: ["changeProductQuantity", "removeProduct", "closeCartBar"],
  methods: {
    toDetail(slug) {
      if (this.quantityBarStatus) {
        this.$emit("closeCartBar");
        this.$router.push(`/cua-hang/${this.productType}/${slug}`);
      }
    },

    changeProductQuantity(quantity) {
      this.$emit("changeProductQuantity", this.index, quantity);
    },

    removeProduct() {
      this.$emit("removeProduct", this.index);
    },
  },
  components: {
    PriceTextAtom,
    GrayTextAtom,
    QuantityBarMolecule,
  },
  created() {},
};
</script>
  
  <style>
</style>