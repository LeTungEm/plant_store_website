<template>
  <div
    v-bind:class="seltStatus ? 'translate-x-0' : 'translate-x-full'"
    class="fixed z-10 top-[10%] font-bold w-5/6 xl:w-1/3 right-0 duration-300"
  >
    <div
      v-bind:class="isWarning ? 'bg-red-700' : 'bg-green-700'"
      class="text-base underline px-7 py-2 text-white rounded-t-md"
    >
      Thông báo
    </div>
    <div v-bind:class="isWarning ? 'bg-red-50' : 'bg-white'" class="text-lg px-7 py-3 border-2 rounded-b-md shadow-md">
      {{ text }}
    </div>
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
    isWarning: Boolean,
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