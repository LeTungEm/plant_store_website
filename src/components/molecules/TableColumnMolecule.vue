<template>
  <tr class="[&>*]:whitespace-nowrap xl:[&>*]:text-base bg-white">
    <th v-for="column in columns" :key="column" scope="col" class="px-6 py-3">
      {{ transToVN(column) }}
    </th>
    <th scope="col" class="px-6 py-3">
      <span class="sr-only">Edit</span>
    </th>
  </tr>
</template>

<script>
export default {
  name: "TableColumnMolecule",
  data() {
    return {
      vnColumn: {
        plant_id: "Mã cây",
        name: "Tên",
        slug: "Đường dẫn",
        price: "Giá cơ bản",
        description: "Mô tả",
        score: "Đánh giá",
        fun_fact: "Đặc điểm nổi bật",
        light: "Ánh sáng",
        pet_friendly: "Thân thiện với động vật",
        water: "Lượng nước cho cây",
        sad_plant_signs: "Dấu hiệu cây không khỏe",
        create_date: "Ngày tạo",
        update_date: "Ngày sửa đổi",
        image: "Hình ảnh",
        quantity: "Số lượng",
        status: "Trạng thái",
        supplier_name: "Nhà cung cấp",
        tool: "Chậu đi kèm",
        category_names: "Danh mục",
        tool_id: "Mã chậu",
        tool_prices: "Các mức giá",
        order_id: "Mã đơn hàng",
        name_receiver: "Tên người nhận",
        phone_receiver: "Số điện thoại người nhận",
        address_receiver: "Địa chỉ người nhận",
        is_pay: "Trạng Thái thanh toán",
        transport_fee: "Phí vận chuyển",
        note: "Ghi chú",
        payment_method: "Phương thức thanh toán",
        shipping: "Vận chuyển",
        total: "Tổng cộng",
        buy_date: "Ngày mua",
        receiver_info: "Thông tin người nhận",
        product_name: "Tên sản phẩm",
        user_name: "Tên tài khoản",
        confirm_date: "Ngày xác nhận đơn",
      },
    };
  },
  props: {
    columns: Array,
  },
  methods: {
    transToVN(text) {
      let arrKey = Object.keys(this.vnColumn);
      if (arrKey.includes(text.toLowerCase())) {
        return this.vnColumn[text.toLowerCase()];
      }
      return text;
    },
  },
};
</script>

<style>
</style>