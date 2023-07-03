<template>
  <div class="overflow-y-scroll max-h-[80vh]">
    <div class="flex flex-col md:flex-row gap-5">
      <div class="md:w-1/2 border rounded-sm p-5 bg-gray-50">
        <div class="mb-5">
          <label class="text-gray-500" for="userName">Tên</label>
          <input
            id="userName"
            class="border rounded-md w-full outline-0 focus:outline-2 focus:outline-green-700 py-1 lg:py-2 px-2 lg:px-4"
            type="text"
          />
        </div>
        <div class="mb-5">
          <label class="text-gray-500" for="slug">Đường đẫn</label>
          <input
            id="slug"
            class="border rounded-md w-full outline-0 focus:outline-2 focus:outline-green-700 py-1 lg:py-2 px-2 lg:px-4"
            type="text"
          />
        </div>
        <PlanterPickerMolecule class="mb-5" />
        <div class="mb-5">
          <label class="text-gray-500" for="price">Giá</label>
          <input
            id="price"
            class="border rounded-md w-full outline-0 focus:outline-2 focus:outline-green-700 py-1 lg:py-2 px-2 lg:px-4"
            type="text"
          />
        </div>
        <div class="mb-5">
          <label class="text-gray-500" for="quantity">Số lượng</label>
          <input
            id="quantity"
            class="border rounded-md w-full outline-0 focus:outline-2 focus:outline-green-700 py-1 lg:py-2 px-2 lg:px-4"
            type="number"
          />
        </div>
        <div class="mb-5">
          <label class="text-gray-500" for="status">Trạng thái</label>
          <select
            id="status"
            class="border rounded-md w-full outline-0 focus:outline-2 focus:outline-green-700 py-1 lg:py-2 px-2 lg:px-4"
          >
            <option value="1">Hiển thị</option>
            <option value="0">Ẩn</option>
          </select>
        </div>
        <div class="mb-5">
          <label class="text-gray-500">Ảnh trưng bày</label>
          <CropImageMolecule />
        </div>
      </div>
      <div class="md:w-1/2 border rounded-sm p-5 bg-gray-50">
        <div class="mb-5">
          <label class="text-gray-500" for="description">Mô tả</label>
          <textarea
            id="description"
            rows="3"
            class="border rounded-md w-full outline-0 focus:outline-2 focus:outline-green-700 py-1 lg:py-2 px-2 lg:px-4"
            type="text"
          />
        </div>
        <div class="mb-5">
          <label class="text-gray-500" for="funFact">Đặc điểm nổi bật</label>
          <textarea
            id="funFact"
            rows="3"
            class="border rounded-md w-full outline-0 focus:outline-2 focus:outline-green-700 py-1 lg:py-2 px-2 lg:px-4"
            type="text"
          />
        </div>
        <div class="mb-5">
          <label class="text-gray-500" for="light">Ánh sáng</label>
          <textarea
            id="light"
            rows="3"
            class="border rounded-md w-full outline-0 focus:outline-2 focus:outline-green-700 py-1 lg:py-2 px-2 lg:px-4"
            type="text"
          />
        </div>
        <div class="mb-5">
          <label class="text-gray-500" for="petFriendly"
            >Thân thiện với động vật</label
          >
          <textarea
            rows="3"
            id="petFriendly"
            class="border rounded-md w-full outline-0 focus:outline-2 focus:outline-green-700 py-1 lg:py-2 px-2 lg:px-4"
            type="text"
          />
        </div>
        <div class="mb-5">
          <label class="text-gray-500" for="water">Lượng nước cho cây</label>
          <textarea
            id="water"
            rows="3"
            class="border rounded-md w-full outline-0 focus:outline-2 focus:outline-green-700 py-1 lg:py-2 px-2 lg:px-4"
            type="text"
          />
        </div>
        <div class="mb-5">
          <label class="text-gray-500" for="sadPlantSigns"
            >Dấu hiệu cây không khỏe</label
          >
          <textarea
            rows="3"
            id="sadPlantSigns"
            class="border rounded-md w-full outline-0 focus:outline-2 focus:outline-green-700 py-1 lg:py-2 px-2 lg:px-4"
            type="text"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CropImageMolecule from "./CropImageMolecule.vue";
import PlanterPickerMolecule from "./PlanterPickerMolecule.vue";

export default {
  name: "PlantFormMolecule",
  components: { PlanterPickerMolecule, CropImageMolecule },
};
</script>

<style>
</style>