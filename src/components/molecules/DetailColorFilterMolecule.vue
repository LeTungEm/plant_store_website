<template>
  <div v-if="getLength() > 0">
    <!-- <h1 class="text-xl font-bold my-5">Color:&nbsp;<span class="text-gray-500">{{ currentColorName }}</span></h1> -->
    <DetailPropertyHeaderAtom :text="'Màu chậu: '">
      <span class="text-gray-500">{{ currentColorName }}</span>
    </DetailPropertyHeaderAtom>
    <div class="flex flex-wrap gap-5">
      <div
        v-for="(colorId, index) in uniqueIdArr"
        @click="() => changeColor(colorId, uniqueNameArr[index])"
        :key="colorId"
        v-bind:class="currentColorId == colorId ? 'border-black font-bold' : ''"
        class="text-lg p-1 rounded-full border hover:shadow-lg"
      >
        <span
          class="inline-block w-12 h-12 rounded-full"
          :style="`background-color: ${uniqueCodeArr[index]}`"
          >&nbsp;</span
        >
      </div>
    </div>
  </div>
</template>
  
<script>
import DetailPropertyHeaderAtom from "../atoms/header/DetailPropertyHeaderAtom.vue";
export default {
  components: { DetailPropertyHeaderAtom },
  name: "DetailColorFilterMolecule",
  data() {
    return {
      currentColorId: null,
      currentColorName: null,
      uniqueIdArr: [],
      uniqueNameArr: [],
      uniqueCodeArr: [],
    };
  },
  props: {
    listColorId: Array,
    listColorName: Array,
    listColorCode: Array,
    planterId: Number,
    listPlanterId: Array,
    indexSizes: Array,
  },
  watch: {
    planterId: function () {
      this.filterByPlanterId();
      this.setDefault();
    },

    indexSizes: function () {
      this.filterByPlanterId();
      this.setDefault();
    },
  },
  methods: {
    getLength() {
      return this.listColorId.length;
    },

    setDefault() {
      if (this.getLength() > 0) {
        this.currentColorId = this.uniqueIdArr[0];
        this.currentColorName = this.uniqueNameArr[0];
      }
      this.$emit("changeColor", this.currentColorId);
    },

    changeColor(colorId, colorName) {
      this.currentColorId = colorId;
      this.currentColorName = colorName;
      this.$emit("changeColor", this.currentColorId);
    },

    filterByPlanterId() {
      let arrId = [];
      let arrName = [];
      let arrCode = [];
      this.listPlanterId.forEach((planterId, index) => {
        if (
          planterId == this.planterId &&
          this.indexSizes.indexOf(index) != -1
        ) {
          arrId.push(this.listColorId[index]);
          arrName.push(this.listColorName[index]);
          arrCode.push(this.listColorCode[index]);
        }
      });
      this.getUniqueArray(arrId, arrName, arrCode);
    },

    getUniqueArray(arrId, arrName, arrCode) {
      this.uniqueIdArr = [...new Set(arrId)];
      this.uniqueNameArr = [...new Set(arrName)];
      this.uniqueCodeArr = [...new Set(arrCode)];
    },
  },
  created() {
    this.filterByPlanterId();
    this.setDefault();
  },
};
</script>
  
  <style>
</style>