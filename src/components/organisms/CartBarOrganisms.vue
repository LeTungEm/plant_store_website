<template>
  <RightSidebarMolecule class="py-0" :status="status">
    <h1 class="sticky top-0 bg-white text-xl font-bold py-5 xl:text-3xl">
      Giỏ hàng&nbsp;({{ totalQuantity }})
    </h1>
    <div class="grid grid-cols-1 gap-5">
      <CartItemMolecule
        @closeCartBar="closeCartBar"
        @changeProductQuantity="changeProductQuantity"
        @removeProduct="removeProduct"
        class="max-w-full"
        v-for="(product, index) in list"
        :key="product"
        :index="index"
        :product="product"
        :productType="product.type"
      />
    </div>
    <div class="sticky bottom-0 w-full bg-white pb-5 mt-10">
      <GreenButtonAtom class="w-full py-[4%] xl:text-2xl" :text="'Mua hàng'"/>
    </div>
  </RightSidebarMolecule>
</template>

<script>
import { mapGetters } from 'vuex';
import GreenButtonAtom from "../atoms/button/GreenButtonAtom.vue";
import CartItemMolecule from "../molecules/CartItemMolecule.vue";
import RightSidebarMolecule from "../molecules/RightSidebarMolecule.vue";
export default {
  name: "CartBarOrganisms",
  data() {
    return {
      list: [],
      totalQuantity: 0,
    };
  },
  props: {
    status: Boolean,
  },
  watch: {
    getCartChangeNumber: function () {
      this.getAllProduct();
    },
  },
  emits:['closeCartBar', 'changeToTalQuantity'],
  computed: {
    ...mapGetters(["getCartChangeNumber"]),
  },
  methods: {
    closeCartBar(){
      this.$emit('closeCartBar');
    },

    writeToLocalStorage(list) {
      let jsonString = JSON.stringify(list);
      localStorage.setItem("cartJson", jsonString);
    },

    setTotalQuantity() {
      let newTotalQuantity = this.getTotalQuantity(this.list);
      this.$emit("changeToTalQuantity", newTotalQuantity);
      this.totalQuantity = newTotalQuantity;
    },

    removeProduct(index) {
      this.list.splice(index, 1);
      this.writeToLocalStorage(this.list);
      this.setTotalQuantity();
    },

    changeProductQuantity(index, quantity) {
      this.list[index].quantity = quantity;
      this.writeToLocalStorage(this.list);
      this.setTotalQuantity();
    },

    getTotalQuantity(list) {
      let totalQuantity = 0;
      list.forEach((product) => {
        totalQuantity += product.quantity;
      });
      return totalQuantity;
    },

    getAllProduct() {
      let cartJson = localStorage.getItem("cartJson");
      let list = [];
      if (cartJson != null) {
        list = JSON.parse(cartJson);
      }
      this.list = list;
      this.setTotalQuantity();
    },
  },
  components: { RightSidebarMolecule, CartItemMolecule, GreenButtonAtom },
  created() {
    this.getAllProduct();
  },
};
</script>

<style>
</style>