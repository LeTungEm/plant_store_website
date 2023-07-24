<template>
  <div>
    <div class="flex flex-col md:flex-row gap-5">
      <div class="md:w-1/2 border rounded-sm p-5 bg-gray-50">
        <div class="mb-5">
          <label class="text-gray-500" for="name_receiver"
            >Tên người nhận*</label
          >
          <input
            id="name_receiver"
            v-model="orderInfo.name_receiver"
            class="border rounded-md w-full outline-0 focus:outline-2 focus:outline-green-700 py-1 lg:py-2 px-2 lg:px-4"
            type="text"
          />
        </div>
        <div class="mb-5">
          <label class="text-gray-500" for="phone_receiver"
            >Số ĐT người nhận*</label
          >
          <input
            id="phone_receiver"
            v-model="orderInfo.phone_receiver"
            class="border rounded-md w-full outline-0 focus:outline-2 focus:outline-green-700 py-1 lg:py-2 px-2 lg:px-4"
            type="text"
          />
        </div>
        <div class="mb-5">
          <label class="text-gray-500" for="address_receiver"
            >Địa chỉ người nhận*</label
          >
          <input
            id="address_receiver"
            v-model="orderInfo.address_receiver"
            class="border rounded-md w-full outline-0 focus:outline-2 focus:outline-green-700 py-1 lg:py-2 px-2 lg:px-4"
            type="text"
          />
        </div>
        <div class="mb-5">
          <label class="text-gray-500" for="transport_fee"
            >Phí vận chuyển*</label
          >
          <input
            id="transport_fee"
            v-model="orderInfo.transport_fee"
            class="border rounded-md w-full outline-0 focus:outline-2 focus:outline-green-700 py-1 lg:py-2 px-2 lg:px-4"
            type="text"
          />
        </div>
        <div class="mb-5">
          <label class="text-gray-500" for="is_pay"
            >Trạng thái thanh toán*</label
          >
          <select
            id="is_pay"
            class="border rounded-md w-full outline-0 focus:outline-2 focus:outline-green-700 py-1 lg:py-2 px-2 lg:px-4"
          >
            <option value="1">Đã thanh toán</option>
            <option value="0">Chưa thanh toán</option>
          </select>
        </div>
        <div class="mb-5">
          <label class="text-gray-500" for="note">ghi chú</label>
          <textarea
            id="note"
            rows="3"
            class="border rounded-md w-full outline-0 focus:outline-2 focus:outline-green-700 py-1 lg:py-2 px-2 lg:px-4"
            type="text"
          />
        </div>
        <div class="mb-5">
          <label class="text-gray-500" for="is_pay"
            >Phương thức thanh toán*</label
          >
          <select
            id="is_pay"
            class="border rounded-md w-full outline-0 focus:outline-2 focus:outline-green-700 py-1 lg:py-2 px-2 lg:px-4"
          >
            <option value="1">Thanh toán khi nhận hàng</option>
          </select>
        </div>
        <div class="mb-5">
          <label class="text-gray-500" for="is_pay"
            >Phương thức vận chuyển*</label
          >
          <select
            id="is_pay"
            class="border rounded-md w-full outline-0 focus:outline-2 focus:outline-green-700 py-1 lg:py-2 px-2 lg:px-4"
          >
            <option value="1">Giao hàng tiết kiệm</option>
          </select>
        </div>
        <div class="mb-5">
          <label class="text-gray-500" for="status">Trạng thái</label>
          <select
            id="status"
            class="border rounded-md w-full outline-0 focus:outline-2 focus:outline-green-700 py-1 lg:py-2 px-2 lg:px-4"
          >
            <option value="1">Đang chờ xử lý</option>
            <option value="2">Đã xác nhận</option>
            <option value="3">Đang giao</option>
            <option value="4">Giao thành công</option>
            <option value="5">Đã hủy</option>
          </select>
        </div>
        <div class="mb-5">
          <label class="text-gray-500" for="total">Tổng cộng*</label>
          <input
            id="total"
            class="border rounded-md w-full outline-0 focus:outline-2 focus:outline-green-700 py-1 lg:py-2 px-2 lg:px-4"
            type="text"
          />
        </div>
      </div>
      <div class="md:w-1/2 border rounded-sm p-5 bg-gray-50">
        {{ orderDetails }}
      </div>
    </div>
    {{ orderInfo }}
  </div>
</template>
  
  <script>
import OrderDetailService from "@/service/OrderDetailService";
import OrderService from "@/service/OrderService";

export default {
  name: "AdmFormUpdateOrderOrganism",
  data() {
    return {
      orderDetails: [],
      orderInfo: {},
    };
  },
  methods: {
    getDetailByOrderId() {
      let orderId = this.$route.params.orderId;
      OrderDetailService.getByOrderId(orderId).then((res) => {
        this.orderDetails = res.data;
      });
    },
    getOrderInfo() {
      let orderId = this.$route.params.orderId;
      OrderService.getByOrderId(orderId).then((res) => {
        if (res.data.message) {
          this.orderInfo = res.data.data;
        }
      });
    },
  },
  created() {
    this.getDetailByOrderId();
    this.getOrderInfo();
  },
};
</script>
  
  <style>
</style>