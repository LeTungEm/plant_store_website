<template>
  <div>
    <div class="flex justify-between">
      <div>Thêm mới</div>
      <div>Sắp xếp</div>
    </div>
    <PlantsTableOrganism :plants="plants" />
  </div>
</template>

<script>
import PlantsService from "@/service/PlantsService";
import PlantsTableOrganism from "@/components/organisms/PlantsTableOrganism.vue";

export default {
  components: { PlantsTableOrganism },
  name: "PlantsManagerView",
  data() {
    return {
      plants: [],
    };
  },
  methods: {
    getAllPlants() {
      PlantsService.getAll().then((res) => {
        this.plants = res.data;
      });
    },
  },
  created() {
    this.getAllPlants();
  },
};
</script>

<style>
</style>