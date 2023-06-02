<template>
  <div>
    <HeaderAtom :text="'Sản phẩm mới'"/>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-5 lg:gap-10">
      <ProductCardMolecule :product="{image:'https://cdn.shopify.com/s/files/1/0150/6262/products/the-sill_aglaonema-wishes_medium_hyde_cream.jpg?v=1678485669', alt:'', name:'cay moi ra', price:200000, isSale: true, salePrice: 10000}"/>
      <ProductCardMolecule :product="{image:'https://cdn.shopify.com/s/files/1/0150/6262/products/the-sill_aglaonema-wishes_medium_hyde_cream.jpg?v=1678485669', alt:'', name:'cay moi ra ne', price:200000, isSale: false, salePrice: null}"/>
      <ProductCardMolecule :product="{image:'https://cdn.shopify.com/s/files/1/0150/6262/products/the-sill_aglaonema-wishes_medium_hyde_cream.jpg?v=1678485669', alt:'', name:'cay moi ra', price:200000, isSale: true, salePrice: 10000}"/>
      <ProductCardMolecule :product="{image:'https://cdn.shopify.com/s/files/1/0150/6262/products/the-sill_aglaonema-wishes_medium_hyde_cream.jpg?v=1678485669', alt:'', name:'cay moi ra', price:200000, isSale: true, salePrice: 10000}"/>
      <ProductCardMolecule :product="{image:'https://cdn.shopify.com/s/files/1/0150/6262/products/the-sill_aglaonema-wishes_medium_hyde_cream.jpg?v=1678485669', alt:'', name:'cay moi ra', price:200000, isSale: true, salePrice: 10000}"/>
    </div>
  </div>
</template>

<script>
import HeaderAtom from '../atoms/header/HeaderAtom.vue';
import ProductCardMolecule from '../molecules/ProductCardMolecule.vue'
export default {
  components: { ProductCardMolecule, HeaderAtom },
    name:"NewProductsOrganism",

}
</script>

<style>

</style>