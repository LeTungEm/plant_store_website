<template>
  <div v-if="plants.length > 0" class="relative overflow-x-auto overflow-y-scroll h-[80vh] shadow-md sm:rounded-lg z-10">
    <table class="w-full text-sm text-left text-gray-600 dark:text-gray-400">
      <thead
        class="sticky top-0 text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
      >
        <TableColumnMolecule :columns="Object.keys(plants[0])" />
      </thead>
      <tbody>
        <tr
          v-for="plant in plants"
          :key="plant"
          class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 xl:[&>*]:text-base"
        >
          <td
            v-for="key in Object.keys(plant)"
            :key="key"
            class="min-w-[200px] px-6 py-4 font-medium dark:text-white"
          >
            <div class="text-black" v-if="key == 'name'">
              {{ plant.name }}
            </div>
            <div v-else-if="key == 'image'">
              <img
                class="w-20 rounded-lg bg-black"
                :src="`https://tenebrific-crust.000webhostapp.com/api/Controllers/GetFileController.php?imgURL=${plant.image}`"
                :alt="plant.name"
              />
            </div>
            <div v-else-if="key == 'status'">
              <input
                :checked="plant.status"
                class="w-5 h-5 mr-5"
                type="checkbox"
              />
              <span>{{ plant.status ? "Hiển thị" : "Ẩn" }}</span>
            </div>
            <div v-else>
                {{ plant[key] }}
            </div>
          </td>
          <td
            class="min-w-[100px] px-6 py-4 text-right text-xl whitespace-nowrap"
          >
            <font-awesome-icon class="mr-5" :icon="['fas', 'pen-fancy']" />
            <font-awesome-icon :icon="['fas', 'eraser']" />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import TableColumnMolecule from "../molecules/TableColumnMolecule.vue";

export default {
  name: "PlantsTableOrganism",
  data() {
    return {};
  },
  props: {
    plants: Array,
  },
  components: { FontAwesomeIcon, TableColumnMolecule },
};
</script>

<style>
</style>