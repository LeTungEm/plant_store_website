<template>
  <ul v-bind:class="status?'translate-x-0 shadow-lg z-[10]':'-translate-x-full'" class="text-xl h-full w-2/3 [&>*]:mr-10 hover:[&>*]:text-green-700 hover:[&>*]:italic fixed top-0 left-0 bg-white duration-500 xl:w-auto xl:h-auto xl:top-[unset] xl:translate-x-0 xl:left-[unset] xl:flex xl:relative">
    <li :onclick="closeMenu" class="py-1 ml-5 border-b xl:border-0"><router-link class="block" to="/">Trang chủ</router-link></li>
    <li :onclick="closeMenu" class="py-1 ml-5 border-b xl:border-0"><router-link class="block" to="/cua-hang/cay">Cây</router-link></li>
    <li :onclick="closeMenu" class="py-1 ml-5 border-b xl:border-0"><router-link class="block" to="/cua-hang/chau">Chậu</router-link></li>
    <li :onclick="closeMenu" class="py-1 ml-5 border-b xl:border-0"><router-link class="block" to="/gioi-thieu">Giới thiệu</router-link></li>
    <li :onclick="closeMenu" class="py-1 ml-5 border-b xl:border-0"><router-link class="block" to="/dich-vu">Dịch vụ</router-link></li>
  </ul>
</template>

<script>
export default {
  name: "MainMenuMolecule",
  props:{
    status: Boolean,
  },
  methods:{
    closeMenu(){
      this.$emit('closeMenu');
    }
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