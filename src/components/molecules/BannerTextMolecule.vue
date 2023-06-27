<template>
  <div class="w-11/12 md:w-4/5">
    <AmberHeaderAtom class="text-lg md:text-3xl xl:text-4xl" :text="'Mầm xanh hạnh phúc'" />
    <h1 class="text-3xl my-2 md:my-5 md:text-6xl xl:text-[80px] 2xl:text-[6vw]">Hãy Chọn Mầm Non Của Bạn</h1>
    <div class="flex">
      <GreenButtonAtom class="py-1 px-2 md:py-2 md:px-6 xl:py-4 xl:px-8 text-xs md:text-lg" :text="'Khuyến mãi'"/>
      <PingNodeAtom class="mr-5 -translate-y-1 -translate-x-1" />
      <WhiteButtonAtom class="py-1 px-2 md:py-2 md:px-6 xl:py-4 xl:px-8  text-xs md:text-lg" :onclick="toShop" :text="'Mua hàng ngay'"/>
    </div>
  </div>
</template>

<script>
import PingNodeAtom from "../atoms/PingNodeAtom.vue";
import GreenButtonAtom from "../atoms/button/GreenButtonAtom.vue";
import WhiteButtonAtom from '../atoms/button/WhiteButtonAtom.vue';
import AmberHeaderAtom from "../atoms/header/AmberHeaderAtom.vue";
export default {
  components: { AmberHeaderAtom, GreenButtonAtom, WhiteButtonAtom, PingNodeAtom },
  name: "BannerTextMolecule",
  methods:{
    toShop(){
      this.$router.push('/cua-hang/cay');
    }
  }
};
</script>

<style>
</style>