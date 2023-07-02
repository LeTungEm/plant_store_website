<template>
  <div class="border rounded-lg p-4 w-full">
    <div class="flex justify-between items-center">
      <div>
        <h6 class="text-gray-400">{{ title }}</h6>
        <h6 class="text-xl font-bold">{{ toLocalString(number) }}</h6>
      </div>
      <div
        class="bg-orange-500 border rounded-full w-10 h-10 flex justify-center items-center"
      >
        <FontAwesomeIcon class="text-xl text-white" :icon="['fas', 'user']" />
      </div>
    </div>
    <div class="flex justify-between items-center mt-5">
      <span class="text-green-500">{{ compareToThePass() }}</span>
      <span class="italic text-gray-500">So với tháng vừa qua</span>
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export default {
  name: "OverMetricItemMolecule",
  props: {
    title: String,
    number: Number,
  },
  methods: {
    compareToThePass() {
      return "Tăng 34%";
    },
    toLocalString(number) {
      if (number) {
        return number.toLocaleString();
      }
      return "";
    },
  },
  components: { FontAwesomeIcon },
};
</script>

<style>
</style>