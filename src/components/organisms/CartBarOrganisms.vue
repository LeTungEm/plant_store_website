<template>
  <RightSidebarMolecule class="py-0" :status="status">
    <div class="flex justify-between items-center">
      <h1 class="sticky top-0 bg-white text-xl font-bold py-5 xl:text-3xl z-10">
        Giỏ hàng&nbsp;({{ totalQuantity }})
      </h1>
      <font-awesome-icon
        class="text-xl xl:text-3xl hover:text-green-700 cursor-pointer"
        :onclick="closeCartBar"
        :icon="['fas', 'xmark']"
      />
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
import { mapActions, mapGetters } from "vuex";
import GreenButtonAtom from "../atoms/button/GreenButtonAtom.vue";
import CartItemMolecule from "../molecules/CartItemMolecule.vue";
import RightSidebarMolecule from "../molecules/RightSidebarMolecule.vue";
import { decodeEmail, encodeEmail } from "@/assets/js/quickFunction";
import PlantSetService from "@/service/PlantSetService";
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
    ...mapActions(["showNotification"]),
    async checkout() {
      if (this.totalQuantity > 0) {
        await this.checkProductQuantityIsAvailable();
        this.$router.push("/giao-hang");
        this.closeCartBar();
      } else {
        this.showNotification(["Giỏ hàng rỗng", false]);
      }
    },
    closeCartBar() {
      this.$emit("closeCartBar");
    },

    async checkProductQuantityIsAvailable() {
      let cartJson = localStorage.getItem("CTUR");
      let list = [];
      if (cartJson != null) {
        let jsonDecode = decodeEmail(cartJson);
        list = JSON.parse(jsonDecode);
        let plantSetIdArr = this.getListPlantSetId(list);
        await PlantSetService.getAvailableQuantity(plantSetIdArr).then(
          (res) => {
            console.log("available_quantity", res.data);
            let newListProduct = this.setQuantityToAvailable(res.data, list);
            this.writeToLocalStorage(newListProduct);
            let newTotalQuantity = this.getTotalQuantity(newListProduct);
            if (this.totalQuantity != newTotalQuantity) {
              // thong bao thay doi gio hang
            }
          }
        );
      }
    },

    setQuantityToAvailable(listAvailable, listProduct) {
      let newListProduct = [];
      listAvailable.forEach((availableItem) => {
        let resultProduct = this.getAvailableProduct(
          availableItem,
          listProduct
        );
        if (resultProduct != null) {
          newListProduct.push(resultProduct);
        }
      });
      return newListProduct;
    },

    getAvailableProduct(availableItem, listProduct) {
      let result = null;
      listProduct.forEach((product) => {
        if (product.plantSetId == availableItem.plant_set_id) {
          result = product;
          if (availableItem.available_quantity < 1) {
            result = null;
          } else if (result.quantity > availableItem.available_quantity) {
            result.quantity = availableItem.available_quantity;
            result.maximumQuantity = availableItem.available_quantity;
          }
        }
      });
      return result;
    },

    getListPlantSetId(list) {
      let plantSetIdArr = [];
      list.forEach((plantSet) => {
        plantSetIdArr.push(plantSet.plantSetId);
      });
      return plantSetIdArr;
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
  components: {
    RightSidebarMolecule,
    CartItemMolecule,
    GreenButtonAtom,
    FontAwesomeIcon,
  },
  created() {
    this.getAllProduct();
  },
};
</script>

<style>
</style>