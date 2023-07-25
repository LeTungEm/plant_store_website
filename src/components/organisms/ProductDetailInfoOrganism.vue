<template>
  <div class="flex-1 px-5">
    <h1 class="text-3xl sm:text-4xl font-semibold pb-5">{{ product.name }}</h1>
    <div class="text-2xl flex">
      <PriceTextAtom
        :maxPrice="this.currentPrice"
        :minPrice="this.currentPrice"
      />&nbsp;
      <PriceTextWLineThroughAtom
        v-if="this.isSale"
        :maxPrice="this.oldPrice"
        :minPrice="this.oldPrice"
      />
    </div>
    <hr />
    <PlanterSelectionOrganism
      @changePlanter="changePlanter"
      @changeSize="changeSize"
      @changeColor="changeColor"
      :planterIds="product.toolId"
      :planterNames="product.tool"
      :sizeIds="product.toolSizeId"
      :sizeNames="product.size"
      :colorIds="product.toolColorId"
      :colorNames="product.color"
      :colorCodes="product.colorCode"
    />

    <div class="flex flex-wrap my-5 gap-5">
      <GreenButtonAtom
        :onclick="addToCart"
        class="flex-[7] w-full py-1 md:py-2 xl:py-4 text-xs md:text-lg"
        :text="'Thêm vào giỏ hàng'"
      />
      <QuantityBarMolecule
        @changeProductQuantity="changeProductQuantity"
        :maximun="getMaximumQuantity()"
      />
    </div>
    <DropTextMolecule
      v-if="product.description"
      :defaultStatus="true"
      :title="'Mô tả'"
      class="mt-5"
    >
      <p>{{ product.description }}</p>
    </DropTextMolecule>
    <div v-if="product.type == 'cay'">
      <DropTextMolecule
        v-if="product.funFact"
        :title="'Đặc điểm thú vị'"
        class="mt-5"
      >
        <p>{{ product.funFact }}</p>
      </DropTextMolecule>
      <DropTextMolecule v-if="product.water" :title="'Nước'" class="mt-5">
        <p>{{ product.water }}</p>
      </DropTextMolecule>
      <DropTextMolecule v-if="product.light" :title="'Ánh sáng'" class="mt-5">
        <p>{{ product.light }}</p>
      </DropTextMolecule>
      <DropTextMolecule
        v-if="product.petFriendly"
        :title="'Động vật'"
        class="mt-5"
      >
        <p>{{ product.petFriendly }}</p>
      </DropTextMolecule>
      <DropTextMolecule
        v-if="product.sadPlantSigns"
        :title="'Dấu hiệu không tốt'"
        class="mt-5"
      >
        <p>{{ product.sadPlantSigns }}</p>
      </DropTextMolecule>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import GreenButtonAtom from "../atoms/button/GreenButtonAtom.vue";
import PriceTextAtom from "../atoms/text/PriceTextAtom.vue";
import PriceTextWLineThroughAtom from "../atoms/text/PriceTextWLineThroughAtom.vue";
import DropTextMolecule from "../molecules/DropTextMolecule.vue";
import QuantityBarMolecule from "../molecules/QuantityBarMolecule.vue";
import PlanterSelectionOrganism from "./PlanterSelectionOrganism.vue";
import { decodeEmail, encodeEmail } from "@/assets/js/quickFunction";
import { MAXIMUM_QUANTITY_OF_EACH_PRODUCT_IN_CART } from "@/assets/js/config";

export default {
  name: "ProductDetailInfoOrganism",
  data() {
    return {
      currentToolId: null,
      currentToolQuantity: 0,
      currentSizeId: null,
      currentColorId: null,
      currentPrice: 0,
      productQuantity: 1,
      isSale: null,
      oldPrice: 0,
      currentIndex: null,
    };
  },
  props: {
    product: Object,
  },
  watch: {
    currentPlanterId: function () {
      this.getIndex();
    },
    currentToolId: function () {
      this.getIndex();
    },
    currentSizeId: function () {
      this.getIndex();
    },
    currentColorId: function () {
      this.getIndex();
    },
    currentIndex: function () {
      this.$emit("changeCurrentIndex", this.currentIndex);
    },
  },
  emits: ["changeCurrentIndex"],
  components: {
    PriceTextAtom,
    PriceTextWLineThroughAtom,
    PlanterSelectionOrganism,
    GreenButtonAtom,
    QuantityBarMolecule,
    DropTextMolecule,
  },
  methods: {
    ...mapActions(["changeCartChangeNumber"]),
    ...mapActions(["showNotification"]),


    changePlanter(planterId) {
      this.currentToolId = planterId;
    },

    changeSize(sizeId) {
      this.currentSizeId = sizeId;
    },

    changeColor(colorId) {
      this.currentColorId = colorId;
    },

    changeProductQuantity(quantity) {
      this.productQuantity = quantity;
    },

    getIndex() {
      this.product.toolId.forEach((element, index) => {
        if (
          this.product.toolId[index] == this.currentToolId &&
          this.product.toolColorId[index] == this.currentColorId &&
          this.product.toolSizeId[index] == this.currentSizeId
        ) {
          this.currentIndex = index;
          this.getprice(index);
        }
      });
    },

    getMaximumQuantity() {
      let maximumQuantity = 0;
      if (this.product.type == "cay") {
        maximumQuantity = Math.min(
          this.product.plantQuantity,
          this.currentToolQuantity
        );
      } else {
        maximumQuantity = this.currentToolQuantity;
      }
      return maximumQuantity;
    },

    getprice(index) {
      let isSale = this.product.isSale[index];
      this.isSale = isSale;
      this.currentToolQuantity = this.product.toolQuantity[index];
      if (isSale == 1) {
        this.currentPrice = this.product.salePrice[index];
        this.oldPrice = this.product.price[index];
      } else {
        this.currentPrice = this.product.price[index];
        this.oldPrice = 0;
      }
    },

    findProductInCart(listProduct, newProduct) {
      let listIndex = null;
      listProduct.forEach((product, index) => {
        if (product.plantSetId == newProduct.plantSetId) {
          listIndex = index;
        }
      });
      return listIndex;
    },

    createCartObject() {
      return {
        type: this.product.type,
        slug: this.product.slug,
        maximumQuantity: this.getMaximumQuantity(),
        plantSetId: this.product.plantSetId[this.currentIndex],
        price: this.currentPrice,
        quantity: this.productQuantity,
        image: this.product.image[this.currentIndex],
        name: this.product.name,
        toolName: this.product.tool[this.currentIndex],
        size: this.product.size[this.currentIndex],
        color: this.product.color[this.currentIndex],
      };
    },

    addToCart() {
      let cartJson = localStorage.getItem("CTUR");
      let list = [];
      let productItem = this.createCartObject();
      if (cartJson != null) {
        let jsonDecode = decodeEmail(cartJson);
        list = JSON.parse(jsonDecode);
        let productPosition = this.findProductInCart(list, productItem);
        if (productPosition != null) {
          list = this.updateProductQuantityInCart(
            list,
            productPosition,
            productItem
          );
        } else {
          list.push(productItem);
          this.changeCartChangeNumber(1);
        }
      } else {
        list.push(productItem);
        this.changeCartChangeNumber(1);
      }
      let jsonString = JSON.stringify(list);
      let jsonEncode = encodeEmail(jsonString);
      localStorage.setItem("CTUR", jsonEncode);
    },

    updateProductQuantityInCart(list, productPosition, productItem) {
      let newList = list;
      let maximumStatus = this.isMaxQuantityOfProduct(
        newList[productPosition].quantity,
        productItem.quantity,
        newList[productPosition].maximumQuantity
      );
      if (maximumStatus) {
        this.showNotification(['Đã đạt số lượng tối đa của sản phẩm.', false]);
      } else {
        newList[productPosition].quantity += productItem.quantity;
        this.changeCartChangeNumber(1);
      }
      return newList;
    },

    isMaxQuantityOfProduct(currentQuantity, additionQuantity, maximumQuantity) {
      let result = false;
      let sum = currentQuantity + additionQuantity;
      if (sum > maximumQuantity || sum > MAXIMUM_QUANTITY_OF_EACH_PRODUCT_IN_CART) {
        result = true;
      }
      return result;
    },
  },
};
</script>

<style>
</style>