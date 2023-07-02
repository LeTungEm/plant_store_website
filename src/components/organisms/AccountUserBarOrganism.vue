<template>
  <RightSidebarMolecule :status="status">
    <div class="flex justify-between items-center mb-5">
      <h1 class="text-xl font-bold xl:text-3xl">Tài khoản</h1>
      <font-awesome-icon
        class="text-xl xl:text-3xl hover:text-green-700 cursor-pointer"
        :onclick="closeAccountUserBar"
        :icon="['fas', 'xmark']"
      />
    </div>
    <ul class="[&>*]:cursor-pointer [&>*]:text-lg [&>*]:py-1 [&>*]:border-b hover:[&>*]:text-green-700">
      <li @click="closeAccountUserBar">
        <router-link to="/nguoi-dung/thong-tin">Thông tin</router-link>
      </li>
      <li @click="closeAccountUserBar">
        <router-link to="/">Đơn hàng</router-link>
      </li>
      <li @click="logout">Đăng xuất</li>
    </ul>
  </RightSidebarMolecule>
</template>

<script>
import { googleLogout } from "vue3-google-login";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import RightSidebarMolecule from "../molecules/RightSidebarMolecule.vue";
import { mapActions } from "vuex";

export default {
  name: "AccountUserBarOrganism",
  props: {
    status: Boolean,
  },
  emits: ["closeAccountUserBar"],
  methods: {
    ...mapActions(["setUserLoginStatus"]),
    closeAccountUserBar() {
      this.$emit("closeAccountUserBar");
    },
    logout() {
      this.setUserLoginStatus(false);
      sessionStorage.removeItem("EMUR");
      localStorage.removeItem("CEMURK");
      googleLogout();
      this.closeAccountUserBar();
      this.$router.push("/");
    },
  },
  components: { RightSidebarMolecule, FontAwesomeIcon },
};
</script>

<style>
</style>