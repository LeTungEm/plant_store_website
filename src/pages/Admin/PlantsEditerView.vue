<template>
  <div>
    <div class="flex justify-between mb-5">
      <h1 class="text-2xl">Form thêm cây</h1>
      <GreenButtonAtom class="py-3 px-5" :text="'Tiếp theo'" />
    </div>
    <PlantFormMolecule />
  </div>
</template>

<script>
import PlantFormMolecule from "@/components/molecules/PlantFormMolecule.vue";
import GreenButtonAtom from "@/components/atoms/button/GreenButtonAtom.vue";

export default {
  name: "PlantsEditerView",
  components: { PlantFormMolecule, GreenButtonAtom },
};
</script>

<style>
</style>