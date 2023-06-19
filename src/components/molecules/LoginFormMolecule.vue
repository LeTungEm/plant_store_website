<template>
  <form
    @submit.prevent="'/'"
    v-bind:class="isLogin ? 'relative' : 'translate-x-[100%] absolute'"
    class="w-full duration-300 p-3 md:p-5"
  >
    <div class="flex mb-5">
      <input
        placeholder="Số điện thoại"
        class="border w-full outline-0 focus:outline-2 focus:outline-green-700 py-1 lg:py-2 px-2 lg:px-4"
        type="text"
      />
    </div>
    <div class="flex mb-5">
      <input
        autocomplete
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
    <GreenButtonAtom class="w-full py-3" :text="'Đăng nhập'" />
  </form>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import GreenButtonAtom from "../atoms/button/GreenButtonAtom.vue";

export default {
  name: "LoginFormMolecule",
  data() {
    return {
      hiddenPassW: true,
    };
  },
  props: {
    isLogin: Boolean,
  },
  components: {
    FontAwesomeIcon,
    GreenButtonAtom,
  },
  methods: {
    changePassWStatus() {
      this.hiddenPassW = !this.hiddenPassW;
    },
  },
};
</script>

<style>
</style>