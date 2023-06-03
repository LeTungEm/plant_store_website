<template>
  <div class="text-center bg-orange-50 bg-opacity-60 my-5 xl:my-10 py-5 px-3 md:py-10 xl:py-20">
    <AmberHeaderAtom class="text-xl mb-1 md:mb-3 md:text-3xl xl:text-5xl" :text="'Chào mừng đến với vườn cây của chúng tôi!'"/>
    <p class="text-[10px] md:text-sm xl:text-lg">Chúng tôi cam kết về chất lượng cây trồng khi đến tay khách hàng.</p>
  </div>
</template>

<script>
import AmberHeaderAtom from '../atoms/header/AmberHeaderAtom.vue'
export default {
  components: { AmberHeaderAtom },
    name:"WelcomMolecule",
}
</script>

<style>

</style>