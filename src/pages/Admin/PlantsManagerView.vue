<template>
  <div>
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg z-10">
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead
          class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
        >
          <tr class="[&>*]:whitespace-nowrap xl:[&>*]:text-base">
            <th scope="col" class="px-6 py-3">Tên sản phẩm</th>
            <th scope="col" class="px-6 py-3">Hình ảnh</th>
            <th scope="col" class="px-6 py-3">Số lượng</th>
            <th scope="col" class="px-6 py-3">Trạng thái</th>
            <th scope="col" class="px-6 py-3">
              <span class="sr-only">Edit</span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="plant in plants"
            :key="plant"
            class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 xl:[&>*]:text-base"
          >
            <th
              scope="row"
              class="min-w-[200px] px-6 py-4 font-medium text-gray-900 dark:text-white"
            >
              {{ plant.name }}
            </th>
            <td class="min-w-[50px] px-6 py-4">
              <img
                class="w-20 rounded-lg bg-black"
                :src="`https://tenebrific-crust.000webhostapp.com/api/Controllers/GetFileController.php?imgURL=${plant.image}`"
                :alt="plant.name"
              />
            </td>
            <td class="min-w-[50px] px-6 py-4">{{ plant.quantity }}</td>
            <td class="min-w-[50px] px-6 py-4">
              <input :checked="plant.status" class="w-5 h-5 mr-5" type="checkbox" />
              <span>{{ plant.status ? "Hiển thị" : "Ẩn" }}</span>
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
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import PlantsService from "@/service/PlantsService";

export default {
  name: "PlantsManagerView",
  data() {
    return {
      plants: [],
    };
  },
  methods: {
    getAllPlants() {
      PlantsService.getAll().then((res) => {
        this.plants = res.data;
      });
    },
  },
  components: { FontAwesomeIcon },
  created() {
    this.getAllPlants();
  },
};
</script>

<style>
</style>