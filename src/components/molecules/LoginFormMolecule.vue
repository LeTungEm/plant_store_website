<template>
  <form
    @submit.prevent="login"
    v-bind:class="
      isLogin ? 'relative z-[2]' : 'translate-x-[100%] absolute z-[1]'
    "
    class="w-full duration-300 p-3 md:p-5"
  >
    <div class="flex mb-5">
      <input
        v-model="email"
        @click="() => (emailErr = false)"
        v-bind:class="emailErr ? 'border border-red-700' : ''"
        placeholder="Email"
        class="border w-full outline-0 focus:outline-2 focus:outline-green-700 py-1 lg:py-2 px-2 lg:px-4"
        type="email"
      />
    </div>
    <div class="flex mb-5">
      <input
        autocomplete
        @click="() => (passWErr = false)"
        v-bind:class="passWErr ? 'border border-red-700' : ''"
        v-model="passW"
        placeholder="Mật khẩu"
        class="border w-full outline-0 focus:outline-2 focus:outline-green-700 py-1 lg:py-2 px-2 lg:px-4"
        :type="hiddenPassW ? 'password' : 'text'"
      />
      <span class="flex justify-center items-center ml-2">
        <font-awesome-icon
          @click="changePassWStatus"
          :icon="['fas', `${hiddenPassW ? 'eye-slash' : 'eye'}`]"
        />
      </span>
    </div>
    <div class="flex mb-5">
      <label for="remember">Ghi nhớ đăng nhập</label>&nbsp;
      <input
        id="remember"
        v-model="remember"
        class="border outline-0 focus:outline-2 focus:outline-green-700 py-1 lg:py-2 px-2 lg:px-4"
        type="checkbox"
      />
    </div>
    <GreenButtonAtom class="w-full py-3" :text="'Đăng nhập'" />
    <NotificationAtom
      :status="notificationStatus"
      :text="notificationMessage"
    />
  </form>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import GreenButtonAtom from "../atoms/button/GreenButtonAtom.vue";
import NotificationAtom from "../atoms/NotificationAtom.vue";
import AccountsService from "@/service/AccountsService";
import { mapActions } from 'vuex';

export default {
  name: "LoginFormMolecule",
  data() {
    return {
      notificationMessage: "",
      notificationStatus: false,
      hiddenPassW: true,
      email: "",
      emailErr: false,
      passW: "",
      passWErr: false,
      remember: false,
    };
  },
  props: {
    isLogin: Boolean,
    registeredEmail: String,
  },
  components: {
    FontAwesomeIcon,
    GreenButtonAtom,
    NotificationAtom,
  },
  watch: {
    registeredEmail: function () {
      this.email = this.registeredEmail;
    },
  },
  methods: {
    ...mapActions(['setUser']),
    showNotification(message) {
      this.notificationMessage = message;
      this.notificationStatus = !this.notificationStatus;
    },
    changePassWStatus() {
      this.hiddenPassW = !this.hiddenPassW;
    },
    isFullData() {
      let result = false;
      if (this.email && this.passW) {
        result = true;
      }
      if (this.email == "") this.emailErr = true;
      if (this.passW == "") this.passWErr = true;
      return result;
    },
    authenticate() {
      AccountsService.authenticate(this.email, this.passW).then((res) => {
        if (res.data.message) {
          this.setUser({id:res.data.userId, isLogin: true});
          this.$router.push('/');
        } else {
          this.showNotification("Thông tin đăng nhập sai !!!");
        }
      });
    },
    login() {
      if (this.isFullData()) {
        this.authenticate();
      } else {
        this.showNotification("Vui lòng điền đủ thông tin.");
      }
    },
  },
};
</script>

<style>
</style>