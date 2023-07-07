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
import PlantSetService from "@/service/PlantSetService";
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
    ...mapActions(["setUserLoginStatus"]),
    createOrder() {
      if (this.orderDetails.length > 0) {
        this.changeLoadingStatus(true);
        OrderService.createOrder(
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
              console.log("orderId", res.data.orderId);
            }
          })
          .catch((err) => {
            console.log(err);
            this.success++;
          })
          .finally(() => {
            this.success++;
            console.log("createOrder");
          });
        console.log("this.order", this.order);
        console.log("this.orderTotal", this.orderTotal);
        console.log("this.orderDetails", this.orderDetails);
      } else {
        alert("gio hang rong");
      }
    },
    createOrderDetail(orderId) {
      console.log("start createOrderDetail");
      OrderDetailService.createOrderDetail(orderId, this.orderDetails)
        .then((res) => {
          console.log(res.data);
          if (res.data.message) {
            localStorage.removeItem("CTUR");
            this.$router.push("/");
          }
        })
        .finally(() => {
          this.success++;
          console.log("createOrderDetail");
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
  async created() {
    let a = await PlantSetService.decreateQuantityWhenBuyPlant(2, 2);
    console.log(a);
  },
};
</script>

<style>
</style>