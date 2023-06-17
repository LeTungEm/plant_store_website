<template>
  <SubNavBarOrganism />
  <NavBarOrganism />
  <router-view />
</template>

<script>
import SubNavBarOrganism from "./components/organisms/SubNavBarOrganism.vue";
import NavBarOrganism from "./components/organisms/NavBarOrganism.vue";
export default {
  name: "App",
  components: { NavBarOrganism, SubNavBarOrganism },
};
</script>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;

* {
  font-family: Playfair Display, serif;
}
</style>




