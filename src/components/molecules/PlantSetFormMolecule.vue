<template>
  <div class="overflow-y-auto max-h-[85vh]">
    <div class="flex justify-between mb-5">
      <GreenButtonAtom
        @click="backToPreviousForm"
        class="py-3 px-5"
        :text="'Trở về'"
      />
      <GreenButtonAtom class="py-3 px-5" :text="'Lưu'" />
    </div>
    <h1 class="text-2xl mb-5">Các biến thể mới</h1>
    <div class="relative flex flex-col gap-5 rounded-sm overflow-x-auto w-full">
      <div
        class="flex gap-5"
        v-for="(toolVariant, index) in toolVariants"
        :key="toolVariant"
      >
        <img
          v-if="arrayImage[index]"
          class="w-[100px] flex-none border rounded-sm"
          :src="arrayImage[index].url"
          :alt="toolVariant.name"
        />
        <img
          v-else
          class="w-[100px] flex-none border rounded-sm"
          :src="`https://tenebrific-crust.000webhostapp.com/api/Controllers/GetFileController.php?imgURL=simple`"
          :alt="toolVariant.name"
        />
        <div class="flex-wrap">
          <div class="w-full text-lg font-bold whitespace-nowrap px-2">
            {{
              `${plant.name}&nbsp;/&nbsp;${toolVariant.name}&nbsp;/&nbsp;${toolVariant.color_name}&nbsp;/&nbsp;${toolVariant.size_name}`
            }}
          </div>
          <div class="flex gap-5 justify-between items-center p-2">
            <div class="w-full whitespace-nowrap">
              <span>Giá chậu</span>
              <PriceTextAtom
                :maxPrice="toolVariant.price"
                :minPrice="toolVariant.price"
              />
            </div>
            <div class="w-full whitespace-nowrap">
              <span>Giá cây</span>
              <PriceTextAtom :maxPrice="plant.price" :minPrice="plant.price" />
            </div>
            <div class="w-full whitespace-nowrap">
              <span>Giá tổng</span>
              <PriceTextAtom
                :maxPrice="toolVariant.price + plant.price"
                :minPrice="toolVariant.price + plant.price"
              />
            </div>
          </div>
          <div>
            <WhiteButtonAtom
              @click="() => openCropImageStatus(index)"
              class="py-2 px-5"
              :text="'Thay ảnh'"
            />
          </div>
        </div>
      </div>
    </div>
    <div
      v-bind:class="cropImageStatus ? 'flex' : 'hidden'"
      class="fixed inset-0 bg-black bg-opacity-80 z-[25] justify-center items-center p-5"
    >
      <div class="w-full md:w-2/3 xl:w-1/2">
        <div class="flex justify-end">
          <span
            @click="closeCropImageStatus"
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
import PriceTextAtom from "../atoms/text/PriceTextAtom.vue";
import CropImageMolecule from "./CropImageMolecule.vue";
import WhiteButtonAtom from "../atoms/button/WhiteButtonAtom.vue";
import PlantsService from "@/service/PlantsService";

export default {
  name: "PlantSetFormMolecule",
  data() {
    return {
      toolVariants: [],
      oldVariants: [],
      arrayImage: [],
      currentChangeImageIndex: "",
      cropImageStatus: false,
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
        console.log("mo");
        this.getPlanters();
      }
    },
  },
  components: {
    GreenButtonAtom,
    PriceTextAtom,
    WhiteButtonAtom,
    CropImageMolecule,
  },
  emits: ["backToPreviousForm"],
  methods: {
    changeImage(objectImage) {
      this.arrayImage[this.currentChangeImageIndex] = objectImage;
      this.closeCropImageStatus();
    },
    closeCropImageStatus() {
      this.cropImageStatus = false;
    },
    openCropImageStatus(index) {
      this.cropImageStatus = true;
      this.currentChangeImageIndex = index;
    },
    backToPreviousForm() {
      this.$emit("backToPreviousForm");
    },
    getPlanters() {
      ToolsService.getVariantsByIds(this.planterIds).then((res) => {
        console.log(res.data);
        this.toolVariants = res.data;
        this.arrayImage = this.createArrImage(res.data.length);
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
          this.distinctArr();
        });
      }
    },
    distinctArr() {
      let arr = [];
      arr = this.toolVariants.filter((tool) => this.isNotOld(tool));
      this.toolVariants = arr;
      console.log("not old", arr);
    },
    isNotOld(tool) {
      let result = true;
      this.oldVariants.forEach((oldTool) => {
        if (
          oldTool.tool_id == tool.tool_id &&
          oldTool.color_id == tool.color_id &&
          oldTool.size_id == tool.size_id
        ) {
          // phan tu can xoa
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