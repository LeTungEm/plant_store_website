<template>
  <GoogleLogin :callback="callback" prompt />
  <!-- <button @click="logoutAccount">log out</button> -->
</template>

<script>
import { encodeEmail, getCurrentTime } from "@/assets/js/quickFunction";
import { decodeCredential } from "vue3-google-login";
import { mapActions } from "vuex";
import AccountsService from "@/service/AccountsService";
// import { googleLogout } from "vue3-google-login"

export default {
  name: "GoogleSigninButtonAtom",
  methods: {
    ...mapActions(["setUserLoginStatus"]),

    callback(response) {
      const userData = decodeCredential(response.credential);
      if (userData) {
        this.setUserLoginStatus(true);
        let encodeEmailData = encodeEmail(userData.email);
        sessionStorage.setItem("EMUR", encodeEmailData);
        localStorage.setItem("CEMURK", encodeEmailData);
        this.checkEmailExist(userData);
      }
    },
    checkEmailExist(userData) {
      AccountsService.isEmailExists(userData.email).then((res) => {
        if (res.data.message) {
          if (res.data.role_id.toString() == "1") {
            this.$router.push("/quan-ly/trang-chu");
          } else {
            this.$router.push("/");
          }
        } else {
          this.insertAccount(userData);
          this.$router.push("/");
        }
      });
    },
    insertAccount(userData) {
      let date = getCurrentTime();
      AccountsService.insert(
        "",
        1,
        date,
        "",
        userData.email,
        userData.name,
        userData.email,
        2
      );
    },
    // logoutAccount() {
    //   googleLogout();
    //   console.log("out");
    // },
  },
};
</script>

<style>
</style>