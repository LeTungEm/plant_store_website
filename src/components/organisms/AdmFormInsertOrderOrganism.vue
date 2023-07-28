<template>
  <div>
    <div class="flex flex-col-reverse md:flex-row gap-5">
      <div class="md:w-1/2 border rounded-sm p-5 bg-gray-50">
        <div class="mb-5">
          <label class="text-gray-500" for="name_receiver"
            >Tên người nhận*</label
          >
          <input
            id="name_receiver"
            v-model="nameReceiver"
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
            v-model="phoneReceiver"
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
            v-model="addressReceiver"
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
            v-model="transportFee"
            class="border rounded-md w-full outline-0 focus:outline-2 focus:outline-green-700 py-1 lg:py-2 px-2 lg:px-4"
            type="number"
          />
        </div>
        <div class="mb-5">
          <label class="text-gray-500" for="is_pay"
            >Trạng thái thanh toán*</label
          >
          <select
            id="is_pay"
            v-model="isPay"
            class="border rounded-md w-full outline-0 focus:outline-2 focus:outline-green-700 py-1 lg:py-2 px-2 lg:px-4"
          >
            <option value="0">Chưa thanh toán</option>
            <option value="1">Đã thanh toán</option>
          </select>
        </div>
        <div class="mb-5">
          <label class="text-gray-500" for="note">ghi chú</label>
          <textarea
            id="note"
            v-model="note"
            rows="3"
            class="border rounded-md w-full outline-0 focus:outline-2 focus:outline-green-700 py-1 lg:py-2 px-2 lg:px-4"
            type="text"
          />
        </div>
        <div class="mb-5">
          <label class="text-gray-500" for="payment_method"
            >Phương thức thanh toán*</label
          >
          <select
            id="payment_method"
            v-model="paymentMethod"
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
        <div class="mb-5">
          <label class="text-gray-500" for="shipping_provider"
            >Phương thức vận chuyển*</label
          >
          <select
            id="shipping_provider"
            v-model="shippingProvider"
            class="border rounded-md w-full outline-0 focus:outline-2 focus:outline-green-700 py-1 lg:py-2 px-2 lg:px-4"
          >
            <option
              v-for="shippingProvider in ShippingProviders"
              :key="shippingProvider"
              :value="shippingProvider.shipping_provider_id"
            >
              {{ shippingProvider.name }}
            </option>
          </select>
        </div>
        <div class="mb-5">
          <label class="text-gray-500" for="status">Trạng thái</label>
          <select
            id="status"
            v-model="status"
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
          <label class="text-gray-500" for="total">Tổng giá sản phẩm*</label>
          <input
            id="total"
            v-model="total"
            class="border rounded-md w-full outline-0 focus:outline-2 focus:outline-green-700 py-1 lg:py-2 px-2 lg:px-4"
            type="number"
          />
        </div>
        <div class="mb-5">
          <label class="text-gray-500">Tổng cộng</label>
          <PriceTextAtom
            class="border rounded-md w-full outline-0 focus:outline-2 focus:outline-green-700 py-1 lg:py-2 px-2 lg:px-4"
            :maxPrice="total + transportFee"
            :minPrice="total + transportFee"
          />
        </div>
        <div class="mb-5">
          <GreenButtonAtom
            @click="createOrder"
            class="py-2 px-5 text-lg mb-1 float-right"
            :text="this.$route.params.orderId == 0 ? 'Tạo đơn' : 'Cập nhật'"
          />
        </div>
      </div>
      <div class="md:w-1/2 border rounded-sm p-5 bg-gray-50">
        <PlantSetPickerMolecule
          @changeListProduct="changeListProduct"
          @changeTotal="changeTotal"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import PriceTextAtom from "../atoms/text/PriceTextAtom.vue";
import GreenButtonAtom from "../atoms/button/GreenButtonAtom.vue";
import PlantSetPickerMolecule from "../molecules/PlantSetPickerMolecule.vue";
import OrderService from "@/service/OrderService";
import OrderDetailService from "@/service/OrderDetailService";
import PaymentMethodsService from "@/service/PaymentMethodsService";
import ShippingProvidersService from "@/service/ShippingProvidersService";
export default {
  name: "AdmFormInsertOrderOrganism",
  data() {
    return {
      paymentMethods: [],
      ShippingProviders: [],
      nameReceiver: "",
      phoneReceiver: "",
      addressReceiver: "",
      transportFee: 0,
      isPay: "",
      note: "",
      paymentMethod: "",
      shippingProvider: "",
      status: "",
      total: 0,
      listProduct: [],
    };
  },

  components: { GreenButtonAtom, PlantSetPickerMolecule, PriceTextAtom },
  methods: {
    ...mapActions(["showNotification"]),

    async getPaymentMethod() {
      await PaymentMethodsService.getAll().then((res) => {
        this.paymentMethods = res.data;
      });
    },

    async getShippingProvider() {
      await ShippingProvidersService.getAll().then((res) => {
        this.ShippingProviders = res.data;
      });
    },

    changeListProduct(listProduct) {
      this.listProduct = listProduct;
    },

    isFullField() {
      if (
        this.nameReceiver.trim() &&
        this.phoneReceiver.toString().trim() &&
        this.addressReceiver.trim() &&
        this.transportFee.toString() != "" &&
        this.isPay.toString() != "" &&
        this.paymentMethod.toString() != "" &&
        this.shippingProvider.toString() != "" &&
        this.status.toString() != ""
      ) {
        return true;
      }
      return false;
    },

    isOrderNull() {
      if (this.total == 0 || this.total == "") {
        return true;
      }
      return false;
    },

    isPhoneNumerNotCorrect() {
      if (
        this.phoneReceiver.toString().match(/[a-zA-Z]/) == null &&
        this.phoneReceiver.length >= 9
      )
        return false;
      return true;
    },

    createOrder() {
      if (this.isFullField() == false) {
        this.showNotification(["Hẫy điền đầy đủ thông tin !!!", true]);
      } else if (this.isOrderNull()) {
        this.showNotification(["Hãy chọn sản phẩm cho đơn hàng !!!", true]);
      } else if (this.isPhoneNumerNotCorrect()) {
        this.showNotification(["Số điện thoại chưa đúng !!!", true]);
      } else {
        if (this.$route.params.orderId == 0) this.insertOrder();
        else {
          this.updateOrder();
        }
      }
    },
    insertOrder() {
      OrderService.createOrder(
        this.status,
        this.transportFee,
        this.nameReceiver,
        this.phoneReceiver,
        this.addressReceiver,
        this.isPay,
        this.note,
        "",
        "",
        1,
        1,
        this.shippingProvider,
        this.paymentMethod,
        this.total
      )
        .then((res) => {
          if (res.data.message) {
            this.createOrderDetail(res.data.orderId);
          } else {
            this.showNotification(["Tạo đơn hàng thất bại !!!", true]);
          }
        })
        .catch(() => {
          this.showNotification(["Tạo đơn hàng thất bại !!!", true]);
        });
    },
    updateOrder() {
      OrderService.updateOrder(
        this.transportFee,
        this.nameReceiver,
        this.phoneReceiver,
        this.addressReceiver,
        this.isPay,
        this.status,
        this.note,
        this.shippingProvider,
        this.paymentMethod,
        this.total,
        this.$route.params.orderId
      ).then(res => {
        if(res.data.message){
          this.updateOrderDetail(this.$route.params.orderId);
        }
      })
    },
    createOrderDetail(orderId) {
      OrderDetailService.createOrderDetail(orderId, this.listProduct).then(
        (res) => {
          if (res.data.message) {
            this.showNotification(["Tạo đơn hàng thành công !!!", false]);
            this.$router.push("/quan-ly/quan-ly-don-hang");
          }
        }
      );
    },

    updateOrderDetail(orderId) {
      OrderDetailService.updateOrderDetail(orderId, this.listProduct).then(
        (res) => {
          if (res.data.message) {
            this.showNotification(["Sửa thành công !!!", false]);
          }
        }
      );
    },

    getInfoOfOrder() {
      let orderId = this.$route.params.orderId;
      if (orderId != 0) {
        OrderService.getByOrderId(orderId).then((res) => {
          let orderInfo = res.data.data;
          this.nameReceiver = orderInfo.name_receiver;
          this.phoneReceiver = orderInfo.phone_receiver;
          this.addressReceiver = orderInfo.address_receiver;
          this.transportFee = orderInfo.transport_fee;
          this.isPay = orderInfo.is_pay;
          this.note = orderInfo.note;
          this.paymentMethod = orderInfo.payment_method_id;
          this.shippingProvider = orderInfo.shipping_provider_id;
          this.status = orderInfo.status;
          this.total = orderInfo.total;
        });
      }
    },
    changeTotal(total) {
      this.total = total;
    },
  },
  async created() {
    await this.getPaymentMethod();
    await this.getShippingProvider();
    this.getInfoOfOrder();
  },
};
</script>

<style>
</style>