<template>
  <div class="overflow-y-auto max-h-[85vh]">
    <div class="flex justify-between mb-5">
      <GreenButtonAtom
        @click="backToPreviousForm"
        class="py-3 px-5"
        :text="'Trở về'"
      />
      <GreenButtonAtom @click="savePlant" class="py-3 px-5" :text="'Lưu'" />
    </div>
    <div v-if="toolVariants.length > 0">
      <h1 class="text-2xl mb-5 border-b">Các biến thể mới</h1>
      <div
        class="relative flex flex-col gap-5 rounded-sm overflow-x-auto w-full"
      >
        <PlantVariantMolecule
          @openCropImage="openCropImage"
          v-for="(toolVariant, index) in toolVariants"
          :key="toolVariant"
          :index="index"
          :plant="plant"
          :arrayImage="arrayImage"
          :toolVariant="toolVariant"
        />
      </div>
    </div>
    <div v-if="oldVariants.length > 0">
      <h1 class="text-2xl my-5 border-b">Các biến thể đã có</h1>
      <div
        class="relative flex flex-col gap-5 rounded-sm overflow-x-auto w-full"
      >
        <PlantVariantMolecule
          @openCropImage="openCropImageForOldVariant"
          v-for="(toolVariant, index) in oldVariants"
          :key="toolVariant"
          :index="index"
          :plant="plant"
          :arrayImage="oldVariantsArrayImage"
          :toolVariant="toolVariant"
          :plantSetIdsRemoved="plantSetIdsRemoved"
        />
      </div>
    </div>
    {{ arrayImage }}
    {{ oldVariantsArrayImage }}
    <div
      v-bind:class="cropImageStatus ? 'flex' : 'hidden'"
      class="fixed inset-0 bg-black bg-opacity-80 z-[25] justify-center items-center p-5"
    >
      <div class="w-full md:w-2/3 xl:w-1/2">
        <div class="flex justify-end">
          <span
            @click="closeCropImage"
            class="text-white py-3 px-5 text-lg font-bold cursor-pointer"
            >Đóng</span
          >
        </div>
        <CropImageMolecule @changeImage="changeImage" class="bg-black" />
      </div>
    </div>
  </div>
</template>

<script>
import ToolsService from "@/service/ToolsService";
import GreenButtonAtom from "../atoms/button/GreenButtonAtom.vue";
import CropImageMolecule from "./CropImageMolecule.vue";
import PlantsService from "@/service/PlantsService";
import PlantVariantMolecule from "./PlantVariantMolecule.vue";

export default {
  name: "PlantSetFormMolecule",
  data() {
    return {
      toolVariants: [],
      oldVariants: [],
      arrayImage: [],
      currentChangeImageIndex: "",
      oldVariantsArrayImage: [],
      currentChangeOldImageIndex: "",
      cropImageStatus: false,
      plantSetIdsRemoved: [],
    };
  },
  props: {
    status: Boolean,
    planterIds: Array,
    plant: Object,
  },
  watch: {
    status: function () {
      if (this.status) {
        this.getPlanters();
      }
    },
  },
  components: {
    GreenButtonAtom,
    CropImageMolecule,
    PlantVariantMolecule,
  },
  emits: ["backToPreviousForm", "savePlant", "getVariantData"],
  methods: {
    savePlant(){
      this.$emit('savePlant');
      this.$emit('getVariantData', this.toolVariants, this.arrayImage);
    },
    changeImage(objectImage) {
      if (this.currentChangeImageIndex != null) {
        this.arrayImage[this.currentChangeImageIndex] = objectImage;
      } else {
        this.oldVariantsArrayImage[this.currentChangeOldImageIndex] =
          objectImage;
      }
      this.currentChangeImageIndex = null;
      this.currentChangeOldImageIndex = null;
      this.closeCropImage();
    },
    closeCropImage() {
      this.cropImageStatus = false;
    },
    openCropImage(index) {
      this.cropImageStatus = true;
      this.currentChangeImageIndex = index;
    },
    openCropImageForOldVariant(index) {
      this.cropImageStatus = true;
      this.currentChangeOldImageIndex = index;
    },
    backToPreviousForm() {
      this.$emit("backToPreviousForm");
    },
    getPlanters() {
      ToolsService.getVariantsByIds(this.planterIds).then((res) => {
        console.log(res.data);
        this.toolVariants = res.data;
        this.getOldVariants();
      });
    },
    createArrImage(length) {
      var myArray = [];
      for (var i = 0; i < length; i++) {
        myArray.push("");
      }
      return myArray;
    },
    getOldVariants() {
      if (this.$route.params.slug != 0) {
        PlantsService.getVariantsById(this.plant.plant_id).then((res) => {
          this.oldVariants = res.data;
          this.oldVariantsArrayImage = this.createArrImage(res.data.length);
          this.distinctArr();
          this.getRemovedIds(res.data);
        });
      }
    },
    getRemovedIds(oldVariants) {
      let arr = [];
      oldVariants.forEach((variant) => {
        if (this.planterIds.includes(variant.tool_id) == false) {
          arr.push(variant.plant_set_id);
        }
      });
      this.plantSetIdsRemoved = arr;
    },
    distinctArr() {
      let arr = [];
      arr = this.toolVariants.filter((tool) => this.isNotOld(tool));
      this.toolVariants = arr;
      this.arrayImage = this.createArrImage(arr.length);
    },
    isNotOld(tool) {
      let result = true;
      this.oldVariants.forEach((oldTool) => {
        if (
          oldTool.tool_id == tool.tool_id &&
          oldTool.color_id == tool.color_id &&
          oldTool.size_id == tool.size_id
        ) {
          result = false;
        }
      });
      return result;
    },
  },
};
</script>

<style>
</style>