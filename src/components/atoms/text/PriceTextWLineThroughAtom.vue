<template>
  <span class="line-through text-gray-500">{{ formattedPrice }}</span>
</template>

<script>
export default {
  name: "PriceTextWLineThroughAtom",
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