<template>
  <div>
    <HeaderAtom class="my-2 md:my-5" :text="'Bộ sưu tập'" />
    <div class="grid grid-cols-3 md:grid-cols-5 gap-5 lg:gap-10">
      <ColectionItemMolecule
        :colectionItem="{
          image:
            'https://cdn.shopify.com/s/files/1/0150/6262/products/the-sill_aglaonema-wishes_medium_hyde_cream.jpg?v=1678485669',
          alt: 'hinh',
          name: 'phan loaij',
        }"
      />
      <ColectionItemMolecule
        :colectionItem="{
          image:
            'http://garderia.wgl-demo.net/wp-content/uploads/2020/02/logo_3.png',
          alt: 'hinh',
          name: 'than thien voi dong vat',
        }"
      />
      <ColectionItemMolecule
        :colectionItem="{
          image:
            'http://garderia.wgl-demo.net/wp-content/uploads/2020/02/partners-1d.png',
          alt: 'hinh',
          name: 'cay ngoai troi',
        }"
      />
      <ColectionItemMolecule
        :colectionItem="{
          image:
            'https://cdn.shopify.com/s/files/1/0150/6262/products/the-sill_aglaonema-wishes_medium_hyde_cream.jpg?v=1678485669',
          alt: 'hinh',
          name: 'cay trong mat cay trong mat cay trong mat cay trong mat',
        }"
      />
      <ColectionItemMolecule
        :colectionItem="{
          image:
            'https://cdn.shopify.com/s/files/1/0150/6262/products/the-sill_aglaonema-wishes_medium_hyde_cream.jpg?v=1678485669',
          alt: 'hinh',
          name: 'phan loaij',
        }"
      />
    </div>
  </div>
</template>

<script>
import HeaderAtom from "../atoms/header/HeaderAtom.vue";
import ColectionItemMolecule from "../molecules/ColectionItemMolecule.vue";
export default {
  components: { HeaderAtom, ColectionItemMolecule },
  name: "CollectionOrganism",
  methods: {
    // get all categories of plant category
  },
};
</script>

<style>
</style>