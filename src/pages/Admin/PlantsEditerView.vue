<template>
  <div>
    <PlantFormMolecule
      @toNextForm="changeForm"
      v-bind:class="isFinalForm ? 'hidden' : ''"
    />
    <PlantSetFormMolecule
      @backToPreviousForm="changeForm"
      v-bind:class="isFinalForm ? '' : 'hidden'"
    />
  </div>
</template>

<script>
import PlantFormMolecule from "@/components/molecules/PlantFormMolecule.vue";
import PlantSetFormMolecule from "@/components/molecules/PlantSetFormMolecule.vue";

export default {
  name: "PlantsEditerView",
  data() {
    return {
      isFinalForm: false,
    };
  },
  components: { PlantFormMolecule, PlantSetFormMolecule },
  methods: {
    changeForm() {
      this.isFinalForm = !this.isFinalForm;
    },
  },
};
</script>

<style>
</style>