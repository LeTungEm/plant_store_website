<template>
  <div>
    <div class="relative z-[2]">
      <label class="text-gray-500" for="planterPicker"
        >Chọn chậu đính kèm</label
      >
      <input
        id="planterPicker"
        class="border rounded-md focus:rounded-none focus:rounded-t-md w-full outline-0 focus:outline-2 focus:outline-green-700 py-1 lg:py-2 px-2 lg:px-4"
        type="text"
        v-model="search"
        @click="changeStatus"
        placeholder="Nhập tên chậu cần tìm..."
      />
      <ul
        v-bind:class="status ? '' : 'hidden'"
        class="absolute top-full right-0 left-0 overflow-y-auto max-h-[200px] bg-gray-100 border-r-2 border-l-2 border-b-2 border-green-700 rounded-b-md"
      >
        <li
          class="flex items-center gap-5 py-1 px-3 hover:bg-gray-300"
          v-for="tool in filterPlanter()"
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
        @click="() => movePickedItem(index)"
        v-for="(name, index) in names"
        :key="name"
        class="border py-2 px-5 rounded-md cursor-pointer"
      >
        <span class="text-green-700">
          {{ name }}
        </span>
        <span class="text-xs italic underline ml-2">Xóa</span>
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
    };
  },
  watch: {
    pickedId: function () {
      this.$emit("changePickedPlanter", this.pickedId);
    },
  },
  emits: ["changePickedPlanter"],
  methods: {
    getBriefInfo() {
      ToolsService.getBriefInfo().then((res) => {
        this.tools = res.data;
      });
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
          this.normalizeString(tool.name).includes(
            this.normalizeString(this.search)
          )
        );
      }
      return list;
    },
    normalizeString(str) {
      return str
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");
    },
    pickItem(tool) {
      this.names.push(tool.name);
      this.pickedId.push(tool.tool_id);
      this.changeStatus();
    },
    movePickedItem(index) {
      this.pickedId.splice(index, 1);
      this.names.splice(index, 1);
    },
  },
  mounted() {
    this.getBriefInfo();
  },
};
</script>

<style>
</style>