<template>
  <div class="w-11/12 md:w-4/5">
    <AmberHeaderAtom class="text-lg md:text-3xl xl:text-4xl" :text="'Mầm xanh hạnh phúc ở đây'" />
    <h1 class="text-3xl my-2 md:my-5 md:text-6xl xl:text-[80px] 2xl:text-[6vw]">Hãy Chọn Mầm Non Của Bạn</h1>
    <div class="flex">
      <GreenButtonAtom class="mr-5" :text="'Khuyến mãi'"/>
      <WhiteButtonAtom :text="'Mua hàng nhanh'"/>
    </div>
  </div>
</template>

<script>
import GreenButtonAtom from "../atoms/button/GreenButtonAtom.vue";
import WhiteButtonAtom from '../atoms/button/WhiteButtonAtom.vue';
import AmberHeaderAtom from "../atoms/header/AmberHeaderAtom.vue";
export default {
  components: { AmberHeaderAtom, GreenButtonAtom, WhiteButtonAtom },
  name: "BannerTextMolecule",
};
</script>

<style>
</style>