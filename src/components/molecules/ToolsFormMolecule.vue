<template>
  <div>
    <div class="flex justify-end">
      <GreenButtonAtom
        @click="toNextForm"
        class="px-5 py-3 rounded-sm mb-5"
        :text="'Tiếp theo'"
      />
    </div>
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
          <label class="text-gray-500" for="toolPrice">Giá*</label>
          <input
            id="toolPrice"
            v-model="toolPrice"
            class="border rounded-md w-full outline-0 focus:outline-2 focus:outline-green-700 py-1 lg:py-2 px-2 lg:px-4"
            type="number"
          />
        </div>
        <div class="mb-5">
          <label class="text-gray-500" for="toolQuantity">Số lượng*</label>
          <input
            id="toolQuantity"
            v-model="toolQuantity"
            class="border rounded-md w-full outline-0 focus:outline-2 focus:outline-green-700 py-1 lg:py-2 px-2 lg:px-4"
            type="number"
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
          <label class="text-gray-500">Kích cỡ</label>
          <div class="flex flex-wrap gap-5 mt-1">
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
          <label class="text-gray-500">Danh mục</label>
          <div class="flex flex-wrap gap-5 mt-1">
            <div v-for="category in categories" :key="category.category_id">
              <input
                hidden
                v-model="pickedCategories"
                :value="category.category_id"
                :id="category.category_id"
                class="peer border rounded-md outline-0 focus:outline-2 focus:outline-green-700 mr-1"
                type="checkbox"
              />
              <label
                :for="category.category_id"
                class="peer-checked:text-green-700 peer-checked:font-bold hover:bg-gray-100 py-2 px-5 border rounded-md cursor-pointer"
              >
                {{ category.name }}
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
      <div class="md:w-1/2 border rounded-sm p-5 bg-gray-50">
        <div>
          <div v-for="(size, sizeIndex) in pickedSizes" :key="size.size_id">
            <div class="text-lg font-bold">Kích cỡ: {{ size.name }}</div>
            <hr class="border-black" />
            <div class="my-5">
              <label class="text-gray-500" for="toolColor">Màu chậu</label>
              <select
                id="toolColor"
                @change="addColor"
                class="border rounded-md w-full outline-0 focus:outline-2 focus:outline-green-700 py-1 lg:py-2 px-2 lg:px-4"
              >
                <option value="">Chọn màu</option>
                <option
                  v-for="color in filterColor(colors, size)"
                  :key="color.color_id"
                  :value="
                    JSON.stringify({ color: color, sizeIndex: sizeIndex })
                  "
                >
                  {{ color.name }}
                </option>
              </select>
            </div>
            <div class="flex flex-wrap gap-5">
              <span
                class="flex flex-col justify-center items-center"
                v-for="(selfColor, colorIndex) in size.selfColors"
                @click="() => moveColor(colorIndex, sizeIndex)"
                :key="selfColor.color_id"
              >
                <span
                  v-bind:style="`background-color: ${selfColor.code}`"
                  class="border inline-block rounded-full outline-2 outline-green-700 w-7 h-7 xl:w-10 xl:h-10 hover:shadow-lg duration-200"
                  >&nbsp;</span
                >
                <span>{{ selfColor.name }}</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CropImageMolecule from "@/components/molecules/CropImageMolecule.vue";
import { normalizeString } from "@/assets/js/quickFunction";
import SuppliersService from "@/service/SuppliersService";
import SizesService from "@/service/SizesService";
import ColorsService from "@/service/ColorsService";
import GreenButtonAtom from "../atoms/button/GreenButtonAtom.vue";
import CategoriesService from "@/service/CategoriesService";
import { mapActions } from "vuex";
import ToolsService from "@/service/ToolsService";

export default {
  name: "ToolsFormMolecule",
  data() {
    return {
      cropImageStatus: false,
      objectImage: {},
      suppliers: [],
      categories: [],
      pickedCategories: [],
      sizes: [],
      colors: [],
      pickedSizes: [],
      toolId: "",
      toolName: "",
      toolSlug: "",
      toolPrice: 0,
      toolQuantity: 0,
      description: "",
      status: 1,
      supplier: "",
      image: "default.jpg",
    };
  },
  emits: ["toNextForm"],
  methods: {
    ...mapActions(["showNotification"]),

    async toNextForm() {
      if (this.isFullData() == false) {
        this.showNotification(["Hãy điền đủ thông tin !!!", true]);
      } else if (this.isPriceCorrect() == false) {
        this.showNotification(["Giá phải lớn hơn 0 !!!", true]);
      } else if (this.isQuantityCorrect() == false) {
        this.showNotification(["Số lượng phải lớn hơn 0 !!!", true]);
      } else if (this.isPickedSize() == false) {
        this.showNotification(["Hãy chọn kích cỡ chậu !!!", true]);
      } else if (this.isSizeHaveColor() == false) {
        this.showNotification(["Hãy thêm màu cho các kích cỡ !!!", true]);
      } else if (await this.isSlugExist())
        this.showNotification(["Đường dẫn đã tồn tại !!!", true]);
      else {
        this.$emit("toNextForm", {
          toolId: this.toolId,
          toolName: this.toolName,
          toolSlug: this.toolSlug,
          toolPrice: this.toolPrice,
          toolQuantity: this.toolQuantity,
          description: this.description,
          status: this.status,
          supplier: this.supplier,
          image: this.image,
          objectImage: this.objectImage,
          pickedSizes: this.pickedSizes,
          pickedCategories: this.pickedCategories,
        });
      }
    },
    isFullData() {
      if (
        this.toolName.trim() &&
        this.toolSlug.trim() &&
        this.toolPrice.toString().trim() != "" &&
        this.toolQuantity.toString().trim() != "" &&
        this.supplier.toString() != ""
      ) {
        return true;
      }
      return false;
    },
    isPriceCorrect() {
      if (this.toolPrice > 0) {
        return true;
      }
      return false;
    },
    isQuantityCorrect() {
      if (this.toolQuantity > 0) {
        return true;
      }
      return false;
    },
    isPickedSize() {
      if (this.pickedSizes.length > 0) {
        return true;
      }
      return false;
    },
    isSizeHaveColor() {
      let slug = true;
      this.pickedSizes.forEach((size) => {
        if (size.selfColors) {
          if (size.selfColors.length < 1) {
            slug = false;
          }
        } else {
          slug = false;
        }
      });
      return slug;
    },
    async isSlugExist() {
      let result = await ToolsService.isSlugExist(this.toolSlug.trim());
      console.log(result);
      if (result.data.message) {
        if (this.$route.params.slug == 0) {
          return true;
        } else {
          if (this.toolSlug != this.$route.params.slug) {
            return true;
          } else {
            return false;
          }
        }
      } else {
        return false;
      }
    },
    moveColor(colorIndex, sizeIndex) {
      this.pickedSizes[sizeIndex].selfColors.splice(colorIndex, 1);
    },
    addColor(event) {
      let data = event.target.value;
      if (data != "") {
        data = JSON.parse(data);
        if (this.pickedSizes[data.sizeIndex].selfColors) {
          this.pickedSizes[data.sizeIndex].selfColors.push(data.color);
        } else {
          this.pickedSizes[data.sizeIndex].selfColors = [data.color];
        }
      }
    },
    filterColor(colors, size) {
      let listColor = [];
      if (size.selfColors) {
        listColor = colors.filter(
          (color) =>
            !size.selfColors.some(
              (selfColor) => selfColor.color_id === color.color_id
            )
        );
        return listColor;
      }
      return colors;
    },
    getAllCategories() {
      CategoriesService.getByParentSlug("chau").then((res) => {
        this.categories = res.data;
      });
    },
    async getAllSize() {
      await SizesService.getAll().then((res) => {
        this.sizes = res.data;
      });
    },
    getAllColor() {
      ColorsService.getAll().then((res) => {
        this.colors = res.data;
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
      let name = "tools/" + objectImage.name;
      this.objectImage = objectImage;
      if (this.image == "default.jpg") {
        this.image = name;
        this.objectImage.name = name;
      } else this.objectImage.name = this.image;
      if (!this.objectImage.name) {
        this.objectImage.name = name;
        this.image = name;
      }
      this.changeCropImageStatus();
    },
    async setDefaultData() {
      let slug = this.$route.params.slug;
      if (slug != 0) {
        await ToolsService.getBySlug(slug).then(async (res) => {
          await this.setDefault(res.data.data);
        });
      }
    },
    async setDefault(toolData) {
      this.toolId = toolData.tool_id;
      this.toolName = toolData.name;
      this.toolSlug = toolData.slug;
      this.toolPrice = toolData.price;
      this.toolQuantity = toolData.quantity;
      this.description = toolData.description;
      this.status = toolData.status;
      this.supplier = toolData.supplier_id;
      this.image = toolData.image;
      this.pickedCategories = toolData.category_ids
        ? toolData.category_ids.toString().split(",")
        : [];
      await this.setPickedSize(toolData.tool_id);
    },
    async setPickedSize(toolId) {
      await ToolsService.getVariantByToolId(toolId).then(async (res) => {
        res.data.data.forEach((size, index) => {
          this.pickedSizes.push({ name: size.name, size_id: size.size_id });
          let selfColors = "[" + size.selfColors + "]";
          selfColors = JSON.parse(selfColors);
          this.pickedSizes[index].selfColors = selfColors;
          let indexSizes = this.sizes.findIndex(
            (pickSize) => pickSize.size_id == size.size_id
          );
          console.log("indexSizes", indexSizes);
          this.sizes[indexSizes] = this.pickedSizes[index];
        });
      });
    },
  },
  components: { CropImageMolecule, GreenButtonAtom },
  async created() {
    await this.getAllSize();
    await this.setDefaultData();
    this.getAllCategories();
    this.getAllColor();
    this.getAllSupplier();
  },
};
</script>

<style>
</style>