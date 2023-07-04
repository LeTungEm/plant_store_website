<template>
  <div>
    <div class="relative z-[2]">
      <label class="text-gray-500" for="planterPicker"
        >Chọn chậu đính kèm&nbsp;({{ pickedId.length }})*</label
      >
      <input
        id="planterPicker"
        class="border rounded-md focus:rounded-none focus:rounded-t-md w-full outline-0 py-1 lg:py-2 px-2 lg:px-4"
        type="text"
        v-model="search"
        @click="changeStatus"
        v-bind:class="
          this.status ? 'focus:outline-2 focus:outline-green-700' : ''
        "
        placeholder="Nhập tên chậu cần tìm..."
      />
      <ul
        v-bind:class="status ? '' : 'hidden'"
        class="absolute top-full right-0 left-0 overflow-y-auto max-h-[200px] bg-gray-100 border-r-2 border-l-2 border-b-2 border-green-700 rounded-b-md"
      >
        <li
          @click="changeStatus"
          class="py-1 px-3"
          v-bind:class="listFilterd.length > 0 ? 'hidden' : ''"
        >
          Không có kết quả
        </li>
        <li
          class="flex items-center gap-5 py-1 px-3 hover:bg-gray-300"
          v-for="tool in listFilterd"
          :key="tool"
          @click="() => pickItem(tool)"
        >
          <img
            class="rounded-sm max-w-[30px]"
            :src="`https://tenebrific-crust.000webhostapp.com/api/Controllers/GetFileController.php?imgURL=${tool.image}`"
            alt=""
          />{{ tool.name }}
        </li>
      </ul>
    </div>
    <div class="flex flex-wrap gap-5 mt-5">
      <div
        v-for="(name, index) in names"
        :key="name"
        class="border py-2 px-5 rounded-md cursor-pointer hover:bg-gray-100"
      >
        <span class="text-green-700">
          {{ name }}
        </span>
        <span
          @click="() => movePickedItem(index)"
          class="text-xs italic underline ml-2"
          >Xóa</span
        >
      </div>
    </div>
    <div
      v-bind:class="status ? '' : 'hidden'"
      @click="changeStatus"
      class="fixed inset-0 z-[1]"
    >
      &nbsp;
    </div>
  </div>
</template>

<script>
import { normalizeString } from "@/assets/js/quickFunction";
import ToolsService from "@/service/ToolsService";
export default {
  name: "PlanterPickerMolecule",
  data() {
    return {
      tools: [],
      search: "",
      status: false,
      names: [],
      pickedId: [],
      listFilterd: [],
    };
  },
  props: {
    defaultPickedName: String,
  },
  watch: {
    search: function () {
      this.filterPlanter();
    },
  },
  emits: ["changePickedPlanter"],
  methods: {
    getBriefInfo() {
      ToolsService.getBriefInfo().then((res) => {
        this.tools = res.data;
        this.listFilterd = res.data;
        this.setDefault(res.data);
      });
    },
    setDefault(tools) {
      if (this.defaultPickedName) {
        tools.forEach((tool) => {
          if (this.defaultPickedName.includes(tool.name)) {
            this.pickedId.push(tool.tool_id);
            this.names.push(tool.name);
          }
        });
      }
      this.$emit("changePickedPlanter", this.pickedId);
      this.filterPlanter();
    },
    changeStatus() {
      this.status = !this.status;
    },
    filterPlanter() {
      let list = this.tools;
      list = list.filter(
        (tool) => this.pickedId.includes(tool.tool_id) == false
      );
      if (this.search) {
        list = list.filter((tool) =>
          normalizeString(tool.name).includes(normalizeString(this.search))
        );
      }
      this.listFilterd = list;
    },
    pickItem(tool) {
      this.names.push(tool.name);
      this.pickedId.push(tool.tool_id);
      this.changeStatus();
      this.filterPlanter();
      this.$emit("changePickedPlanter", this.pickedId);
    },
    movePickedItem(index) {
      this.pickedId.splice(index, 1);
      this.names.splice(index, 1);
      this.filterPlanter();
      this.$emit("changePickedPlanter", this.pickedId);
    },
  },
  mounted() {
    this.getBriefInfo();
  },
};
</script>

<style>
</style>