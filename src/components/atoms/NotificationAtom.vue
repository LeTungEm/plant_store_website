<template>
  <div
    v-bind:class="seltStatus ? 'translate-x-0' : 'translate-x-full'"
    class="fixed z-10 top-[10%] font-bold w-5/6 xl:w-1/3 right-0 duration-300"
  >
    <div class="text-2xl underline px-7 py-3 text-white bg-red-700 rounded-t-md">Thông báo</div>
    <div class="text-lg px-7 py-3 border-2 rounded-b-md shadow-md bg-red-50">{{ text }}</div>
  </div>
</template>

<script>
export default {
  name: "NotificationAtom",
  data() {
    return {
      seltStatus: false,
    };
  },
  props: {
    text: String,
    status: Boolean,
  },
  watch: {
    status: function () {
      this.onpenInTime();
    },
  },
  methods: {
    onpenInTime() {
      let self = this;
      this.seltStatus = true;
      setTimeout(function () {
        self.seltStatus = false;
      }, 3000);
    },
  },
};
</script>

<style>
</style>