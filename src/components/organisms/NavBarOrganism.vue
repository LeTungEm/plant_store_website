<template>
  <div
    class="flex sticky top-0 bg-white z-[10] justify-between py-2 px-5 shadow-lg md:py-5 lg:px-20"
  >
    <LogoAtom />
    <MainMenuMolecule @closeMenu="closeAllTab" :status="mainMenuStatus" />
    <div
      class="flex items-center text-base border-l border-gray-400 pl-5 lg:px-10 md:text-2xl"
    >
      <font-awesome-icon
        :onclick="changeMainMenuStatus"
        class="xl:hidden mr-5 md:mr-10"
        :icon="['fas', 'bars']"
      />
      <font-awesome-icon class="mr-5 md:mr-10" :icon="['fas', 'user']" />
      <font-awesome-icon
        :onclick="changeCartBarStatus"
        :icon="['fas', 'cart-shopping']"
      />
      <span class="mr-5 md:mr-10 text-sm md:text-lg"
        >({{ totalQuantityOfCart }})</span
      >
      <font-awesome-icon
        :onclick="changeSearchBarStatus"
        :icon="['fas', 'magnifying-glass']"
      />
    </div>
    <CartBarOrganisms
      @closeCartBar="changeCartBarStatus"
      @changeToTalQuantity="changeToTalQuantity"
      :cartchangeNumber="cartchangeNumber"
      :status="cartBarStatus"
    />
    <SearchBarOrganisms :status="searchBarStatus" />
    <div
      v-bind:class="
        mainMenuStatus || searchBarStatus || cartBarStatus ? '' : 'hidden'
      "
      :onclick="closeAllTab"
      class="fixed bg-black bg-opacity-70 inset-0 w-full h-full z-[1]"
    >
      &nbsp;
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import MainMenuMolecule from "../molecules/MainMenuMolecule.vue";
import LogoAtom from "../atoms/LogoAtom.vue";
import SearchBarOrganisms from "./SearchBarOrganisms.vue";
import CartBarOrganisms from "./CartBarOrganisms.vue";

export default {
  name: "NavBarOrganism",
  data() {
    return {
      mainMenuStatus: false,
      searchBarStatus: false,
      cartBarStatus: false,
      totalQuantityOfCart: 0,
    };
  },
  props: {
    cartchangeNumber: Number,
  },
  watch:{
    cartchangeNumber: function(){
      if(this.cartchangeNumber){
        this.cartBarStatus = true;
      }
    }
  },
  components: {
    FontAwesomeIcon,
    MainMenuMolecule,
    LogoAtom,
    SearchBarOrganisms,
    CartBarOrganisms,
  },
  methods: {
    changeMainMenuStatus() {
      this.mainMenuStatus = !this.mainMenuStatus;
    },
    changeSearchBarStatus() {
      this.searchBarStatus = !this.searchBarStatus;
    },
    changeCartBarStatus() {
      this.cartBarStatus = !this.cartBarStatus;
    },
    changeToTalQuantity(totalQuantity){
      this.totalQuantityOfCart = totalQuantity;
    },
    closeAllTab() {
      this.mainMenuStatus = false;
      this.searchBarStatus = false;
      this.cartBarStatus = false;
    },
  },
};
</script>

<style>
</style>