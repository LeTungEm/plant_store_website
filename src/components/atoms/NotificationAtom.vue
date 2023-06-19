<template>
  <div
    v-bind:class="seltStatus ? 'translate-x-0' : 'translate-x-full'"
    class="fixed z-10 top-[10%] text-white text-lg font-bold w-5/6 xl:w-1/3 right-0 px-10 py-5 duration-300 bg-red-700"
  >
  <div class="text-2xl underline mb-5">Thông báo</div>
    {{ text }}
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