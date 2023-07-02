<template>
  <LeftSideBarMolecule :status="status">
    <h1 class="text-xl font-bold xl:text-3xl mb-5 xl:mb-10">TM_Plants</h1>
    <ul class="[&>*]:cursor-pointer [&>*]:text-lg xl:[&>*]:text-xl [&>*]:py-1">
      <li>
        <router-link @click="closeNavBar" to="/quan-ly/trang-chu">
          <font-awesome-icon class="inline-block" :icon="['fas', 'house']" />
          &nbsp;Trang chủ
        </router-link>
      </li>
      <li>
        <router-link @click="closeNavBar" to="/quan-ly/quan-ly-cay"
          ><font-awesome-icon :icon="['fas', 'seedling']" />
          &nbsp; Quản lý cây
        </router-link>
      </li>
    </ul>
  </LeftSideBarMolecule>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import LeftSideBarMolecule from "../molecules/LeftSideBarMolecule.vue";

export default {
  name: "AdminNavBarOrganism",
  props: {
    status: Boolean,
  },
  emits: ["closeNavBar"],
  methods: {
    closeNavBar() {
      if (this.getScreenWidth() < 1280) this.$emit("closeNavBar");
    },
    getScreenWidth() {
      return window.innerWidth;
    },
  },
  components: { LeftSideBarMolecule, FontAwesomeIcon },
};
</script>

<style>
</style>