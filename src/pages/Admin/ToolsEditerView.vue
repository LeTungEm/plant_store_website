<template>
  <div class="overflow-y-auto max-h-[85vh]">
    <div class="flex flex-col-reverse md:flex-row gap-5">
      <div class="md:w-1/2 border rounded-sm p-5 bg-gray-50">
        <div class="mb-5">
          <label class="text-gray-500" for="toolName">Tên chậu*</label>
          <input
            id="toolName"
            @change="formatSlug"
            v-model="toolName"
            class="border rounded-md w-full outline-0 focus:outline-2 focus:outline-green-700 py-1 lg:py-2 px-2 lg:px-4"
            type="text"
          />
        </div>
        <div class="mb-5">
          <label class="text-gray-500" for="toolSlug">Đường dẫn*</label>
          <input
            id="toolSlug"
            v-model="toolSlug"
            class="border rounded-md w-full outline-0 focus:outline-2 focus:outline-green-700 py-1 lg:py-2 px-2 lg:px-4"
            type="text"
          />
        </div>
        <div class="mb-5">
          <label class="text-gray-500" for="description">Mô tả</label>
          <textarea
            rows="3"
            id="description"
            v-model="description"
            class="border rounded-md w-full outline-0 focus:outline-2 focus:outline-green-700 py-1 lg:py-2 px-2 lg:px-4"
            type="text"
          />
        </div>
        <div class="mb-5">
          <label class="text-gray-500" for="description">Kích cỡ</label>
          {{ pickedSizes }}
          <div class="flex flex-wrap gap-5">
            <div v-for="size in sizes" :key="size.size_id">
              <input
                hidden
                v-model="pickedSizes"
                :value="size"
                :id="size.size_id"
                class="peer border rounded-md outline-0 focus:outline-2 focus:outline-green-700 mr-1"
                type="checkbox"
              />
              <label
                :for="size.size_id"
                class="peer-checked:text-green-700 peer-checked:font-bold hover:bg-gray-100 py-2 px-5 border rounded-md cursor-pointer"
              >
                {{ size.name }}
              </label>
            </div>
          </div>
        </div>
        <div class="mb-5">
          <label class="text-gray-500" for="status">Trạng thái</label>
          <select
            id="status"
            v-model="status"
            class="border rounded-md w-full outline-0 focus:outline-2 focus:outline-green-700 py-1 lg:py-2 px-2 lg:px-4"
          >
            <option value="1">Hiển thị</option>
            <option value="0">Ẩn</option>
          </select>
        </div>
        <div class="mb-5">
          <label class="text-gray-500" for="supplier">Nhà cung cấp*</label>
          <select
            id="supplier"
            v-model="supplier"
            class="border rounded-md w-full outline-0 focus:outline-2 focus:outline-green-700 py-1 lg:py-2 px-2 lg:px-4"
          >
            <option
              v-for="supplier in suppliers"
              :key="supplier"
              :value="supplier.supplier_id"
            >
              {{ supplier.name }}
            </option>
          </select>
        </div>
        <div class="mb-5">
          <label class="text-gray-500">Ảnh trưng bày</label>
          <div
            @click="changeCropImageStatus"
            class="border-2 rounded-md w-full bg-white hover:text-white hover:bg-green-700 py-1 lg:py-2 px-2 lg:px-4"
          >
            Chọn ảnh
          </div>
          <img
            class="border max-w-[200px] mt-5 m-auto"
            v-if="Object.keys(objectImage).length > 0"
            :src="objectImage.url"
            :alt="objectImage.name"
          />
          <img
            class="border max-w-[200px] mt-5 m-auto"
            v-else-if="image"
            :src="`http://localhost/LeTungEm/plant_store_api__php/api/Controllers/GetFileController.php?imgURL=${image}`"
            :alt="toolName"
          />
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
      </div>
      <div class="md:w-1/2 border rounded-sm p-5 bg-gray-50">.</div>
    </div>
  </div>
</template>

<script>
import CropImageMolecule from "@/components/molecules/CropImageMolecule.vue";
import { normalizeString } from "@/assets/js/quickFunction";
import SuppliersService from "@/service/SuppliersService";
import SizesService from "@/service/SizesService";

export default {
  name: "ToolsEditerView",
  data() {
    return {
      cropImageStatus: false,
      objectImage: {},
      suppliers: [],
      sizes: [],
      pickedSizes: [],
      toolName: "",
      toolSlug: "",
      description: "",
      status: 1,
      supplier: "",
      image: "",
    };
  },
  methods: {
    getAllSize() {
      SizesService.getAll().then((res) => {
        this.sizes = res.data;
      });
    },
    getAllSupplier() {
      SuppliersService.getAll().then((res) => {
        this.suppliers = res.data;
      });
    },
    formatSlug() {
      let nomalString = normalizeString(this.toolName);
      this.toolSlug = nomalString.replace(/ /g, "-");
    },
    changeCropImageStatus() {
      this.cropImageStatus = !this.cropImageStatus;
    },
    changeImage(objectImage) {
      this.objectImage = objectImage;
      if (this.image == "default.jpg") {
        this.image = "tools/" + objectImage.name;
        this.objectImage.name = this.image;
      } else this.objectImage.name = this.image;
      if (this.objectImage.name == "") {
        this.objectImage.name = "default.jpg";
      }
      this.changeCropImageStatus();
    },
  },
  components: { CropImageMolecule },
  created() {
    this.getAllSize();
    this.getAllSupplier();
  },
};
</script>

<style>
</style>