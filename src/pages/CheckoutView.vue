<template>
  <div>
    <LogoAtom class="px-5 md:px-10 my-5" />
    <div v-if="status" class="flex flex-col-reverse md:flex-row md:border-t">
      <CheckoutUserOrganism class="px-5 md:px-10"/>
      <CheckoutProductOrganism />
    </div>
  </div>
</template>

<script>
import { decodeEmail } from "@/assets/js/quickFunction";
import AccountsService from "@/service/AccountsService";
import { mapActions } from "vuex";
import CheckoutUserOrganism from "@/components/organisms/CheckoutUserOrganism.vue";
import CheckoutProductOrganism from "@/components/organisms/CheckoutProductOrganism.vue";
import LogoAtom from "@/components/atoms/LogoAtom.vue";
export default {
  components: { CheckoutUserOrganism, CheckoutProductOrganism, LogoAtom },
  name: "CheckoutView",
  data() {
    return {
      status: false,
    };
  },
  methods: {
    ...mapActions(["setUserLoginStatus"]),
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