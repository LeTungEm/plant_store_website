<template>
  <div
    v-bind:class="this.$route.params.productType == 'chau' ? 'hidden' : ''"
    v-if="getLength() > 0"
  >
    <DetailPropertyHeaderAtom :text="'Chậu:'" />
    <div class="flex flex-wrap gap-5">
      <DetailOptionButtonAtom
        v-for="(planterId, index) in uniqueIdArr"
        @click="() => changePlanter(planterId)"
        :key="planterId"
        v-bind:class="currentId == planterId ? 'border-black font-bold' : ''"
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
  name: "DetailPlanterFilterMolecule",
  data() {
    return {
      currentId: null,
      uniqueIdArr: [],
      uniqueNameArr: [],
    };
  },
  props: {
    listId: Array,
    listName: Array,
  },
  methods: {
    getLength() {
      return this.listId.length;
    },

    setDefault() {
      if (this.getLength() > 0) {
        this.currentId = this.uniqueIdArr[0];
      }
      this.$emit("changePlanter", this.currentId);
    },

    changePlanter(planterId) {
      this.currentId = planterId;
      this.$emit("changePlanter", this.currentId);
    },

    getUniqueArray() {
      this.uniqueIdArr = [...new Set(this.listId)];
      this.uniqueNameArr = [...new Set(this.listName)];
    },
  },
  created() {
    this.getUniqueArray();
    this.setDefault();
  },
};
</script>
  
  <style>
</style>