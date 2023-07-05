<template>
  <div>
    <PlantFormMolecule
      @toNextForm="changeForm"
      @insertData="insertData"
      v-bind:class="isFinalForm ? 'hidden' : ''"
    />
    <PlantSetFormMolecule
      :planterIds="pickedPlanters"
      :status="isFinalForm"
      :plant="plant"
      @backToPreviousForm="changeForm"
      @savePlant="savePlant"
      @getVariantData="getVariantData"
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
      pickedPlanters: [],
      objectImage: {},
      pickedCategories: [],
      plant: {},
    };
  },
  components: { PlantFormMolecule, PlantSetFormMolecule },
  methods: {
    savePlant(){
      // 
    },
    getVariantData(){
      
    },
    changeForm() {
      this.isFinalForm = !this.isFinalForm;
    },
    insertData(objectImage, pickedCategories, pickedPlanters, plant) {
      this.objectImage = objectImage;
      this.pickedCategories = pickedCategories;
      this.pickedPlanters = pickedPlanters;
      this.plant = plant;
      console.log("objectImage", objectImage);
      console.log("pickedCategories", pickedCategories);
      console.log("pickedPlanters", pickedPlanters);
      console.log("plant", plant);
    },
  },
};
</script>

<style>
</style>