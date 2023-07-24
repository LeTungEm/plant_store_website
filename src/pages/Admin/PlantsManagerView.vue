<template>
  <div>
    <div class="flex justify-between text-2xl">
      <WhiteButtonAtom
        @click="toCreatePlantForm"
        class="py-2 px-5 text-lg mb-1"
        :text="'Thêm mới'"
      />
      <div>Sắp xếp</div>
    </div>
    <PlantsTableOrganism
      @deleteProduct="deleteProduct"
      @changePlantStatus="changePlantStatus"
      :plants="plants"
    />
  </div>
</template>

<script>
import PlantsService from "@/service/PlantsService";
import PlantsTableOrganism from "@/components/organisms/PlantsTableOrganism.vue";
import WhiteButtonAtom from "@/components/atoms/button/WhiteButtonAtom.vue";
import { mapActions } from "vuex";

export default {
  components: { PlantsTableOrganism, WhiteButtonAtom },
  name: "PlantsManagerView",
  data() {
    return {
      plants: [],
    };
  },
  methods: {
    ...mapActions(["showNotification"]),

    deleteProduct(index) {
      this.plants.splice(index, 1);
    },
    changePlantStatus(plantIndex, status) {
      this.plants[plantIndex].status = status;
      this.showNotification([
        this.plants[plantIndex].name + " đã được " + (status == 1 ? "hiển thị." : "ẩn đi."),
        false,
      ]);
    },
    getAllPlants() {
      PlantsService.getAll().then((res) => {
        this.plants = res.data;
      });
    },
    toCreatePlantForm() {
      this.$router.push("/quan-ly/quan-ly-cay/0");
    },
  },
  created() {
    this.getAllPlants();
  },
};
</script>

<style>
</style>