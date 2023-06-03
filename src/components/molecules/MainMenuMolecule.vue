<template>
  <ul v-bind:class="status?'translate-x-0 shadow-lg z-[10]':'-translate-x-full'" class="text-xl h-full w-2/3 [&>*]:mr-10 hover:[&>*]:text-green-700 hover:[&>*]:italic fixed top-0 left-0 bg-white duration-500 xl:w-auto xl:h-auto xl:top-[unset] xl:translate-x-0 xl:left-[unset] xl:flex xl:relative">
    <li class="py-1 ml-5 border-b xl:border-0"><router-link class="block" to="/">Trang chủ</router-link></li>
    <li class="py-1 ml-5 border-b xl:border-0"><router-link class="block" to="/shop">Cửa hàng</router-link></li>
    <li class="py-1 ml-5 border-b xl:border-0"><router-link class="block" to="/plant">Cây</router-link></li>
    <li class="py-1 ml-5 border-b xl:border-0"><router-link class="block" to="/planter">Chậu</router-link></li>
    <li class="py-1 ml-5 border-b xl:border-0"><router-link class="block" to="/plant_care">Chăm Cây</router-link></li>
  </ul>
</template>

<script>
export default {
  name: "MainMenuMolecule",
  props:{
    status: Boolean,
  },
  methods:{
  }
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