<template>
  <div class="overflow-y-auto max-h-[85vh]">
    {{ toolData }}
    <ToolsFormMolecule
      @toNextForm="toNextForm"
      v-bind:class="isToolsForm ? '' : 'hidden'"
    />
    <ToolsVariantFormMolecule
      @toPreviousForm="toPreviousForm"
      @changeImage="changeImage"
      @changePrice="changePrice"
      @createTool="createTool"
      :toolVariants="
        Object.keys(toolData).length > 0 ? toolData.pickedSizes : []
      "
      :toolPrice="Object.keys(toolData).length > 0 ? toolData.toolPrice : 0"
      v-bind:class="isToolsForm ? 'hidden' : ''"
    />
  </div>
</template>

<script>
import ToolsFormMolecule from "@/components/molecules/ToolsFormMolecule.vue";
import ToolsVariantFormMolecule from "@/components/molecules/ToolsVariantFormMolecule.vue";

export default {
  name: "ToolsEditerView",
  data() {
    return {
      isToolsForm: true,
      toolData: {},
    };
  },
  components: {
    ToolsFormMolecule,
    ToolsVariantFormMolecule,
  },
  methods: {
    createTool(){
      console.log(this.toolData);
    },
    changePrice(sizeIndex, colorIndex, value) {
      this.toolData.pickedSizes[sizeIndex].selfColors[colorIndex].toolPrice =
        value;
    },
    changeImage(objectIndex, objectImage) {
      let sizeIndex = objectIndex.sizeIndex;
      let colorIndex = objectIndex.colorIndex;
      console.log(this.toolData.pickedSizes[sizeIndex]);
      this.toolData.pickedSizes[sizeIndex].selfColors[colorIndex].image =
        objectImage.name;
      this.toolData.pickedSizes[sizeIndex].selfColors[colorIndex].objectImage =
        objectImage;
    },
    changeForm() {
      this.isToolsForm = !this.isToolsForm;
    },
    toNextForm(toolData) {
      this.changeForm();
      this.toolData = toolData;
    },
    toPreviousForm() {
      this.changeForm();
    },
  },
};
</script>

<style>
</style>