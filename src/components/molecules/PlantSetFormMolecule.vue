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
    <h1 class="text-2xl">Các biến thể</h1>
    <div class="flex flex-col gap-5 border rounded-sm overflow-x-auto w-full">
      <div
        class="flex gap-5"
        v-for="toolVariant in toolVariants"
        :key="toolVariant"
      >
        <img
          class="max-w-[70px] md:max-w-[100px] flex-none"
          :src="`https://tenebrific-crust.000webhostapp.com/api/Controllers/GetFileController.php?imgURL=${toolVariant.image}`"
          :alt="toolVariant.name"
        />
        <div class="flex-grow">
          <div class="border w-full text-lg font-bold whitespace-nowrap px-2">
            {{
              `${plant.name}&nbsp;/&nbsp;${toolVariant.name}&nbsp;/&nbsp;${toolVariant.color_name}&nbsp;/&nbsp;${toolVariant.size_name}`
            }}
          </div>
          <div class="flex justify-between items-center border p-2">
            <PriceTextAtom
              class="border w-full"
              :maxPrice="toolVariant.price + plant.price"
              :minPrice="toolVariant.price + plant.price"
            />
            <div class="border w-full">{{ toolVariant.price }}</div>
            <div class="border w-full">{{ toolVariant.quantity }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ToolsService from "@/service/ToolsService";
import GreenButtonAtom from "../atoms/button/GreenButtonAtom.vue";
import PriceTextAtom from "../atoms/text/PriceTextAtom.vue";

export default {
  name: "PlantSetFormMolecule",
  data() {
    return {
      toolVariants: [],
      arrayImage: [],
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
  components: { GreenButtonAtom, PriceTextAtom },
  emits: ["backToPreviousForm"],
  methods: {
    backToPreviousForm() {
      this.$emit("backToPreviousForm");
    },
    getPlanters() {
      ToolsService.getByArrId(this.planterIds).then((res) => {
        console.log(res.data);
        this.toolVariants = res.data;
        this.arrayImage = this.createArrImage(res.data.length);
      });
    },
    createArrImage(length) {
      var myArray = [];
      for (var i = 0; i < length; i++) {
        myArray.push('');
      }
      return myArray;
    },
  },
};
</script>

<style>
</style>