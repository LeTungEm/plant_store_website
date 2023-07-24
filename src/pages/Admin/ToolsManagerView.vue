<template>
  <div class="flex justify-between text-2xl">
    <WhiteButtonAtom
      @click="toCreatePlantForm"
      class="py-2 px-5 text-lg mb-1"
      :text="'Thêm mới'"
    />
    <div>Sắp xếp</div>
  </div>
  <ToolsTableOrganism
    @deleteProduct="deleteProduct"
    @changeToolsStatus="changeToolsStatus"
    :tools="tools"
  />
</template>

<script>
import WhiteButtonAtom from "@/components/atoms/button/WhiteButtonAtom.vue";
import ToolsTableOrganism from "@/components/organisms/ToolsTableOrganism.vue";
import ToolsService from "@/service/ToolsService";
import { mapActions } from "vuex";

export default {
  name: "ToolsManagerView",
  components: { WhiteButtonAtom, ToolsTableOrganism },
  data() {
    return {
      tools: [],
    };
  },
  methods: {
    ...mapActions(["showNotification"]),

    deleteProduct(index) {
      this.tools.splice(index, 1);
    },
    changeToolsStatus(toolIndex, status) {
      this.tools[toolIndex].status = status;
      this.showNotification([
        this.tools[toolIndex].name + " đã được " + (status == 1 ? "hiển thị." : "ẩn đi."),
        false,
      ]);
    },
    getAllTools() {
      ToolsService.getAll().then((res) => {
        this.tools = res.data;
      });
    },
    toCreatePlantForm() {
      // this.$router.push("/quan-ly/quan-ly-cay/0");
    },
  },
  created() {
    this.getAllTools();
  },
};
</script>

<style>
</style>