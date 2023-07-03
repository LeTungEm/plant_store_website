<template>
  <div>
    <h1 class="text-2xl">Form thêm cây</h1>
    <PlantFormMolecule/>
  </div>
</template>

<script>
import PlantFormMolecule from "@/components/molecules/PlantFormMolecule.vue";

export default {
  name: "PlantsEditerView",
  components: { PlantFormMolecule },
};
</script>

<style>
</style>