<template>
  <div v-if="status" class="flex-col gap-5 p-5 md:gap-10 md:p-10 relative">
    <OverViewUserProfileMolecule :name="name"/>
    <FormUpdateUserMolecule @changeName="changeName" />
  </div>
</template>

<script>
import OverViewUserProfileMolecule from "@/components/molecules/OverViewUserProfileMolecule.vue";
import FormUpdateUserMolecule from "@/components/molecules/FormUpdateUserMolecule.vue";
import AccountsService from "@/service/AccountsService";
import { decodeEmail } from "@/assets/js/quickFunction";
import { mapActions } from "vuex";

export default {
  name: "UserProfileView",
  data() {
    return {
      status: false,
      name: "",
    };
  },
  components: { OverViewUserProfileMolecule, FormUpdateUserMolecule },
  methods: {
    ...mapActions(["setUserLoginStatus"]),
    changeName(name) {
      this.name = name;
    },
    checkLogin() {
      let email = null;
      let userSession = sessionStorage.getItem("EMUR");
      let userLocal = localStorage.getItem("CEMURK");
      if (userSession) {
        email = userSession;
      } else if (userLocal) {
        email = userLocal;
        sessionStorage.setItem("EMUR", email);
      }
      if (email != null) {
        let emailDecode = decodeEmail(email);
        AccountsService.isEmailExists(emailDecode).then((res) => {
          if (res.data.message) {
            this.setUserLoginStatus(true);
            this.status = true;
          } else {
            this.setUserLoginStatus(false);
            this.status = false;
            this.$router.push("/nguoi-dung/dang-nhap");
          }
        });
      } else {
        this.setUserLoginStatus(false);
        this.status = false;
        this.$router.push("/nguoi-dung/dang-nhap");
      }
    },
  },
  created() {
    this.checkLogin();
  },
};
</script>

<style>
</style>
    FormUpdateUserMolecule