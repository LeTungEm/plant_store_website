<template>
  <div class="py-5 border-t" v-if="colors.length > 0">
    <h1 class="text-lg font-bold text-green-700">
      Màu chậu&nbsp;<span class="text-black">{{
        `(${pickedColor.length})`
      }}</span>
    </h1>
    <div class="grid grid-cols-4 xl:grid-cols-3">
      <div v-for="color in colors" :key="color">
        <input
          class="peer"
          v-model="pickedColor"
          hidden
          :id="color.color_id"
          :value="color.color_id"
          type="checkbox"
        />
        <label
          :for="color.color_id"
          type="checkbox"
          class="inline-block w-8 h-8 p-1 rounded-full border-2 peer-checked:border-black peer-checked:border-2"
          ><span
            :style="`background-color: ${color.code}`"
            class="inline-block w-full h-full rounded-full"
            >&nbsp;</span
          ></label
        >
      </div>
    </div>
  </div>
</template>

<script>
import ColorsService from "@/service/ColorsService";

export default {
  name: "FilterColorBarMolecule",
  data() {
    return {
      colors: [],
      pickedColor: [],
    };
  },
  props: {
    productType: String,
  },
  watch: {
    productType: function () {
      this.getAllColor();
      this.pickedColor = [];
    },

    pickedColor: function () {
      this.$emit("pickedColor", JSON.stringify(this.pickedColor));
    },
  },
  methods: {
    getAllColor() {
      if (this.productType == "cay") {
        ColorsService.getUsedByPlants().then((res) => {
          this.colors = res.data;
        });
      } else {
        ColorsService.getUsedByTools().then((res) => {
          this.colors = res.data;
        });
      }
    },
  },
  created() {
    this.getAllColor();
  },
};
</script>

<style>
</style>