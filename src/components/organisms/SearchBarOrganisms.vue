<template>
  <RightSidebarMolecule :status="status">
    <div class="flex justify-between items-center mb-5">
      <h1 class="text-xl font-bold xl:text-3xl">Tìm kiếm</h1>
      <font-awesome-icon class="text-xl xl:text-3xl hover:text-green-700 cursor-pointer" :onclick="closeSearchBar" :icon="['fas', 'xmark']" />
    </div>
    <SearchInputMolecule v-bind:class="search?'[&>:first-child]:text-green-700':''" :status="status" @change="changeValue" />
    <h1
      v-bind:class="
        plants.length == 0 && tools.length == 0 && search != '' ? '' : 'hidden'
      "
      class="mt-5 text-lg italic"
    >
      Không có kết quả nào...
    </h1>
    <h5
      v-if="plants.length > 0"
      class="flex justify-between italic text-base my-5 border-b md:text-2xl"
    >
      Cây trồng&nbsp;({{ plants.length }})
      <span :onclick="showAllResultsOfPlant" class="underline cursor-pointer"
        >Xem thêm</span
      >
    </h5>
    <div class="grid grid-cols-2 md:grid-cols-3 gap-3">
      <ProductCardMolecule
        @click="closeSearchBar"
        v-for="plant in sliceList(plants)"
        :key="plant.slug"
        :product="plant"
        :productType="'cay'"
      />
    </div>
    <h5
      v-if="tools.length > 0"
      class="flex justify-between italic text-base my-5 border-b md:text-2xl"
    >
      Chậu&nbsp;({{ tools.length }})
      <span :onclick="showAllResultsOfTool" class="underline cursor-pointer"
        >Xem thêm</span
      >
    </h5>
    <div class="grid grid-cols-2 md:grid-cols-3 gap-3">
      <ProductCardMolecule
        @click="closeSearchBar"
        v-for="tool in sliceList(tools)"
        :key="tool.slug"
        :product="tool"
        :productType="'chau'"
      />
    </div>
  </RightSidebarMolecule>
</template>

<script>
import PlantsService from "@/service/PlantsService";
import RightSidebarMolecule from "../molecules/RightSidebarMolecule.vue";
import SearchInputMolecule from "../molecules/SearchInputMolecule.vue";
import ToolsService from "@/service/ToolsService";
import ProductCardMolecule from "../molecules/ProductCardMolecule.vue";
import { PRODUCT_SHOW_IN_SEARCH } from "@/assets/js/config";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { mapActions } from "vuex";
export default {
  name: "SearchBarOrganisms",
  data() {
    return {
      plants: [],
      tools: [],
      search: "",
    };
  },
  props: {
    status: Boolean,
  },
  components: {
    RightSidebarMolecule,
    SearchInputMolecule,
    ProductCardMolecule,
    FontAwesomeIcon
  },
  emits: ["closeSearchBar"],
  methods: {
    closeSearchBar() {
      this.$emit("closeSearchBar");
    },
    changeValue(value) {
      this.search = value;
      this.searchPlants(value);
      this.searchTools(value);
    },
    searchPlants(value) {
      PlantsService.search(value).then((res) => {
        if (res.data) {
          this.plants = res.data;
        }
      });
    },
    searchTools(value) {
      ToolsService.search(value).then((res) => {
        if (res.data) {
          this.tools = res.data;
        }
      });
    },
    showAllResultsOfPlant() {
      this.closeSearchBar();
      this.changeListSearch(this.plants);
      this.$router.push(`/tim-kiem/cay/${this.search}`);
    },
    showAllResultsOfTool() {
      this.closeSearchBar();
      this.changeListSearch(this.tools);
      this.$router.push(`/tim-kiem/chau/${this.search}`);
    },
    sliceList(list) {
      return list.slice(0, PRODUCT_SHOW_IN_SEARCH);
    },
    ...mapActions(["changeListSearch"]),
  },
};
</script>

<style>
</style>