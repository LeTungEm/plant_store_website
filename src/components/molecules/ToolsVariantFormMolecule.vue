<template>
  <div>
    <div class="flex justify-between">
      <GreenButtonAtom
        @click="toPreviousForm"
        class="px-5 py-3 rounded-sm mb-5"
        :text="'Trở lại'"
      />
      <GreenButtonAtom
        @click="createTool"
        class="px-5 py-3 rounded-sm mb-5"
        :text="'Tạo chậu'"
      />
    </div>
    <div>
      <div
        v-for="(toolSize, sizeIndex) in toolVariants"
        :key="toolSize.size_id"
      >
        <div v-if="toolSize.selfColors && toolSize.selfColors.length > 0">
          <h1 class="text-lg font-bold my-5">
            Kích cỡ:&nbsp;{{ toolSize.name }}
          </h1>
          <div class="border p-5 flex flex-wrap justify-between gap-5">
            <div
              class="min-w-[25%] xl:min-w-[20%]"
              v-for="(color, colorIndex) in toolSize.selfColors"
              :key="color.color_id"
            >
              <div class="justify-center items-center inline-flex flex-col">
                <h1 class="text-lg">Màu: {{ color.name }}</h1>
                <div class="flex gap-5">
                  <label class="text-gray-500">Giá:</label>
                  <input
                    :name="
                      JSON.stringify({
                        sizeIndex: sizeIndex,
                        colorIndex: colorIndex,
                      })
                    "
                    @change="changePrice"
                    class="w-full py-[2px] px-2 border"
                    :value="color.toolPrice ? color.toolPrice : toolPrice"
                  />
                </div>
                <img
                  class="border max-w-[100px] xl:max-w-[150px] mt-5"
                  v-if="
                    color.objectImage &&
                    Object.keys(color.objectImage).length > 0
                  "
                  :src="color.objectImage.url"
                  :alt="color.objectImage.name"
                />
                <img
                  v-else
                  class="border max-w-[100px] xl:max-w-[150px] mt-5"
                  :src="`http://localhost/LeTungEm/plant_store_api__php/api/Controllers/GetFileController.php?imgURL=${color.image}`"
                  alt=""
                  srcset=""
                />
                <div
                  @click="() => changeVariantImage(sizeIndex, colorIndex)"
                  class="mt-2 py-1 px-5 text-lg text-center border rounded-sm hover:border-green-700 cursor-pointer"
                >
                  Thay ảnh
                </div>
              </div>
            </div>
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
            @click="changeCropImageStatus"
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
import GreenButtonAtom from "../atoms/button/GreenButtonAtom.vue";
import CropImageMolecule from "./CropImageMolecule.vue";
export default {
  name: "ToolsVariantFormMolecule",
  data() {
    return {
      cropImageStatus: false,
      objectIndex: {},
    };
  },
  props: {
    toolVariants: Array,
    toolPrice: Number,
  },
  components: { GreenButtonAtom, CropImageMolecule },
  emits: ["toPreviousForm", "changeImage", "changePrice", "createTool"],
  methods: {
    createTool() {
      this.$emit("createTool");
    },
    changePrice(e) {
      let objectIndex = JSON.parse(e.target.name);
      let sizeIndex = objectIndex.sizeIndex;
      let colorIndex = objectIndex.colorIndex;
      this.$emit("changePrice", sizeIndex, colorIndex, e.target.value);
    },
    changeVariantImage(sizeIndex, colorIndex) {
      this.objectIndex = { sizeIndex: sizeIndex, colorIndex: colorIndex };
      console.log(this.objectIndex);
      this.changeCropImageStatus();
    },
    changeImage(objectImage) {
      let colorIndex = this.objectIndex.colorIndex;
      let sizeIndex = this.objectIndex.sizeIndex;
      if (this.toolVariants[sizeIndex].selfColors[colorIndex].image) {
        if (
          this.toolVariants[sizeIndex].selfColors[colorIndex].image ==
          "default.jpg"
        ) {
          objectImage.name = "tools/" + objectImage.name;
        } else
          objectImage.name =
            this.toolVariants[sizeIndex].selfColors[colorIndex].image;
        if (objectImage.name == "") {
          objectImage.name = "default.jpg";
        }
      } else {
        objectImage.name = "default.jpg";
      }
      this.$emit("changeImage", this.objectIndex, objectImage);
      this.changeCropImageStatus();
    },
    changeCropImageStatus() {
      this.cropImageStatus = !this.cropImageStatus;
    },
    toPreviousForm() {
      this.$emit("toPreviousForm");
    },
  },
};
</script>

<style>
</style>