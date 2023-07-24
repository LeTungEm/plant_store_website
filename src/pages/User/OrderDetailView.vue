<template>
  <div class="px-5 xl:px-10">
    <div>
      <button
        @click="toOrderView"
        class="text-start font-bold bg-green-700 text-white text-lg py-2 px-4 mt-2 rounded-md"
      >
        Xem danh sách đơn hàng
      </button>
    </div>
    <div class="mt-2">
      <div
        class="flex flex-col-reverse md:flex-row md:border-t gap-5 xl:gap-10"
      >
        <div class="flex-[6]">
          <div class="my-5">
            <h1 class="font-bold text-xl my-3">Thông tin giao hàng</h1>
            <div
              v-for="keyName in Object.keys(orderInfo)"
              :key="keyName"
              class="mb-3"
            >
              <span class="text-gray-500">{{ transToVN(keyName) }}</span>
              <div
                class="border rounded-md w-full outline-0 focus:outline-2 focus:outline-green-700 py-1 lg:py-2 px-2 lg:px-4"
              >
                <div v-if="keyName == 'total'">
                  <PriceTextAtom
                    style="
                      color: rgb(75 85 99 / var(--tw-text-opacity)) !important;
                    "
                    :maxPrice="orderInfo.total"
                    :minPrice="orderInfo.total"
                  />
                </div>
                <div v-else-if="keyName == 'is_pay'">
                  <span class="text-amber-700">{{
                    orderInfo.is_pay == 1 ? "Đã thanh toán" : "Chưa thanh toán"
                  }}</span>
                </div>
                <div v-else-if="keyName == 'status'">
                  <span
                    v-bind:class="
                      orderInfo.status == 4 || orderInfo.status == 5
                        ? 'font-bold'
                        : ''
                    "
                    class="text-amber-700"
                    >{{
                      orderInfo.status == 1
                        ? "Đang chờ xử lý"
                        : orderInfo.status == 2
                        ? "Đã xác nhận"
                        : orderInfo.status == 3
                        ? "Đang giao"
                        : orderInfo.status == 4
                        ? "Giao thành công"
                        : "Đã hủy"
                    }}</span
                  >
                </div>
                <div v-else>
                  {{ orderInfo[keyName] }}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="flex-[4] md:border-l bg-gray-50 p-5 xl:px-10">
          <div>
            <product-simple-item-molecule
              v-for="orderDetail in orderDetails"
              class="[&>:first-child]:max-w-[50px] md:[&>:first-child]:max-w-[60px] mb-3"
              :key="orderDetail"
              :product="orderDetail"
            />
          </div>
          <hr class="my-5" />
          <div class="text-lg">
            <div class="flex justify-between items-center">
              <span>Tổng cộng:</span>
              <price-text-atom
                class="text-2xl"
                :maxPrice="getTotal()"
                :minPrice="getTotal()"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import OrderDetailService from "@/service/OrderDetailService";
import ProductSimpleItemMolecule from "@/components/molecules/ProductSimpleItemMolecule.vue";
import PriceTextAtom from "@/components/atoms/text/PriceTextAtom.vue";
import OrderService from "@/service/OrderService";

export default {
  name: "OrderDetailView",
  data() {
    return {
      orderDetails: [],
      orderInfo: {},
    };
  },
  methods: {
    transToVN(text) {
      let vnText = {
        receiver_info: "Thông tin người nhận",
        transport_fee: "Phí vận chuyển",
        is_pay: "Trạng thái thanh toán",
        status: "Trạng thái đơn hàng",
        note: "Ghi chú",
        create_date: "Ngày mua",
        payment_method: "Phương thức thanh toán",
        shipping: "Phương thức vận chuyển",
        name_receiver: "Tên người nhận",
        phone_receiver: "Số điện thoại người nhận",
        address_receiver: "Địa chỉ người nhận",
      };
      let arrKey = Object.keys(vnText);
      if (arrKey.includes(text.toLowerCase())) {
        return vnText[text.toLowerCase()];
      }
      return text;
    },
    getTotal() {
      let total = 0;
      this.orderDetails.map((detail) => {
        total += detail.total;
      });
      return total;
    },
    toOrderView() {
      this.$router.push("/don-hang");
    },
    getDetail() {
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
    this.getDetail();
    this.getOrderInfo();
  },
  components: { ProductSimpleItemMolecule, PriceTextAtom },
};
</script>

<style>
</style>