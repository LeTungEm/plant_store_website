<template>
  <div class="flex gap-5 w-full">
    <div class="relative flex-[3] lg:flex-[2]">
      <img
        class="border rounded-sm object-center object-cover w-full bg-white duration-300 hover:shadow-lg hover:p-1"
        :src="`http://localhost/LeTungEm/plant_store_api__php/api/Controllers/GetFileController.php?imgURL=${product.image}`"
        :alt="product.name"
      />
      <div
        class="absolute text-sm flex justify-center items-center -top-2 -right-2 px-[10px] py-[1px] font-bold text-white bg-gray-500 rounded-full"
      >
        {{ product.quantity }}
      </div>
    </div>
    <div class="flex-[7] lg:flex-[8]">
      <h5
        class="block text-base md:text-2xl cursor-pointer hover:underline duration-300"
      >
        {{ product.name }}
      </h5>
      <GrayTextAtom :text="product.variant_name" />
      <div class="flex justify-between text-xs md:text-lg">
        <span>&nbsp;</span>
        <PriceTextAtom :minPrice="product.total" :maxPrice="product.total" />
      </div>
    </div>
  </div>
</template>

<script>
import GrayTextAtom from "../atoms/text/GrayTextAtom.vue";
import PriceTextAtom from "../atoms/text/PriceTextAtom.vue";

export default {
  name: "ProductSimpleItemMolecule",
  props: {
    product: Object,
  },
  components: { GrayTextAtom, PriceTextAtom },
};
</script>

<style>
</style>