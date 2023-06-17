<template>
  <div class="flex gap-5 w-full">
    <div class="flex-[3] lg:flex-[2]">
      <img
        class="border rounded-sm object-center object-cover bg-white duration-300 hover:shadow-lg hover:p-1"
        :src="`http://localhost:3000/images/${
          product.image ? product.image : 'default/default'
        }`"
        :alt="product.name"
      />
    </div>
    <div class="flex-[7] lg:flex-[8]">
      <h5 :onclick="() => toDetail(product.slug)" class="block text-base md:text-2xl cursor-pointer hover:underline duration-300">{{ product.name }}</h5>
      <GrayTextAtom
        :text="`${product.toolName}&nbsp;/&nbsp;${product.size}&nbsp;/&nbsp;${product.color}`"
      />
      <div class="flex justify-between text-xs md:text-lg">
        <PriceTextAtom :minPrice="product.price" :maxPrice="product.price" />
        <button :onclick="removeProduct" class="italic underline text-gray-500">xóa</button>
      </div>
      <QuantityBarMolecule
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
  },
  emits:['changeProductQuantity', 'removeProduct', 'closeCartBar'],
  methods: {
    toDetail(slug) {
      this.$emit('closeCartBar');
      this.$router.push(`/cua-hang/${this.productType}/${slug}`);
    },

    changeProductQuantity(quantity){
      this.$emit('changeProductQuantity', this.index, quantity);
    },

    removeProduct(){
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