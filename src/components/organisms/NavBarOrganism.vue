<template>
  <div
    v-if="hiddenNavBar()"
    class="flex sticky top-0 bg-white z-[10] justify-between py-2 px-5 shadow-lg md:py-5 lg:px-20"
  >
    <LogoAtom />
    <MainMenuMolecule @closeMenu="closeAllTab" :status="mainMenuStatus" />
    <div
      class="flex items-center text-base border-l border-gray-400 pl-5 lg:px-10 md:text-2xl"
    >
      <font-awesome-icon
        :onclick="changeMainMenuStatus"
        class="xl:hidden mr-5 md:mr-10 cursor-pointer"
        :icon="['fas', 'bars']"
      />
      <font-awesome-icon
        @click="toLoginView"
        class="mr-5 md:mr-10 cursor-pointer"
        :icon="['fas', 'user']"
      />
      <font-awesome-icon
        class="cursor-pointer"
        :onclick="changeCartBarStatus"
        :icon="['fas', 'cart-shopping']"
      />
      <span class="mr-5 md:mr-10 text-sm md:text-lg">
        ({{ totalQuantityOfCart }})
      </span>
      <font-awesome-icon
        class="cursor-pointer"
        :onclick="changeSearchBarStatus"
        :icon="['fas', 'magnifying-glass']"
      />
    </div>
    <CartBarOrganisms
      @closeCartBar="changeCartBarStatus"
      @changeToTalQuantity="changeToTalQuantity"
      :status="cartBarStatus"
    />
    <SearchBarOrganisms
      @closeSearchBar="changeSearchBarStatus"
      :status="searchBarStatus"
    />
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
import { mapGetters } from "vuex";

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
  watch: {
    getCartChangeNumber() {
      this.cartBarStatus = true;
    },
  },
  components: {
    FontAwesomeIcon,
    MainMenuMolecule,
    LogoAtom,
    SearchBarOrganisms,
    CartBarOrganisms,
  },
  computed: {
    ...mapGetters(["getCartChangeNumber"]),
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
    changeToTalQuantity(totalQuantity) {
      this.totalQuantityOfCart = totalQuantity;
    },
    closeAllTab() {
      this.mainMenuStatus = false;
      this.searchBarStatus = false;
      this.cartBarStatus = false;
    },
    hiddenNavBar() {
      let result = true;
      let routerName = this.$route.name;
      if (routerName == "login") {
        result = false;
      }
      return result;
    },
    toLoginView() {
      let userJson = sessionStorage.getItem("user");
      let date = new Date();
      console.log(date.toLocaleDateString());
      console.log(new Date(date.toLocaleDateString()));
      if (userJson) {
        let user = JSON.parse(userJson);
        if (user.date) this.$router.push("/nguoi-dung/thong-tin");
      } else {
        this.$router.push("/nguoi-dung/thong-tin");
      }
    },
  },
};
</script>

<style>
</style>