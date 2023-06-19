<template>
  <form
    v-bind:class="isLogin ? 'translate-x-[100%] absolute' : 'relative'"
    class="w-full duration-300 p-3 xl:p-5"
  >
    <div class="flex mb-5">
      <input
        placeholder="Tên"
        class="border w-full outline-0 focus:outline-2 focus:outline-green-700 py-1 lg:py-2 px-2 lg:px-4"
        type="text"
      />
    </div>
    <div class="flex mb-5">
      <select
        class="border w-full outline-0 focus:outline-2 focus:outline-green-700 py-1 lg:py-2 px-2 lg:px-4"
      >
        <option value="1">Nam</option>
        <option value="0">Nữ</option>
      </select>
    </div>
    <div class="flex mb-5">
      <select
        class="border w-full outline-0 focus:outline-2 focus:outline-green-700 py-1 lg:py-2 px-2 lg:px-4"
      >
        <option v-for="site in sites" :key="site.code" :value="site.name">
          {{ site.name }}
        </option>
      </select>
    </div>
  </form>
</template>

<script>
import SiteService from "@/service/SiteService";

export default {
  name: "RegisterFormMolecule",
  data() {
    return {
      sites: [],
    };
  },
  props: {
    isLogin: Boolean,
  },
  methods: {
    getAllSite() {
      SiteService.getAll().then((res) => {
        this.sites = res.data;
      });
    },
  },
  created() {
    this.getAllSite();
  },
};
</script>

<style>
</style>