<template>
  <div class="flex-[4] md:border-l bg-gray-50 p-5 xl:px-10">
    <div>
      <CartItemMolecule
        class="[&>:first-child]:max-w-[50px] md:[&>:first-child]:max-w-[60px] mb-3"
        v-for="(product, index) in list"
        :key="product"
        :index="index"
        :product="product"
        :productType="product.type"
      />
    </div>
    <hr class="my-5" />
    <CouponFieldMolecule />
    <hr class="my-5" />
    <div class="text-lg">
      <div class="flex justify-between items-center mb-2">
        <span>Tổng tiền:</span>
        <PriceTextAtom :maxPrice="subTotal" :minPrice="subTotal" />
      </div>
      <div class="flex justify-between items-center">
        <span>Giảm giá:</span>
        <PriceTextAtom :maxPrice="discountPrice" :minPrice="discountPrice" />
      </div>
      <hr class="my-5" />
      <div class="flex justify-between items-center">
        <span>Tổng cộng:</span>
        <PriceTextAtom class="text-2xl" :maxPrice="total" :minPrice="total" />
      </div>
    </div>
  </div>
</template>

<script>
import { decodeEmail } from "@/assets/js/quickFunction";
import CartItemMolecule from "../molecules/CartItemMolecule.vue";
import CouponFieldMolecule from "../molecules/CouponFieldMolecule.vue";
import PriceTextAtom from "../atoms/text/PriceTextAtom.vue";
export default {
  name: "CheckoutProductOrganism",
  data() {
    return {
      list: [],
      discountPrice: 0,
      subTotal: 0,
      total: 0,
    };
  },
  props: {
    createOrderStatus: Boolean,
  },
  watch: {
    createOrderStatus: function () {
      if (this.createOrderStatus) {
        this.createOrderDetail();
      }
    },
  },
  emits:['createOrderDetail'],
  components: { CartItemMolecule, CouponFieldMolecule, PriceTextAtom },
  methods: {
    createOrderDetail() {
      // xet truong hop
      this.$emit("createOrderDetail", this.list, this.total);
    },
    getTotal() {
      this.total = this.subTotal - this.discountPrice;
    },
    getSubTotal() {
      let subTotal = 0;
      this.list.forEach((product) => {
        subTotal += product.price * product.quantity;
      });
      this.subTotal = subTotal;
      this.getTotal();
    },
    getAllFromCart() {
      let cartJson = localStorage.getItem("CTUR");
      let list = [];
      if (cartJson != null) {
        let jsonDecode = decodeEmail(cartJson);
        list = JSON.parse(jsonDecode);
      }
      this.list = list;
      this.getSubTotal();
    },
  },
  mounted() {
    this.getAllFromCart();
  },
};
</script>

<style>
</style>