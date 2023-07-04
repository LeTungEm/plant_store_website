<template>
  <RightSidebarMolecule class="py-0" :status="status">
    <div class="flex justify-between items-center">
      <h1 class="sticky top-0 bg-white text-xl font-bold py-5 xl:text-3xl z-10">
        Giỏ hàng&nbsp;({{ totalQuantity }})
      </h1>
      <font-awesome-icon class="text-xl xl:text-3xl hover:text-green-700 cursor-pointer" :onclick="closeCartBar" :icon="['fas', 'xmark']" />
    </div>
    <div class="grid grid-cols-1 gap-5">
      <CartItemMolecule
        :quantityBarStatus="true"
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
    <div class="sticky bottom-0 w-full bg-white pb-5 mt-10 z-10">
      <GreenButtonAtom
        @click="checkout"
        class="w-full py-[4%] xl:text-2xl"
        :text="'Mua hàng'"
      />
    </div>
  </RightSidebarMolecule>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { mapGetters } from "vuex";
import GreenButtonAtom from "../atoms/button/GreenButtonAtom.vue";
import CartItemMolecule from "../molecules/CartItemMolecule.vue";
import RightSidebarMolecule from "../molecules/RightSidebarMolecule.vue";
import { decodeEmail, encodeEmail } from "@/assets/js/quickFunction";
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
  emits: ["closeCartBar", "changeToTalQuantity"],
  computed: {
    ...mapGetters(["getCartChangeNumber"]),
  },
  methods: {
    checkout() {
      if(this.totalQuantity > 0){
        this.$router.push("/giao-hang");
        this.closeCartBar();
      }else{
        alert('gio rong');
      }
    },
    closeCartBar() {
      this.$emit("closeCartBar");
    },

    writeToLocalStorage(list) {
      let jsonString = JSON.stringify(list);
      let jsonEncode = encodeEmail(jsonString);
      localStorage.setItem("CTUR", jsonEncode);
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
      let cartJson = localStorage.getItem("CTUR");
      let list = [];
      if (cartJson != null) {
        let jsonDecode = decodeEmail(cartJson);
        list = JSON.parse(jsonDecode);
      }
      this.list = list;
      this.setTotalQuantity();
    },
  },
  components: { RightSidebarMolecule, CartItemMolecule, GreenButtonAtom, FontAwesomeIcon },
  created() {
    this.getAllProduct();
  },
};
</script>

<style>
</style>