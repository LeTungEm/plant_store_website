<template>
  <div class="overflow-y-auto max-h-[85vh] flex justify-center items-center">
    <div class="flex flex-col justify-center items-center p-5 xl:p-10">
      <h1 class="text-2xl font-bold text-center">Quản lý màu sắc</h1>
      <div class="my-5">
        <label
          class="text-lg px-5 py-2 border hover:border-black hover:font-bold"
          for="color"
          >Chọn màu</label
        >
        <input
          id="color"
          hidden
          v-model="colorValue"
          class="border rounded-md outline-0 focus:outline-2 focus:outline-green-700 py-1 lg:py-2 px-2 lg:px-4"
          type="color"
        />
      </div>
      <h1 class="text-lg text-center">{{ colorValue }}</h1>
      <div
        v-bind:style="`background-color: ${colorValue}`"
        class="w-[50vw] h-[10vh] mt-5 border"
      >
        &nbsp;
      </div>
      <label class="mt-5 text-lg">Tên màu:</label>
      <input
        v-model="colorName"
        placeholder="Nhập tên màu..."
        type="text"
        class="w-1/2 py-2 px-2 border"
      />
      <WhiteButtonAtom
        @click="addColor"
        :text="'thêm màu'"
        class="mt-5 border w-1/2 py-2"
      />
      <div class="mt-5 flex flex-wrap gap-10">
        <span
          class="relative flex flex-col justify-center items-center hover:border-black hover:shadow-sm"
          v-for="(color, index) in colors"
          :key="color.color_id"
        >
          <span
            :style="`background-color: ${color.code}`"
            class="w-7 h-7 xl:w-10 xl:h-10 rounded-full border"
            >&nbsp;</span
          >
          <span class="mt-1">{{ color.name }}</span>
          <span
            @click="() => removeColor(index, color.color_id)"
            class="absolute top-0 right-0 -mt-3 -mr-3 cursor-pointer"
            >X</span
          >
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import WhiteButtonAtom from "@/components/atoms/button/WhiteButtonAtom.vue";
import ColorsService from "@/service/ColorsService";
import { mapActions } from "vuex";
export default {
  components: { WhiteButtonAtom },
  name: "ColorsManagerView",
  data() {
    return {
      colorValue: "",
      colors: [],
      colorName: "",
    };
  },
  methods: {
    ...mapActions(["showNotification"]),

    removeColor(index, colorId) {
      ColorsService.deleteColor(colorId).then((res) => {
        if (res.data.message) {
          this.showNotification([
            `Đã xóa màu ${this.colors[index].name} !!!`,
            false,
          ]);
          this.colors.splice(index, 1);
        } else {
          this.showNotification([`Xóa màu thất bại. Màu đã được sử dụng !!!`, true]);
        }
      });
    },

    async addColor() {
      if (this.colorValue) {
        if (this.colorName) {
          let result = await this.isNameExist();
          if (result.data.message) {
            this.showNotification(["Tên màu đã tồn tại !!!", true]);
          } else {
            ColorsService.createColor(this.colorName, "", this.colorValue).then(
              (res) => {
                if (res.data.message) {
                  this.colors.push({
                    name: this.colorName,
                    code: this.colorValue,
                    color_id: res.data.color_id,
                  });
                  this.showNotification([`Thêm màu ${this.colorName} thành công !!!`, false]);
                }
              }
            );
          }
        } else {
          this.showNotification(["Hãy nhập tên màu !!!", true]);
        }
      } else {
        this.showNotification(["Hãy chọn màu !!!", true]);
      }
    },
    async isNameExist() {
      return await ColorsService.isNameExist(this.colorName);
    },
    getAllColors() {
      ColorsService.getForManager().then((res) => {
        this.colors = res.data;
      });
    },
  },
  created() {
    this.getAllColors();
  },
};
</script>

<style>
</style>