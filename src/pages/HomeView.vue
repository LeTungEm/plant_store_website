<template>
  <SubNavBarOrganism/>
  <NavBarOrganism/>
  <BannerOrganism/>
  <WelcomMolecule/>
  <HomeTemplate class="relative">
    <CollectionOrganism/>
    <NewProductsOrganism/>
    <BestSellerOrganisms/>
  </HomeTemplate>
</template>

<script>
import SubNavBarOrganism from '@/components/organisms/SubNavBarOrganism.vue';
import NavBarOrganism from '@/components/organisms/NavBarOrganism.vue';
import BannerOrganism from '@/components/organisms/BannerOrganism.vue';
import CollectionOrganism from '@/components/organisms/CollectionOrganism.vue';
import HomeTemplate from '@/components/templates/HomeTemplate.vue';
import WelcomMolecule from '@/components/molecules/WelcomMolecule.vue';
import NewProductsOrganism from '@/components/organisms/NewProductsOrganism.vue';
import BestSellerOrganisms from '@/components/organisms/BestSellerOrganisms.vue';


export default {
  name: "HomeView",
  data(){
    return {
      lishBook: [],
      bookTypes: [],
      authors: [],
      writedBy: [],
    };
  },
  components:{
    SubNavBarOrganism,
    NavBarOrganism,
    BannerOrganism,
    CollectionOrganism,
    HomeTemplate,
    WelcomMolecule,
    NewProductsOrganism,
    BestSellerOrganisms
},

};
</script>
