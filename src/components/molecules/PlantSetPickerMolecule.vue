<template>
  <div>
    <div>
      <div class="mb-5 w-full">
        <label class="text-gray-500" for="searchPlanSet"
          >Tìm theo nội dung (vd: Cây oải hương / Chậu hình trụ / xanh /
          vừa)</label
        >
        <input
          id="searchPlanSet"
          placeholder="Nhập nội dung cần tìm..."
          class="border rounded-md w-full outline-0 focus:outline-2 focus:outline-green-700 py-1 lg:py-2 px-2 lg:px-4"
          type="text"
          v-model="searchName"
        />
      </div>
      <div class="flex items-center gap-5">
        <div class="mb-5 w-full">
          <label class="text-gray-500" for="colorSelector">Màu chậu</label>
          <select
            id="colorSelector"
            v-model="colorPickedId"
            class="border rounded-md w-full outline-0 focus:outline-2 focus:outline-green-700 py-1 lg:py-2 px-2 lg:px-4"
          >
            <option value="0">Tất cả</option>
            <option
              v-for="color in colors"
              :key="color"
              :value="color.color_id"
            >
              {{ color.name }}
            </option>
          </select>
        </div>
        <div class="mb-5 w-full">
          <label class="text-gray-500" for="productType">Loại</label>
          <select
            id="productType"
            v-model="productType"
            class="border rounded-md w-full outline-0 focus:outline-2 focus:outline-green-700 py-1 lg:py-2 px-2 lg:px-4"
          >
            <option value="0">cây</option>
            <option value="1">chậu</option>
          </select>
        </div>
      </div>
      <div class="mb-5 w-full">
        <label class="text-gray-500" for="searchPlanSet"
          >Mức giá:&nbsp;
          <span class="text-green-700 font-bold">
            {{ price == 0 ? "Từ dưới " : price == 1000000 ? "Từ hơn " : "" }}
          </span>
          <PriceTextAtom
            v-if="price != 1000000"
            class="inline-block"
            :minPrice="parseInt(price)"
            :maxPrice="parseInt(price) + 200000"
          />
          <PriceTextAtom
            v-else
            class="inline-block"
            :minPrice="parseInt(price)"
            :maxPrice="parseInt(price)"
          />
        </label>
        <input
          id="searchPlanSet"
          class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
          type="range"
          min="0"
          max="1000000"
          v-model="price"
          step="200000"
        />
      </div>
    </div>
    <hr class="my-5" />
    <h1 class="text-lg mb-5">Sản phẩm đã chọn</h1>
    <div class="flex flex-wrap gap-5">
      <div
        class="border rounded-md p-2"
        v-for="(product, index) in selectedList"
        :key="product.name"
      >
        <div>
          {{ product.name }}
        </div>
        <div class="flex flex-wrap justify-between items-center">
          <PriceTextAtom :minPrice="product.price" :maxPrice="product.price" />
          <span
            @click="() => removeProduct(index)"
            class="underline italic cursor-pointer"
            >Xóa</span
          >
        </div>
        <QuantityBarMolecule
          class="mt-2 w-10/12 [&>*]:text-sm md:[&>*]:text-lg [&>*]:w-5 [&>*]:h-5 md:[&>*]:w-6 md:[&>*]:h-6"
          @changeProductQuantity="changeProductQuantity($event, index)"
          :defaultQuantity="product.quantity"
          :maximun="product.max_quantity"
        />
      </div>
    </div>
    <hr class="my-5" />
    <div
      v-if="products.length > 0"
      class="grid grid-cols-1 xl:grid-cols-2 gap-10"
    >
      <div
        class="flex items-center gap-5"
        v-for="product in products"
        :key="product"
      >
        <div class="w-[100px] min-w-[100px] max-w-[100px]">
          <img
            class="w-full object-cover border"
            :src="`http://localhost/LeTungEm/plant_store_api__php/api/Controllers/GetFileController.php?imgURL=${product.image}`"
            alt=""
          />
        </div>
        <div class="w-full">
          <div class="font-bold">
            {{ product.name }}
          </div>
          <div class="text-green-800 flex justify-between items-center">
            <PriceTextAtom
              :maxPrice="product.price"
              :minPrice="product.price"
            />
            <button
              v-if="product.max_quantity > 0"
              @click="() => selectProduct(product)"
              class="px-4 py-1 rounded-sm text-white bg-green-700 hover:bg-green-800 active:bg-green-900"
            >
              Chọn
            </button>
            <span v-else class="italic">Hết hàng</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import QuantityBarMolecule from "./QuantityBarMolecule.vue";
import ColorsService from "@/service/ColorsService";
import PriceTextAtom from "../atoms/text/PriceTextAtom.vue";
import PlantSetService from "@/service/PlantSetService";

export default {
  name: "PlantSetPickerMolecule",
  data() {
    return {
      products: [],
      colors: [],
      price: 0,
      colorPickedId: 0,
      searchName: "",
      productType: 0,
      selectedList: [],
      selectedPlantSetId: [],
    };
  },
  watch: {
    price: function () {
      this.getAllProduct();
    },
    colorPickedId: function () {
      this.getAllProduct();
    },
    searchName: function () {
      this.getAllProduct();
    },
    productType: function () {
      this.getAllProduct();
    },
  },
  methods: {
    removeProduct(index) {
      this.selectedList.splice(index, 1);
      this.selectedPlantSetId.splice(index, 1);
    },
    changeProductQuantity(event, index) {
      this.selectedList[index].quantity = event;
    },
    selectProduct(product) {
      if (this.isProductInList(product.plant_set_id) == false) {
        product.quantity = 1;
        product.plantSetId = product.plant_set_id;
        this.selectedList.push(product);
        this.selectedPlantSetId.push(product.plant_set_id);
      }
    },
    isProductInList(plantSetId) {
      if (this.selectedPlantSetId.includes(plantSetId)) return true;
      return false;
    },
    getAllProduct() {
      PlantSetService.getAll(
        this.price,
        this.colorPickedId,
        this.productType,
        this.searchName,
        this.selectedPlantSetId
      ).then((res) => {
        this.products = res.data;
      });
    },
    getAllColors() {
      ColorsService.getAll().then((res) => {
        this.colors = res.data;
        if (res.data.length > 0) {
          this.colorPickedId = res.data[0].color_id;
        }
      });
    },
  },
  components: { PriceTextAtom, QuantityBarMolecule },
  created() {
    this.getAllProduct();
    this.getAllColors();
  },
};
</script>

<style>
</style>