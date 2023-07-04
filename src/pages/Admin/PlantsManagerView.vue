<template>
  <div>
    <div class="flex justify-between text-2xl">
      <WhiteButtonAtom class="py-2 px-5 text-lg mb-1" :text="'Thêm mới'"/>
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
import WhiteButtonAtom from '@/components/atoms/button/WhiteButtonAtom.vue';

export default {
  components: { PlantsTableOrganism, WhiteButtonAtom },
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