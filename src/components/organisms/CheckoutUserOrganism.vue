<template>
  <div class="flex-[6]">
    <div class="my-5">
      <h1 class="font-bold text-xl my-3">Thông tin giao hàng</h1>
      <div class="mb-3">
        <label class="text-gray-500" for="nameShipping">Tên người nhận</label>
        <input
          id="nameShipping"
          v-model="user.name"
          class="border rounded-md w-full outline-0 focus:outline-2 focus:outline-green-700 py-1 lg:py-2 px-2 lg:px-4"
          type="text"
        />
      </div>
      <div class="mb-3">
        <label class="text-gray-500" for="phoneShipping">Số điện thoại</label>
        <input
          id="phoneShipping"
          v-model="user.phone"
          class="border rounded-md w-full outline-0 focus:outline-2 focus:outline-green-700 py-1 lg:py-2 px-2 lg:px-4"
          type="text"
        />
      </div>
      <div class="mb-3">
        <label class="text-gray-500" for="addressShipping"
          >Địa chỉ nhận hàng</label
        >
        <input
          id="addressShipping"
          v-model="user.address"
          class="border rounded-md w-full outline-0 focus:outline-2 focus:outline-green-700 py-1 lg:py-2 px-2 lg:px-4"
          type="text"
        />
      </div>
      <div class="mb-3">
        <label class="text-gray-500" for="shippingMethod"
          >Phương thức thanh toán</label
        >
        <select
          id="shippingMethod"
          class="border rounded-md w-full outline-0 focus:outline-2 focus:outline-green-700 py-1 lg:py-2 px-2 lg:px-4"
        >
          <option
            v-for="paymentMethod in paymentMethods"
            :key="paymentMethod"
            :value="paymentMethod.payment_method_id"
          >
            {{ paymentMethod.name }}
          </option>
        </select>
      </div>
    </div>
  </div>
</template>

<script>
import { decodeEmail } from "@/assets/js/quickFunction";
import PaymentMethodsService from "@/service/PaymentMethodsService";
import AccountsService from "@/service/AccountsService";

export default {
  name: "CheckoutUserOrganism",
  data() {
    return {
      paymentMethods: [],
      user: {},
    };
  },
  methods: {
    getPaymentMethods() {
      PaymentMethodsService.getAll().then((res) => {
        if (res.data) {
          this.paymentMethods = res.data;
        }
      });
    },
    getUserInfo() {
      let encodeEmail = sessionStorage.getItem("EMUR");
      let email = decodeEmail(encodeEmail);
      AccountsService.detailUser(email).then((res) => {
        if (res.data) {
          this.user = res.data;
        }
      });
    },
  },
  created() {
    this.getUserInfo();
    this.getPaymentMethods();
  },
};
</script>

<style>
</style>