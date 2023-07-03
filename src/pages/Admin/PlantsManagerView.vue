<template>
  <div>
    <div class="flex justify-between text-2xl">
      <div>Thêm mới</div>
      <div>Sắp xếp</div>
    </div>
    <PlantsTableOrganism
      @changePlantStatus="changePlantStatus"
      :plants="plants"
    />
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
    changePlantStatus(plantIndex, status) {
      this.plants[plantIndex].status = status;
    },
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