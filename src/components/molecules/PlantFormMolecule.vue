<template>
  <div class="overflow-y-scroll max-h-[85vh]">
    <div class="flex justify-between mb-5">
      <h1 v-if="this.$route.params.slug == 0" class="text-2xl">Thêm cây</h1>
      <h1 v-else class="text-2xl">Cập nhật cây</h1>
      <GreenButtonAtom
        @click="toNextForm"
        class="py-3 px-5"
        :text="'Tiếp theo'"
      />
    </div>
    <div class="flex flex-col md:flex-row gap-5">
      <div class="md:w-1/2 border rounded-sm p-5 bg-gray-50">
        <div class="mb-5">
          <label class="text-gray-500" for="plantName">Tên*</label>
          <input
            id="plantName"
            class="border rounded-md w-full outline-0 focus:outline-2 focus:outline-green-700 py-1 lg:py-2 px-2 lg:px-4"
            type="text"
            v-model="plant.name"
            @change="formatSlug"
          />
        </div>
        <div class="mb-5">
          <label class="text-gray-500" for="slug">Đường đẫn*</label>
          <input
            id="slug"
            class="border rounded-md w-full outline-0 focus:outline-2 focus:outline-green-700 py-1 lg:py-2 px-2 lg:px-4"
            type="text"
            v-model="plant.slug"
          />
        </div>
        <PlanterPickerMolecule
          :defaultPickedName="plant.tool"
          @changePickedPlanter="changePickedPlanter"
          class="mb-5"
        />
        <div class="mb-5">
          <label class="text-gray-500" for="price">Giá*</label>
          <input
            id="price"
            class="border rounded-md w-full outline-0 focus:outline-2 focus:outline-green-700 py-1 lg:py-2 px-2 lg:px-4"
            type="number"
            v-model="plant.price"
          />
        </div>
        <div class="mb-5">
          <label class="text-gray-500" for="quantity">Số lượng*</label>
          <input
            id="quantity"
            class="border rounded-md w-full outline-0 focus:outline-2 focus:outline-green-700 py-1 lg:py-2 px-2 lg:px-4"
            type="number"
            v-model="plant.quantity"
          />
        </div>
        <div class="mb-5">
          <label class="text-gray-500"
            >Danh mục cây&nbsp;({{ pickedCategories.length }})</label
          >
          <div class="flex flex-wrap gap-5 mt-5">
            <span v-for="category in categories" :key="category">
              <input
                hidden
                :id="category.category_id + category.name"
                class="peer border rounded-md outline-0 focus:outline-2 focus:outline-green-700 mr-1"
                type="checkbox"
                :value="category.category_id"
                v-model="pickedCategories"
              />
              <label
                class="peer-checked:text-green-700 peer-checked:font-bold hover:bg-gray-100 py-2 px-5 border rounded-md cursor-pointer"
                :for="category.category_id + category.name"
                >{{ category.name }}</label
              >
            </span>
          </div>
        </div>
        <div class="mb-5">
          <label class="text-gray-500" for="status">Trạng thái</label>
          <select
            id="status"
            v-model="plant.status"
            class="border rounded-md w-full outline-0 focus:outline-2 focus:outline-green-700 py-1 lg:py-2 px-2 lg:px-4"
          >
            <option value="1">Hiển thị</option>
            <option value="0">Ẩn</option>
          </select>
        </div>
        <div class="mb-5">
          <label class="text-gray-500" for="supplier">Nhà cung cấp</label>
          <select
            id="supplier"
            v-model="plant.supplier_id"
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
            v-if="objectImage.url"
            :src="objectImage.url"
            :alt="objectImage.name"
          />
          <img
            class="border max-w-[200px] mt-5 m-auto"
            v-else-if="plant.image"
            :src="`https://tenebrific-crust.000webhostapp.com/api/Controllers/GetFileController.php?imgURL=${plant.image}`"
            :alt="plant.name"
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
        <div class="mb-5">
          <label class="text-gray-500" for="description">Mô tả</label>
          <textarea
            id="description"
            rows="3"
            class="border rounded-md w-full outline-0 focus:outline-2 focus:outline-green-700 py-1 lg:py-2 px-2 lg:px-4"
            type="text"
            v-model="plant.description"
          />
        </div>
        <div class="mb-5">
          <label class="text-gray-500" for="funFact">Đặc điểm nổi bật</label>
          <textarea
            id="funFact"
            rows="3"
            class="border rounded-md w-full outline-0 focus:outline-2 focus:outline-green-700 py-1 lg:py-2 px-2 lg:px-4"
            type="text"
            v-model="plant.fun_fact"
          />
        </div>
        <div class="mb-5">
          <label class="text-gray-500" for="light">Ánh sáng</label>
          <textarea
            id="light"
            rows="3"
            class="border rounded-md w-full outline-0 focus:outline-2 focus:outline-green-700 py-1 lg:py-2 px-2 lg:px-4"
            type="text"
            v-model="plant.light"
          />
        </div>
        <div class="mb-5">
          <label class="text-gray-500" for="petFriendly"
            >Thân thiện với động vật</label
          >
          <textarea
            rows="3"
            id="petFriendly"
            class="border rounded-md w-full outline-0 focus:outline-2 focus:outline-green-700 py-1 lg:py-2 px-2 lg:px-4"
            type="text"
            v-model="plant.pet_friendly"
          />
        </div>
        <div class="mb-5">
          <label class="text-gray-500" for="water">Lượng nước cho cây</label>
          <textarea
            id="water"
            rows="3"
            class="border rounded-md w-full outline-0 focus:outline-2 focus:outline-green-700 py-1 lg:py-2 px-2 lg:px-4"
            type="text"
            v-model="plant.water"
          />
        </div>
        <div class="mb-5">
          <label class="text-gray-500" for="sadPlantSigns"
            >Dấu hiệu cây không khỏe</label
          >
          <textarea
            rows="3"
            id="sadPlantSigns"
            class="border rounded-md w-full outline-0 focus:outline-2 focus:outline-green-700 py-1 lg:py-2 px-2 lg:px-4"
            type="text"
            v-model="plant.sad_plant_signs"
          />
        </div>
      </div>
    </div>
    <NotificationAtom
      isWarning
      :status="notificationStatus"
      :text="notificationMessage"
    />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import CropImageMolecule from "./CropImageMolecule.vue";
import PlanterPickerMolecule from "./PlanterPickerMolecule.vue";
import SuppliersService from "@/service/SuppliersService";
import CategoriesService from "@/service/CategoriesService";
import GreenButtonAtom from "../atoms/button/GreenButtonAtom.vue";
import NotificationAtom from "../atoms/NotificationAtom.vue";
import { normalizeString } from "@/assets/js/quickFunction";
import PlantsService from "@/service/PlantsService";

export default {
  name: "PlantFormMolecule",
  data() {
    return {
      notificationMessage: "",
      notificationStatus: false,
      cropImageStatus: false,
      objectImage: {},
      suppliers: [],
      categories: [],
      pickedCategories: [],
      pickedPlanters: [],
      plant: {
        name: "",
        slug: "",
        tool: "",
        price: 0,
        quantity: 0,
        status: 1,
        image: "",
        description: "",
        fun_fact: "",
        light: "",
        pet_friendly: "",
        water: "",
        sad_plant_signs: "",
        supplier_id: "",
        category_names: "",
      },
    };
  },
  components: {
    PlanterPickerMolecule,
    CropImageMolecule,
    GreenButtonAtom,
    NotificationAtom,
  },
  emits: ["toNextForm"],
  methods: {
    showNotification(message) {
      this.notificationMessage = message;
      this.notificationStatus = !this.notificationStatus;
    },
    async toNextForm() {
      if (await this.validateForm()) {
        this.$emit("toNextForm", this.objectImage, this.pickedCategories, this.pickedPlanters, this.plant);
      }
    },
    async validateForm() {
      let slug = this.$route.params.slug;
      if (this.isFullRequirementsField() == false) {
        this.showNotification("Hãy điền các trường bắt buộc !!!");
        return false;
      } else if (this.isPriceCorrect() == false) {
        this.showNotification("Giá phải lớn hơn 0 !!!");
        return false;
      } else if (this.isQuantityCorrect() == false) {
        this.showNotification("Số lượng phải lớn hơn 0 !!!");
        return false;
      } else if ((await this.isSlugExist()) == true) {
        if (slug == 0) {
          this.showNotification("Đường dẫn đã tồn tại !!!");
          return false;
        } else if (slug != 0 && slug != this.plant.slug) {
          this.showNotification("Đường dẫn đã tồn tại !!!");
          return false;
        }
      }
      return true;
    },
    isFullRequirementsField() {
      let plant = this.plant;
      if (
        plant.name &&
        plant.slug &&
        plant.price >= 0 &&
        plant.quantity >= 0 &&
        this.pickedPlanters.length > 0
      ) {
        return true;
      }
      return false;
    },
    isPriceCorrect() {
      if (this.plant.price > 0) return true;
      return false;
    },
    isQuantityCorrect() {
      if (this.plant.quantity > 0) return true;
      return false;
    },
    async isSlugExist() {
      let result = await PlantsService.isSlugExist(this.plant.slug);
      if (result.data.message) return true;
      return false;
    },
    formatSlug() {
      let nomalString = normalizeString(this.plant.name);
      this.plant.slug = nomalString.replace(/ /g, "-");
    },
    changePickedPlanter(planterIds) {
      console.log(planterIds);
      this.pickedPlanters = planterIds;
    },
    changeCropImageStatus() {
      this.cropImageStatus = !this.cropImageStatus;
    },
    changeImage(objectImage) {
      this.objectImage = objectImage;
      this.plant.image = objectImage.name;
      this.changeCropImageStatus();
    },
    ...mapGetters(["getDetailData"]),
    getData() {
      let slug = this.$route.params.slug;
      if (slug != 0) {
        let detailData = this.getDetailData();
        if (detailData) {
          console.log(detailData);
          this.setData(detailData);
        }
      }
    },
    setData(detailData) {
      this.plant.name = detailData.name;
      this.plant.slug = detailData.slug;
      this.plant.tool = detailData.tool ? detailData.tool : "";
      this.plant.price = detailData.price;
      this.plant.quantity = detailData.quantity;
      this.plant.status = detailData.status;
      this.plant.image = detailData.image;
      this.plant.description = detailData.description;
      this.plant.fun_fact = detailData.fun_fact;
      this.plant.light = detailData.light;
      this.plant.pet_friendly = detailData.pet_friendly;
      this.plant.water = detailData.water;
      this.plant.sad_plant_signs = detailData.sad_plant_signs;
      this.plant.supplier_id = detailData.supplier_name;
      this.plant.category_names = detailData.category_names
        ? detailData.category_names
        : "";
    },
    getAllSupplier() {
      SuppliersService.getAll().then((res) => {
        this.suppliers = res.data;
        this.getSupplierId(res.data);
      });
    },
    getSupplierId(suppliers) {
      let id;
      if (suppliers.length > 0) id = suppliers[0].supplier_id;
      suppliers.forEach((supplier) => {
        if (supplier.name == this.plant.supplier_id) id = supplier.supplier_id;
      });
      this.plant.supplier_id = id;
    },
    getAllCategories() {
      CategoriesService.getByParentSlug("cay").then((res) => {
        this.categories = res.data;
        this.getListCategoryIds(res.data);
      });
    },
    getListCategoryIds(categories) {
      let arr = [];
      let plantCategory = this.plant.category_names;
      categories.forEach((category) => {
        if (plantCategory.includes(category.name))
          arr.push(category.category_id);
      });
      this.pickedCategories = arr;
    },
  },
  created() {
    this.getData();
    this.getAllSupplier();
    this.getAllCategories();
  },
};
</script>

<style>
</style>