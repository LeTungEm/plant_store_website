<template>
  <ul
    v-bind:class="
      status ? 'translate-x-0 shadow-lg z-[10]' : '-translate-x-full'
    "
    class="text-lg h-full w-2/3 [&>*]:mr-10 hover:[&>li]:text-green-700 hover:[&>li]:italic fixed top-0 left-0 bg-white duration-500 xl:w-auto xl:h-auto xl:top-[unset] xl:translate-x-0 xl:left-[unset] xl:flex xl:flex-wrap xl:relative"
  >
    <div class="py-1 ml-5 mt-1 flex justify-between items-center xl:hidden">
      <h1 class="text-xl font-bold xl:text-3xl">Menu</h1>
      <font-awesome-icon
        class="hover:text-green-700 translate-x-7"
        :onclick="closeMenu"
        :icon="['fas', 'xmark']"
      />
    </div>
    <li :onclick="closeMenu" class="py-1 ml-5 border-b xl:border-0 group">
      <router-link class="block" to="/">
        <font-awesome-icon class="group-hover:animate-bounce duration-1000" :icon="['fas', 'house']" />
        &nbsp;Trang chủ
      </router-link>
    </li>
    <li :onclick="closeMenu" class="py-1 ml-5 border-b xl:border-0 group">
      <router-link class="block" to="/cua-hang/cay">
        <font-awesome-icon class="group-hover:animate-bounce duration-1000" :icon="['fas', 'seedling']" />
        &nbsp;Cây
      </router-link>
    </li>
    <li :onclick="closeMenu" class="py-1 ml-5 border-b xl:border-0 group">
      <router-link class="block" to="/cua-hang/chau">
        <font-awesome-icon class="group-hover:animate-bounce duration-1000" :icon="['fas', 'bucket']" />
        &nbsp;Chậu
      </router-link>
    </li>
    <li :onclick="closeMenu" class="py-1 ml-5 border-b xl:border-0 group">
      <router-link class="block" to="/gioi-thieu">
        <font-awesome-icon class="group-hover:animate-bounce duration-1000" :icon="['fas', 'newspaper']" />
        &nbsp;Giới thiệu
      </router-link>
    </li>
    <li :onclick="closeMenu" class="py-1 ml-5 border-b xl:border-0 group">
      <router-link class="block" to="/tin-tuc">
        <font-awesome-icon class="group-hover:animate-bounce duration-1000" :icon="['fas', 'compass-drafting']" />
        &nbsp;Tin tức
      </router-link>
    </li>
  </ul>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export default {
  name: "MainMenuMolecule",
  props: {
    status: Boolean,
  },
  emits: ["closeMenu"],
  methods: {
    closeMenu() {
      this.$emit("closeMenu");
    },
  },
  components: {
    FontAwesomeIcon,
  },
};
</script>

<style>
.router-link-exact-active {
  color: rgb(21 128 61);
  font-style: italic;
  font-weight: bolder;
  position: relative;
}
</style>