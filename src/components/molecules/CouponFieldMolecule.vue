<template>
  <div class="flex justify-center items-center gap-x-5 w-full">
    <div class="flex-grow">
      <input
        v-model="data"
        v-bind:class="dataErr ? 'border-2 border-red-500' : 'focus:outline-2 focus:outline-green-700'"
        placeholder="Nhập mã giảm giá"
        class="border rounded-md outline-0 w-full py-2 px-4"
        type="text"
      />
    </div>
    <div>
      <div
        @click="chechCoupon"
        v-bind:class="
          data
            ? 'bg-green-700 hover:bg-green-800 cursor-pointer'
            : 'bg-gray-400 cursor-default'
        "
        class="text-white whitespace-nowrap font-bold p-2 rounded-md duration-500"
      >
        Thêm mã
      </div>
    </div>
  </div>
  <h1 v-if="dataErr" class="text-red-500">Không tìm thấy mã giảm giá</h1>
</template>

<script>
export default {
  name: "CouponFieldMolecule",
  data() {
    return {
      data: "",
      dataErr: false,
    };
  },
  watch:{
    data: function(){
      if(this.data == ''){
        this.dataErr = false;
      }
    }
  },
  methods: {
    chechCoupon() {
      if (this.data) {
        this.dataErr = true;
      }
    },
  },
};
</script>

<style>
</style>