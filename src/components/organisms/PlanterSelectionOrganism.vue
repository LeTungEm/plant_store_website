<template>
  <div v-if="getLength() > 0">
    <DetailPlanterFilterMolecule
      @changePlanter="changePlanter"
      :listId="planterIds"
      :listName="planterNames"
    />
    <DetailSizeFilterMolecule
      @changeSize="changeSize"
      :listPlanterId="planterIds"
      :planterId="currentplanterId"
      :listSizeId="sizeIds"
      :listSizeName="sizeNames"
    />
    <DetailColorFilterMolecule
      @changeColor="changeColor"
      :indexSizes="indexSize"
      :listColorId="colorIds"
      :listColorName="colorNames"
      :listColorCode="colorCodes"
      :listPlanterId="planterIds"
      :planterId="currentplanterId"
    />
  </div>
</template>

<script>
import DetailColorFilterMolecule from "../molecules/DetailColorFilterMolecule.vue";
import DetailPlanterFilterMolecule from "../molecules/DetailPlanterFilterMolecule.vue";
import DetailSizeFilterMolecule from "../molecules/DetailSizeFilterMolecule.vue";

export default {
  name: "PlanterSelectionOrganism",
  data() {
    return {
      currentplanterId: null,
      indexSize: [],
    };
  },
  props: {
    planterIds: Array,
    planterNames: Array,
    sizeIds: Array,
    sizeNames: Array,
    colorIds: Array,
    colorNames: Array,
    colorCodes: Array,
  },
  components: {
    DetailSizeFilterMolecule,
    DetailPlanterFilterMolecule,
    DetailColorFilterMolecule,
  },
  methods: {
    getLength() {
      return this.planterIds.length;
    },

    changePlanter(planterId) {
      this.$emit("changePlanter", planterId);
      this.currentplanterId = planterId;
    },

    changeSize(sizeId, index) {
      this.$emit("changeSize", sizeId);
      this.indexSize = JSON.parse(index);
    },

    changeColor(colorId) {
      this.$emit("changeColor", colorId);
    },
  },
};
</script>

<style>
</style>