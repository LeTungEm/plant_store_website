<template>
  <div class="flex overflow-hidden h-[40vh] md:h-[50vh] lg:h-[100vh]">
    <div class="flex-1 relative flex justify-end items-center">
      <AbsoluteFlowerAtom :src="'https://garderia.wgl-demo.net/wp-content/uploads/2020/01/home-2_slider_02.png'" :alt="'hoa'" class="top-0 left-0 -translate-x-16 md:-translate-x-36"/>
      <BannerTextMolecule/>
    </div>
    <div class="flex-1 image-clip">
      <img
        class="w-full h-full object-cover object-center"
        src="https://garderia.wgl-demo.net/wp-content/uploads/2020/02/home-3_slider_01-1.png"
        alt=""
      />
    </div>
  </div>
</template>

<script>
import AbsoluteFlowerAtom from '../atoms/img/AbsoluteFlowerAtom.vue';
import BannerTextMolecule from '../molecules/BannerTextMolecule.vue';
export default {
  components: { AbsoluteFlowerAtom, BannerTextMolecule },
  name: "BannerOrganism",
};
</script>

<style>
.image-clip {
  clip-path: ellipse(76% 61% at 76% 38%);
}
</style>