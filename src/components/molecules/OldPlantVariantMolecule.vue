<template>
  <div
    v-bind:class="isRemoved(toolVariant) ? 'line-through' : ''"
    class="flex gap-5 relative"
  >
    <div
      v-bind:class="isRemoved(toolVariant) ? '' : 'hidden'"
      class="inset-0 absolute z-[5]"
    >
      &nbsp;
    </div>
    <img
      v-if="arrayImage[index]"
      class="w-[100px] flex-none border rounded-sm"
      :src="arrayImage[index].url"
      :alt="toolVariant.name"
    />
    <img
      v-else
      class="w-[100px] flex-none border rounded-sm"
      :src="`http://localhost/LeTungEm/plant_store_api__php/api/Controllers/GetFileController.php?imgURL=${toolVariant.image}`"
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
          <span>Giá chậu</span><br />
          <PriceTextAtom
            :maxPrice="toolVariant.tool_price"
            :minPrice="toolVariant.tool_price"
          />
        </div>
        <div class="w-full whitespace-nowrap">
          <span>Giá cây</span><br />
          <PriceTextAtom :maxPrice="plant.price" :minPrice="plant.price" />
        </div>
        <div class="w-full whitespace-nowrap">
          <span>Giá tổng</span><br />
          <PriceTextAtom
            :maxPrice="toolVariant.tool_price + plant.price"
            :minPrice="toolVariant.tool_price + plant.price"
          />
        </div>
        <div class="w-full whitespace-nowrap">
          <label class="cursor-pointer"
            >Giảm giá<br />
            <input
              @change="changeSaleStatus"
              type="checkbox"
              class="m-auto w-full"
              v-model="isSale"
            />
          </label>
        </div>
      </div>
      <div class="flex gap-5 items-center">
        <WhiteButtonAtom
          v-bind:class="isRemoved(toolVariant) ? 'line-through' : ''"
          @click="() => openCropImage(index)"
          class="py-2 px-5 whitespace-nowrap"
          :text="'Thay ảnh'"
        />
        <span v-bind:class="isSale ? '' : 'hidden'" class="whitespace-nowrap"
          >Giá giảm:</span
        >
        <div
          v-bind:class="isSale ? '' : 'hidden'"
          class="w-full whitespace-nowrap"
        >
          <input
            v-model="salePrice"
            placeholder="Nhập giá mới..."
            type="number"
            class="px-3 border rounded-md"
          />
        </div>
      </div>
    </div>
  </div>
</template>
  
  <script>
import PriceTextAtom from "../atoms/text/PriceTextAtom.vue";
import WhiteButtonAtom from "../atoms/button/WhiteButtonAtom.vue";

export default {
  name: "PlantVariantMolecule.vue",
  data() {
    return {
      isSale: false,
      salePrice: 0,
    };
  },
  watch: {
    salePrice: function () {
      this.$emit(
        "changeSalePrice",
        this.isSale ? 1 : 0,
        this.salePrice == "" ? 0 : this.salePrice,
        this.index
      );
    },
  },
  props: {
    toolVariant: Object,
    index: Number,
    plant: Object,
    arrayImage: Array,
    plantSetIdsRemoved: Array,
  },
  components: {
    PriceTextAtom,
    WhiteButtonAtom,
  },
  emits: ["openCropImage", "changeSalePrice"],
  methods: {
    changeSaleStatus(e) {
      let checked = e.target.checked;
      this.isSale = checked;
      if (checked == false) {
        this.salePrice = "";
      }
      this.$emit(
        "changeSalePrice",
        this.isSale ? 1 : 0,
        this.salePrice == "" ? 0 : this.salePrice,
        this.index
      );
    },
    openCropImage(index) {
      this.$emit("openCropImage", index);
    },
    isRemoved(variant) {
      if (this.plantSetIdsRemoved) {
        if (this.plantSetIdsRemoved.includes(variant.plant_set_id)) {
          return true;
        }
      }
      return false;
    },
  },
  created() {
    this.isSale = this.toolVariant.is_sale == 1 ? true : false;
    this.salePrice = this.toolVariant.sale_price;
  },
};
</script>
  
  <style>
</style>