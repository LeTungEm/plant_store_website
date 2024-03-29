<template>
  <div class="px-5 xl:px-10 mt-5">
    <div
      v-if="orders.length > 0"
      class="relative overflow-x-auto overflow-y-auto h-[80vh] shadow-md sm:rounded-lg"
    >
      <table class="w-full text-sm text-left text-gray-600 dark:text-gray-400">
        <thead
          class="sticky top-0 text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400 shadow-lg"
        >
          <TableColumnMolecule :columns="Object.keys(orders[0])" />
        </thead>
        <tbody>
          <tr
            v-for="(order, index) in orders"
            :key="order"
            v-bind:class="
              order.status == 4 || order.status == 5
                ? 'bg-gray-300 hover:bg-gray-400'
                : ''
            "
            class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 xl:[&>*]:text-base"
          >
            <td
              v-for="key in Object.keys(order)"
              :key="key"
              class="min-w-[200px] px-6 py-4 font-medium dark:text-white"
            >
              <div>
                <div
                  class="text-black font-normal"
                  v-if="key == 'name_receiver'"
                >
                  {{ order.name_receiver }}
                </div>
                <div v-else-if="key == 'total'">
                  <PriceTextAtom
                    style="
                      color: rgb(75 85 99 / var(--tw-text-opacity)) !important;
                    "
                    :maxPrice="order.total"
                    :minPrice="order.total"
                  />
                </div>
                <div v-else-if="key == 'is_pay'">
                  <span class="text-amber-700">{{
                    order.is_pay == 1 ? "Đã thanh toán" : "Chưa thanh toán"
                  }}</span>
                </div>
                <div v-else-if="key == 'status'">
                  <span
                    v-bind:class="
                      order.status == 4 || order.status == 5 ? 'font-bold' : ''
                    "
                    class="text-amber-700"
                    >{{
                      order.status == 1
                        ? "Đang chờ xử lý"
                        : order.status == 2
                        ? "Đã xác nhận"
                        : order.status == 3
                        ? "Đang giao"
                        : order.status == 4
                        ? "Giao thành công"
                        : "Đã hủy"
                    }}</span
                  >
                </div>
                <div v-else>
                  {{ order[key] }}
                </div>
              </div>
            </td>
            <td
              class="min-w-[100px] px-6 py-4 text-right text-xl whitespace-nowrap"
            >
              <font-awesome-icon
                @click="() => toOrderDetail(order.order_id)"
                class="mr-5 cursor-pointer p-2 border rounded-md text-green-700 bg-white hover:text-white hover:bg-green-700 duration-300"
                :icon="['fas', 'eye']"
              />
              <font-awesome-icon
                v-if="order.status == 1"
                @click="() => requireCancelOrder(index)"
                class="cursor-pointer p-2 border rounded-md text-green-700 bg-white hover:text-white hover:bg-green-700 duration-300"
                :icon="['fas', 'eraser']"
              />
            </td>
          </tr>
        </tbody>
      </table>
      <OptionNotificationAtom
        @pickOption="isDelete"
        :status="optionNotifiStatus"
        :text="optionNotifiMessage"
      />
    </div>
    <div class="w-full h-[75vh] flex justify-center items-center" v-else>
      <div class="p-5">
        <h1 class="text-4xl text-center">Bạn hiện chưa có đơn hàng nào.</h1>
        <h2
          @click="toShop"
          class="text-2xl text-green-700 text-center cursor-pointer"
        >
          Mua hàng ngay
        </h2>
      </div>
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import PriceTextAtom from "@/components/atoms/text/PriceTextAtom.vue";
import TableColumnMolecule from "@/components/molecules/TableColumnMolecule.vue";
import OptionNotificationAtom from "@/components/atoms/OptionNotificationAtom.vue";
import OrderService from "@/service/OrderService";
import AccountsService from "@/service/AccountsService";
import { getEmail } from "@/assets/js/quickFunction";

export default {
  components: {
    PriceTextAtom,
    TableColumnMolecule,
    FontAwesomeIcon,
    OptionNotificationAtom,
  },
  name: "OrderView",
  data() {
    return {
      orders: [],
      optionNotifiStatus: false,
      optionNotifiMessage: "",
      deleteOrderIndex: "",
    };
  },
  methods: {
    toShop() {
      this.$router.push("/cua-hang/cay");
    },
    requireCancelOrder(index) {
      let order = this.orders[index];
      this.showOptionNotify(
        `Bạn có chắc muốn hủy đơn hàng mã ${order.order_id}`
      );
      this.deleteOrderIndex = index;
    },
    isDelete(result) {
      if (result) {
        this.cancelOrder(this.deleteOrderIndex);
        this.deleteOrderId = "";
      }
      this.optionNotifiStatus = false;
    },
    showOptionNotify(message) {
      this.optionNotifiMessage = message;
      this.optionNotifiStatus = true;
    },
    toOrderDetail(orderId) {
      this.$router.push(`/don-hang/chi-tiet/${orderId}`);
    },
    cancelOrder(index) {
      let orderStatus = this.orders[index].status;
      if (orderStatus == 1) {
        let orderId = this.orders[index].order_id;
        OrderService.cancelOrder(orderId).then((res) => {
          if (res.data.message) {
            this.orders[index].status = 5;
            console.log("true");
          } else {
            console.log("fail");
          }
        });
      }
    },
    getAllByAccountId() {
      let email = getEmail();
      AccountsService.detailUser(email).then((res) => {
        if (res.data.message) {
          OrderService.getAllByAccountId(res.data.data.account_id).then(
            (res) => {
              this.orders = res.data;
            }
          );
        }
      });
    },
  },
  created() {
    this.getAllByAccountId();
  },
};
</script>

<style>
</style>