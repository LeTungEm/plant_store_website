<template>
  <!-- Admin -->
  <AdminTemplete v-if="isAdmin()">
    <router-view />
  </AdminTemplete>

  <!-- User -->
  <div v-else>
    <SubNavBarOrganism />
    <NavBarOrganism />
    <router-view />
  </div>
  <NotificationAtom
    :isWarning="getIsNotificationWarning"
    :status="getNotificationStatus"
    :text="getNotificationMessage"
  />
</template>

<script>
import SubNavBarOrganism from "./components/organisms/SubNavBarOrganism.vue";
import NavBarOrganism from "./components/organisms/NavBarOrganism.vue";
import AdminTemplete from "./components/templates/AdminTemplete.vue";
import NotificationAtom from "./components/atoms/NotificationAtom.vue";
import { mapGetters } from "vuex";
// import { getEmail } from "./assets/js/quickFunction";
// import AccountsService from "./service/AccountsService";
export default {
  name: "App",
  components: {
    NavBarOrganism,
    SubNavBarOrganism,
    AdminTemplete,
    NotificationAtom,
  },
  computed: {
    ...mapGetters(["getNotificationStatus"]),
    ...mapGetters(["getNotificationMessage"]),
    ...mapGetters(["getIsNotificationWarning"]),
  },
  methods: {
    isAdmin() {
      if (this.$route.matched.some((route) => route.name == "admin")) {
        return true;
      }
      return false;
    },

    // checkLogin() {
    //   let email = getEmail();
    //   if (email != null) {
    //     AccountsService.isEmailExists(email).then((res) => {
    //       if (res.data.message) {
    //         if (res.data.role_id.toString() == "1") {
    //           this.$router.push("/quan-ly/trang-chu");
    //         }
    //       }
    //     });
    //   }
    // },
  },
  created() {
    // this.checkLogin();
  },
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




