<template>
  <div
    v-bind:class="filterBarMobieStatus ? '' : 'hidden'"
    class="fixed z-[12] top-0 left-0 right-0 bottom-0 bg-white h-[100vh] border p-5 xl:hidden"
  >
    <div class="w-full h-full overflow-y-scroll">
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
    <WhiteButtonAtom
      :onclick="() => this.$emit('closeFilterBarMobie')"
      class="mt-10 absolute bottom-5 right-5 left-5"
      :text="'Lọc sản phẩm'"
    />
  </div>
</template>
  
  <script>
import CategoriesService from "@/service/CategoriesService";
import FilterColorBarMolecule from "../molecules/FilterColorBarMolecule.vue";
import WhiteButtonAtom from "../atoms/button/WhiteButtonAtom.vue";
export default {
  components: { FilterColorBarMolecule, WhiteButtonAtom },
  name: "FilterBarMobieOrganism",
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
    filterBarMobieStatus: Boolean,
  },
  methods: {
    changeCategory(category_id) {
      this.indexChildCategory = category_id;
      this.$emit("changeCategory", category_id);
    },

    getAllChildCategories() {
      CategoriesService.getByParentId(this.productType).then((res) => {
        this.listChildCategories = res.data;
        this.indexChildCategory = "";
      });
    },

    changePickedColor(pickedColor) {
      this.$emit("pickedColor", pickedColor);
    },
  },
  created() {
    this.getAllChildCategories();
  },
};
</script>
  
  <style>
</style>