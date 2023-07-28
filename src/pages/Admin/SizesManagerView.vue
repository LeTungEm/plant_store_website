<template>
  <div class="overflow-y-auto max-h-[85vh] flex justify-center items-center">
    <div class="flex flex-col justify-center items-center p-5 xl:p-10">
      <div class="my-5">
        <label class="text-lg" for="size">Tên kích cỡ:</label>&nbsp;
        <br />
        <input
          id="size"
          placeholder="Nhập tên kích cỡ..."
          v-model="sizeValue"
          class="border rounded-md outline-0 focus:outline-2 focus:outline-green-700 py-1 lg:py-2 px-2 lg:px-4"
          type="text"
        />
      </div>
      <WhiteButtonAtom
        @click="addSize"
        class="mt-5 border w-1/2 py-2"
        :text="'Thêm kích cỡ'"
      />
      <div class="flex flex-wrap gap-5 mt-5">
        <span
          class="flex gap-5 p-2 border rounded-md hover:border-black"
          v-for="(size, index) in sizes"
          :key="size.size_id"
        >
          <span>{{ size.name }}</span>
          <span
            @click="() => removeColor(index, size.size_id)"
            class="italic underline cursor-pointer"
            >xóa</span
          >
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import WhiteButtonAtom from "@/components/atoms/button/WhiteButtonAtom.vue";
import SizesService from "@/service/SizesService";
import { mapActions } from "vuex";
export default {
  components: { WhiteButtonAtom },
  name: "SizesManagerView",
  data() {
    return {
      sizeValue: "",
      sizes: [],
    };
  },
  methods: {
    ...mapActions(["showNotification"]),

    removeColor(index, sizeId) {
      SizesService.deleteSize(sizeId).then((res) => {
        if (res.data.message) {
          this.showNotification([
            `Xóa thành công (${this.sizes[index].name}) !!!`,
            false,
          ]);
          this.sizes.splice(index, 1);
        } else {
          this.showNotification([`Xóa thất bại !!!`, true]);
        }
      });
    },

    addSize() {
      if (this.sizeValue) {
        SizesService.insertSize(this.sizeValue).then((res) => {
          if (res.data.message) {
            this.sizes.push({
              name: this.sizeValue,
              size_id: res.data.size_id,
            });
            this.showNotification([
              `Thêm kích cỡ: ${this.sizeValue} thành công !!!`,
              false,
            ]);
          } else {
            this.showNotification([`Thêm thất bại !!!`, true]);
          }
        });
      } else {
        this.showNotification([`Hãy tên nhập kích cỡ !!!`, true]);
      }
    },
    getAllSize() {
      SizesService.getForManager().then((res) => {
        this.sizes = res.data;
      });
    },
  },
  created() {
    this.getAllSize();
  },
};
</script>

<style>
</style>