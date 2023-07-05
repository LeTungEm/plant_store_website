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
          @click="() => openCropImage(index)"
          class="py-2 px-5"
          :text="'Thay ảnh'"
        />
      </div>
    </div>
  </div>
</template>

<script>
import PriceTextAtom from "../atoms/text/PriceTextAtom.vue";
import WhiteButtonAtom from "../atoms/button/WhiteButtonAtom.vue";

export default {
  name: "PlantVariantMolecule.vue",
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
  emits: ["openCropImage"],
  methods: {
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
};
</script>

<style>
</style>