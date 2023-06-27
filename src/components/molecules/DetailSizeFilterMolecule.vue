<template>
  <div v-if="getLength() > 0">
    <DetailPropertyHeaderAtom :text="'Kích cỡ chậu:'" />
    <div class="flex flex-wrap gap-5">
      <DetailOptionButtonAtom
        v-for="(sizeId, index) in uniqueIdArr"
        @click="() => changeSize(sizeId)"
        :key="sizeId"
        v-bind:class="currentSizeId == sizeId ? 'border-black font-bold' : ''"
        :text="uniqueNameArr[index]"
      />
    </div>
  </div>
</template>

<script>
import DetailOptionButtonAtom from "../atoms/button/DetailOptionButtonAtom.vue";
import DetailPropertyHeaderAtom from "../atoms/header/DetailPropertyHeaderAtom.vue";
export default {
  components: { DetailPropertyHeaderAtom, DetailOptionButtonAtom },
  name: "DetailSizeFilterMolecule",
  data() {
    return {
      currentSizeId: null,
      uniqueIdArr: [],
      uniqueNameArr: [],
    };
  },
  props: {
    listSizeId: Array,
    listSizeName: Array,
    planterId: Number,
    listPlanterId: Array,
  },
  watch: {
    planterId: function () {
      this.filterByPlanterId();
      this.setDefault();
    },
  },
  methods: {
    getLength() {
      return this.listSizeId.length;
    },

    setDefault() {
      if (this.getLength() > 0) {
        this.currentSizeId = this.uniqueIdArr[0];
      }
      let indedxArr = this.getAllIndex(this.currentSizeId);
      this.$emit("changeSize", this.currentSizeId, JSON.stringify(indedxArr));
    },

    changeSize(sizeId) {
      this.currentSizeId = sizeId;
      let indedxArr = this.getAllIndex(this.currentSizeId);
      this.$emit("changeSize", this.currentSizeId, JSON.stringify(indedxArr));
    },

    getAllIndex(sizeIdValue) {
      let indexArr = [];
      this.listSizeId.forEach((sizeId, index) => {
        if (sizeId == sizeIdValue) {
          indexArr.push(index);
        }
      });
      return indexArr;
    },

    filterByPlanterId() {
      let arrId = [];
      let arrName = [];
      this.listPlanterId.forEach((planterId, index) => {
        if (planterId == this.planterId) {
          arrId.push(this.listSizeId[index]);
          arrName.push(this.listSizeName[index]);
        }
      });
      this.getUniqueArray(arrId, arrName);
    },

    getUniqueArray(arrId, arrName) {
      this.uniqueIdArr = [...new Set(arrId)];
      this.uniqueNameArr = [...new Set(arrName)];
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