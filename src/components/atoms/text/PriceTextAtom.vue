<template>
  <span class="text-green-700 font-bold">{{ formattedPrice }}</span>
</template>

<script>
export default {
  name: "PriceTextAtom",
  props:{
    price: Number,
  },
  computed: {
    formattedPrice() {
      return this.price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
    }
  },
};
</script>

<style>
</style>