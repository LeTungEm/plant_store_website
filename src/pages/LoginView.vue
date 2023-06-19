<template>
  <div class="flex justify-center items-center w-[100vw] h-[100vh] p-5">
    <div class="flex flex-col justify-center w-full md:w-2/3">
      <LogoAtom class="inline-block mx-auto my-5 xl:my-10" />
      <div class="text-center text-lg my-2 xl:text-xl">
        <span v-bind:class="isLogin ? 'text-green-700 font-bold' : ''" @click="changeLoginStatus">Đăng nhập</span>&nbsp;|&nbsp;
        <span v-bind:class="isLogin ? '' : 'text-green-700 font-bold'" @click="changeLoginStatus">Đăng ký</span>
      </div>
      <div class="flex relative w-full overflow-hidden bg-gray-100 border rounded-sm">
        <LoginFormMolecule :isLogin="isLogin"/>
        <RegisterFormMolecule :isLogin="isLogin"/>       
      </div>
      <div class="flex justify-center mt-5 xl:mt-10">
        <GoogleSigninButtonAtom/>
      </div>
    </div>
  </div>
</template>

<script>
import LogoAtom from "@/components/atoms/LogoAtom.vue";
import LoginFormMolecule from '@/components/molecules/LoginFormMolecule.vue';
import RegisterFormMolecule from '@/components/molecules/RegisterFormMolecule.vue';
import GoogleSigninButtonAtom from '@/components/atoms/button/GoogleSigninButtonAtom.vue';
export default {
  name: "LoginView",
  data() {
    return {
      isLogin: true,
    };
  },
  components: { LogoAtom, LoginFormMolecule, RegisterFormMolecule, GoogleSigninButtonAtom },
  methods: {
    changeLoginStatus() {
      this.isLogin = !this.isLogin;
    },
  },
};
</script>

<style>
</style>