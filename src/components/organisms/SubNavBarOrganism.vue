<template>
  <div class="py-2 bg-green-950 text-white xl:flex xl:justify-between xl:px-20">
    <SubNavInfoMolecule/>
    <SocialMolecule/>
  </div>
</template>

<script>
import SocialMolecule from '../molecules/SocialMolecule.vue';
import SubNavInfoMolecule from '../molecules/SubNavInfoMolecule.vue';


export default {
  components: { SubNavInfoMolecule, SocialMolecule },
  name: "SubNavBarOrganism",

};
</script>

<style>
</style>