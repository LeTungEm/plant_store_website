<template>
  <GoogleLogin :callback="callback" prompt/>
  <!-- <button @click="logoutAccount">log out</button> -->
</template>

<script>
import { decodeCredential } from "vue3-google-login";
// import { googleLogout } from "vue3-google-login"

export default {
  name: "GoogleSigninButtonAtom",
  methods: {
    callback(response) {
    //   console.log("Handle the response", response);
      const userData = decodeCredential(response.credential);
      console.log("Handle the userData", userData);
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