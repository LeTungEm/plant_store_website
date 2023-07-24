<template>
  <div
    v-if="tools.length > 0"
    class="relative overflow-x-auto overflow-y-scroll h-[80vh] shadow-md sm:rounded-lg z-10"
  >
    <table class="w-full text-sm text-left text-gray-600 dark:text-gray-400">
      <thead
        class="sticky top-0 text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400 shadow-lg"
      >
        <TableColumnMolecule :columns="Object.keys(tools[0])" />
      </thead>
      <tbody>
        <tr
          v-for="(tool, index) in tools"
          :key="tool"
          v-bind:class="tool.status ? '' : 'opacity-40'"
          class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 xl:[&>*]:text-base"
        >
          <td
            v-for="key in Object.keys(tool)"
            :key="key"
            class="min-w-[200px] px-6 py-4 font-medium dark:text-white"
          >
            <div class="text-black font-normal" v-if="key == 'name'">
              {{ tool.name }}
            </div>
            <div v-else-if="key == 'image'">
              <img
                class="w-20 rounded-lg bg-black"
                :src="`http://localhost/LeTungEm/plant_store_api__php/api/Controllers/GetFileController.php?imgURL=${tool.image}`"
                :alt="tool.name"
              />
            </div>
            <div v-else-if="key == 'status'">
              <input
                :checked="tool.status"
                @change="changeToolsStatus"
                class="w-5 h-5 mr-5"
                :value="index"
                type="checkbox"
              />
              <span>{{ tool.status ? "Hiển thị" : "Ẩn" }}</span>
            </div>
            <div v-else>
              {{ tool[key] }}
            </div>
          </td>
          <td
            class="min-w-[100px] px-6 py-4 text-right text-xl whitespace-nowrap"
          >
            <font-awesome-icon
              @click="() => toFormEdit(tool.slug)"
              class="mr-5 cursor-pointer p-2 border rounded-md text-green-700 bg-white hover:text-white hover:bg-green-700 duration-300"
              :icon="['fas', 'pen-fancy']"
            />
            <font-awesome-icon
              @click="() => deleteProduct(index)"
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
</template>
  
  <script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import TableColumnMolecule from "../molecules/TableColumnMolecule.vue";
import OptionNotificationAtom from "../atoms/OptionNotificationAtom.vue";
import ToolsService from "@/service/ToolsService";
import PlantSetService from "@/service/PlantSetService";

export default {
  name: "ToolsTableOrganism",
  data() {
    return {
      optionNotifiMessage: "",
      optionNotifiStatus: false,
      deleteIndex: "",
    };
  },
  props: {
    tools: Array,
  },
  components: { FontAwesomeIcon, TableColumnMolecule, OptionNotificationAtom },
  emits: ["changeToolsStatus", "deleteProduct"],
  methods: {
    deleteProduct(index) {
      this.changeOptionNotificationStatus(
        "Bạn có muốn xóa " + this.tools[index].name
      );
      this.deleteIndex = index;
    },
    async isDelete(result) {
      this.changeOptionNotificationStatus();
      if (result) {
        let toolIndex = this.deleteIndex;
        let toolId = this.tools[toolIndex].tool_id;
        ToolsService.setToolStatus(0, toolId).then((res) => {
          if (res.data.message) {
            this.$emit("changeToolsStatus", toolIndex, 0);
          } else {
            alert("Có sự cố. Không thể sửa");
          }
        });
        PlantSetService.setStatusByToolId(0, toolId).then((res) => {
          if (res.data.message == false) {
            alert("Có sự cố. Không thể sửa các biến thể");
          }
        });
      }
    },
    //   toFormEdit(plantSlug) {
    //     // this.$router.push(`/quan-ly/quan-ly-cay/${plantSlug}`);
    //   },
    changeOptionNotificationStatus(message) {
      this.optionNotifiMessage = message;
      this.optionNotifiStatus = !this.optionNotifiStatus;
    },
    changeToolsStatus(e) {
      let status = e.target.checked ? 1 : 0;
      let toolIndex = e.target.value;
      let toolId = this.tools[toolIndex].tool_id;
      ToolsService.setToolStatus(status, toolId).then((res) => {
        if (res.data.message) {
          this.$emit("changeToolsStatus", toolIndex, status);
        } else {
          alert("Có sự cố. Không thể sửa");
        }
      });
      PlantSetService.setStatusByToolId(status, toolId).then((res) => {
        if (res.data.message == false) {
          alert("Có sự cố. Không thể sửa các biến thể");
        }
      });
    },
  },
};
</script>
  
  <style>
</style>