<template>
  <div>
    <LogoAtom class="px-5 md:px-10 my-5" />
    <div class="flex flex-col-reverse md:flex-row md:border-t">
      <CheckoutUserOrganism @createOrder="getOrderInfo" class="px-5 md:px-10" />
      <CheckoutProductOrganism
        @createOrderDetail="getOrderDetailInfo"
        :createOrderStatus="createOrderStatus"
      />
    </div>
    <LoadingAtom :status="loadingStatus" />
  </div>
</template>

<script>
import { mapActions } from "vuex";
import CheckoutUserOrganism from "@/components/organisms/CheckoutUserOrganism.vue";
import CheckoutProductOrganism from "@/components/organisms/CheckoutProductOrganism.vue";
import LogoAtom from "@/components/atoms/LogoAtom.vue";
import LoadingAtom from "@/components/atoms/LoadingAtom.vue";
import OrderService from "@/service/OrderService";
import OrderDetailService from "@/service/OrderDetailService";
export default {
  components: {
    CheckoutUserOrganism,
    CheckoutProductOrganism,
    LogoAtom,
    LoadingAtom,
  },
  name: "CheckoutView",
  data() {
    return {
      loadingStatus: false,
      createOrderStatus: false,
      createOrderDetailStatus: false,
      order: {},
      orderTotal: "",
      orderDetails: [],
      success: 0,
    };
  },
  watch: {
    createOrderDetailStatus: function () {
      if (
        this.createOrderStatus == true &&
        this.createOrderDetailStatus == true
      )
        this.createOrder();
    },
    success: function () {
      if (this.success == 2) {
        this.success = 0;
        this.changeLoadingStatus(false);
      }
    },
  },
  methods: {
    ...mapActions(["showNotification"]),

    ...mapActions(["setUserLoginStatus"]),
    createOrder() {
      if (this.orderDetails.length > 0) {
        this.changeLoadingStatus(true);
        OrderService.createOrder(
          1,
          0,
          this.order.name,
          this.order.phone,
          this.order.address,
          0,
          "",
          "",
          "",
          this.order.account_id,
          1,
          this.order.shippingProviderId,
          this.order.paymentMethodId,
          this.orderTotal
        )
          .then((res) => {
            if (res.data.message) {
              this.createOrderDetail(res.data.orderId);
            }
          })
          .catch((err) => {
            console.log(err);
            this.success++;
          })
          .finally(() => {
            this.success++;
          });
      } else {
        this.showNotification(["Hãy chọn thêm sản phẩm !!!", false]);
        this.$router.push("/cua-hang/cay");
      }
    },
    createOrderDetail(orderId) {
      OrderDetailService.createOrderDetail(orderId, this.orderDetails)
        .then((res) => {
          if (res.data.message) {
            localStorage.removeItem("CTUR");
            this.$router.push("/");
          }
        })
        .finally(() => {
          this.success++;
        });
    },
    getOrderInfo(orderInfo) {
      this.order = orderInfo;
      this.createOrderStatus = true;
    },
    getOrderDetailInfo(orderDetails, orderTotal) {
      this.orderDetails = orderDetails;
      this.orderTotal = orderTotal;
      this.createOrderDetailStatus = true;
    },
    changeLoadingStatus(status) {
      this.loadingStatus = status;
    },
  },
};
</script>

<style>
</style>