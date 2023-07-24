<template>
  <div>
    <div class="flex flex-col-reverse md:flex-row gap-5">
      <div class="md:w-1/2 border rounded-sm p-5 bg-gray-50">
        <div class="mb-5">
          <label class="text-gray-500" for="name_receiver"
            >Tên người nhận*</label
          >
          <input
            id="name_receiver"
            class="border rounded-md w-full outline-0 focus:outline-2 focus:outline-green-700 py-1 lg:py-2 px-2 lg:px-4"
            type="text"
          />
        </div>
        <div class="mb-5">
          <label class="text-gray-500" for="phone_receiver"
            >Số ĐT người nhận*</label
          >
          <input
            id="phone_receiver"
            class="border rounded-md w-full outline-0 focus:outline-2 focus:outline-green-700 py-1 lg:py-2 px-2 lg:px-4"
            type="text"
          />
        </div>
        <div class="mb-5">
          <label class="text-gray-500" for="address_receiver"
            >Địa chỉ người nhận*</label
          >
          <input
            id="address_receiver"
            class="border rounded-md w-full outline-0 focus:outline-2 focus:outline-green-700 py-1 lg:py-2 px-2 lg:px-4"
            type="text"
          />
        </div>
        <div class="mb-5">
          <label class="text-gray-500" for="transport_fee"
            >Phí vận chuyển*</label
          >
          <input
            id="transport_fee"
            class="border rounded-md w-full outline-0 focus:outline-2 focus:outline-green-700 py-1 lg:py-2 px-2 lg:px-4"
            type="text"
          />
        </div>
        <div class="mb-5">
          <label class="text-gray-500" for="is_pay"
            >Trạng thái thanh toán*</label
          >
          <select
            id="is_pay"
            class="border rounded-md w-full outline-0 focus:outline-2 focus:outline-green-700 py-1 lg:py-2 px-2 lg:px-4"
          >
            <option value="0">Chưa thanh toán</option>
            <option value="1">Đã thanh toán</option>
          </select>
        </div>
        <div class="mb-5">
          <label class="text-gray-500" for="note">ghi chú</label>
          <textarea
            id="note"
            rows="3"
            class="border rounded-md w-full outline-0 focus:outline-2 focus:outline-green-700 py-1 lg:py-2 px-2 lg:px-4"
            type="text"
          />
        </div>
        <div class="mb-5">
          <label class="text-gray-500" for="is_pay"
            >Phương thức thanh toán*</label
          >
          <select
            id="is_pay"
            class="border rounded-md w-full outline-0 focus:outline-2 focus:outline-green-700 py-1 lg:py-2 px-2 lg:px-4"
          >
            <option value="1">Thanh toán khi nhận hàng</option>
          </select>
        </div>
        <div class="mb-5">
          <label class="text-gray-500" for="is_pay"
            >Phương thức vận chuyển*</label
          >
          <select
            id="is_pay"
            class="border rounded-md w-full outline-0 focus:outline-2 focus:outline-green-700 py-1 lg:py-2 px-2 lg:px-4"
          >
            <option value="1">Giao hàng tiết kiệm</option>
          </select>
        </div>
        <div class="mb-5">
          <label class="text-gray-500" for="status">Trạng thái</label>
          <select
            id="status"
            class="border rounded-md w-full outline-0 focus:outline-2 focus:outline-green-700 py-1 lg:py-2 px-2 lg:px-4"
          >
            <option value="1">Đang chờ xử lý</option>
            <option value="2">Đã xác nhận</option>
            <option value="3">Đang giao</option>
            <option value="4">Giao thành công</option>
            <option value="5">Đã hủy</option>
          </select>
        </div>
        <div class="mb-5">
          <label class="text-gray-500" for="total">Tổng cộng*</label>
          <input
            id="total"
            class="border rounded-md w-full outline-0 focus:outline-2 focus:outline-green-700 py-1 lg:py-2 px-2 lg:px-4"
            type="text"
          />
        </div>
        <div class="mb-5">
          <GreenButtonAtom
            class="py-2 px-5 text-lg mb-1 float-right"
            :text="'Tạo đơn'"
          />
        </div>
      </div>
      <div class="md:w-1/2 border rounded-sm p-5 bg-gray-50">
        <PlantSetPickerMolecule />
      </div>
    </div>
  </div>
</template>

<script>
import GreenButtonAtom from "../atoms/button/GreenButtonAtom.vue";
import PlantSetPickerMolecule from "../molecules/PlantSetPickerMolecule.vue";
export default {
  name: "AdmFormInsertOrderOrganism",
  components: { GreenButtonAtom, PlantSetPickerMolecule },
  
};
</script>

<style>
</style>