<template>
  <div
    class="sticky top-24 h-[80vh] overflow-y-scroll scrollbar-hide border p-2 lg:p-5"
  >
    <ul class="text-lg cursor-pointer hover:[&>*]:text-green-700 pb-5">
      <li
        :onclick="() => changeCategory('')"
        v-bind:class="
          indexChildCategory == '' ? 'text-green-700 font-bold' : ''
        "
        key="all"
      >
        Tất cả
      </li>
      <li
        :onclick="() => changeCategory(category.category_id)"
        v-bind:class="
          indexChildCategory == category.category_id
            ? 'text-green-700 font-bold'
            : ''
        "
        v-for="category in listChildCategories"
        :key="category"
      >
        {{ category.name }}
      </li>
    </ul>
    <FilterColorBarMolecule
      @pickedColor="changePickedColor"
      :productType="productType"
    />
  </div>
</template>

<script>
import CategoriesService from "@/service/CategoriesService";
import FilterColorBarMolecule from "../molecules/FilterColorBarMolecule.vue";
import { mapActions, mapGetters } from "vuex";
export default {
  components: { FilterColorBarMolecule },
  name: "FilterBarOrganism",
  data() {
    return {
      listChildCategories: [],
      indexChildCategory: "",
    };
  },
  watch: {
    productType: function () {
      this.getAllChildCategories();
    },
  },
  props: {
    productType: String,
  },
  methods: {
    changeCategory(category_id) {
      this.indexChildCategory = category_id;
      this.$emit("changeCategory", category_id);
    },

    getAllChildCategories() {
      CategoriesService.getByParentSlug(this.productType).then((res) => {
        this.listChildCategories = res.data;
        this.changeCategory(this.getSpecialCategoryId());
        this.changeSpecialCategoryId("");
      });
    },

    ...mapGetters(["getSpecialCategoryId"]),

    ...mapActions(["changeSpecialCategoryId"]),

    changePickedColor(pickedColor) {
      this.$emit("pickedColor", pickedColor);
    },
  },
  created() {
    this.getAllChildCategories();
    // this.getSpecialCategoryId();
  },
};
</script>

<style>
</style>