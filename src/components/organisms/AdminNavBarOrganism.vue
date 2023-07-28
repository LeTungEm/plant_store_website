<template>
  <LeftSideBarMolecule :status="status">
    <h1 class="text-xl font-bold xl:text-3xl mb-5 xl:mb-10">TM_Plants</h1>
    <ul
      class="[&>*]:cursor-pointer [&>*]:text-lg xl:[&>*]:text-xl [&>*]:py-1 [&>*]:whitespace-nowrap"
    >
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
      <li>
        <router-link @click="closeNavBar" to="/quan-ly/quan-ly-chau"
          ><font-awesome-icon
            class="group-hover:animate-bounce duration-1000"
            :icon="['fas', 'bucket']"
          />
          &nbsp; Quản lý chậu
        </router-link>
      </li>
      <li>
        <router-link @click="closeNavBar" to="/quan-ly/quan-ly-don-hang">
          <font-awesome-icon
            class="group-hover:animate-bounce duration-1000"
            :icon="['fas', 'wallet']"
          />

          &nbsp; Quản lý đơn hàng
        </router-link>
      </li>
      <li>
        <router-link @click="closeNavBar" to="/quan-ly/quan-ly-mau">
          <font-awesome-icon
            class="group-hover:animate-bounce duration-1000"
            :icon="['fas', 'palette']"
          />
          &nbsp; Quản lý màu sắc
        </router-link>
      </li>
      <li>
        <router-link @click="closeNavBar" to="/quan-ly/quan-ly-kich-co">
          <font-awesome-icon
            class="group-hover:animate-bounce duration-1000"
            :icon="['fas', 'ruler']"
          />
          &nbsp; Quản lý kích cỡ
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