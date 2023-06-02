<template>
  <SubNavBarOrganism/>
  <NavBarOrganism/>

</template>

<script>
import NavBarOrganism from '@/components/organisms/NavBarOrganism.vue';
import SubNavBarOrganism from '@/components/organisms/SubNavBarOrganism.vue';



export default {
    name: "ShopView",
    data() {
        return {
            changeNumber: 0,
        };
    },
    components: { NavBarOrganism, SubNavBarOrganism }
};
</script>

<style>
</style>