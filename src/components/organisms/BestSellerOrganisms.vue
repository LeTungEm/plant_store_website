<template>
  <div>
    <div class="flex justify-between items-center my-2 md:my-5">
      <HeaderAtom :text="'Bán chạy'" />
      <AmberHeaderAtom
        class="text-base cursor-pointer pr-1 md:text-2xl xl:text-[2vw] hover:translate-x-1 duration-300"
        :text="'Xem tất cả ->'"
      />
    </div>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-5 lg:gap-10">
      <ProductCardMolecule
        :product="{
          image:
            'https://cdn.shopify.com/s/files/1/0150/6262/products/the-sill_aglaonema-wishes_medium_hyde_cream.jpg?v=1678485669',
          alt: '',
          name: 'cay moi ra',
          price: 200000,
          isSale: true,
          salePrice: 10000,
        }"
      />
      <ProductCardMolecule
        :product="{
          image:
            'https://cdn.shopify.com/s/files/1/0150/6262/products/the-sill_aglaonema-wishes_medium_hyde_cream.jpg?v=1678485669',
          alt: '',
          name: 'cay moi ra ne',
          price: 200000,
          isSale: false,
          salePrice: null,
        }"
      />
      <ProductCardMolecule
        :product="{
          image:
            'https://cdn.shopify.com/s/files/1/0150/6262/products/the-sill_aglaonema-wishes_medium_hyde_cream.jpg?v=1678485669',
          alt: '',
          name: 'cay moi ra',
          price: 200000,
          isSale: true,
          salePrice: 10000,
        }"
      />
      <ProductCardMolecule
        :product="{
          image:
            'https://cdn.shopify.com/s/files/1/0150/6262/products/the-sill_aglaonema-wishes_medium_hyde_cream.jpg?v=1678485669',
          alt: '',
          name: 'cay moi ra',
          price: 200000,
          isSale: true,
          salePrice: 10000,
        }"
      />
    </div>
  </div>
</template>

<script>
import AmberHeaderAtom from "../atoms/header/AmberHeaderAtom.vue";
import HeaderAtom from "../atoms/header/HeaderAtom.vue";
import ProductCardMolecule from "../molecules/ProductCardMolecule.vue";
export default {
  name: "BestSellerOrganisms",
  components: { HeaderAtom, AmberHeaderAtom, ProductCardMolecule },
};
</script>

<style>
</style>