<template>
  <div class="overflow-y-scroll max-h-[85vh]">
    <div class="flex justify-between mb-5">
      <GreenButtonAtom
        @click="backToPreviousForm"
        class="py-3 px-5"
        :text="'Trở về'"
      />
      <GreenButtonAtom class="py-3 px-5" :text="'Lưu sản phẩm'" />
    </div>
    <h1 class="text-2xl">Các biến thể</h1>
    <div class="border">form</div>
  </div>
</template>

<script>
import GreenButtonAtom from "../atoms/button/GreenButtonAtom.vue";

export default {
  name: "PlantSetFormMolecule",
  components: { GreenButtonAtom },
  emits: ["backToPreviousForm"],
  methods: {
    backToPreviousForm() {
      this.$emit("backToPreviousForm");
    },
  },
};
</script>

<style>
</style>