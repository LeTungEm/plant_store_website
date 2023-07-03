<template>
  <tr class="[&>*]:whitespace-nowrap xl:[&>*]:text-base">
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
  data(){
    return {
        vnColumn: {
            plant_id: 'Mã cây',
            name: 'Tên',
            slug: 'Đường dẫn',
            description: 'Mô tả',
            score: 'Đánh giá',
            fun_fact: 'Đặc điểm nổi bật',
            light: 'Ánh sáng',
            pet_friendly: 'Thân thiện với động vật',
            water: 'Lượng nước cho cây',
            sad_plant_signs: 'Dấu hiệu cây không khỏe',
            create_date: 'Ngày tạo',
            update_date: 'Ngày sửa đổi',
            image: 'Hình ảnh',
            quantity: 'Số lượng',
            status: 'Trạng thái',
            supplier_name: 'Nhà cung cấp',
            tool: 'Chậu đi kèm'
        },
    };
  },
  props: {
    columns: Array,
  },
  methods:{
    transToVN(text){
        let arrKey = Object.keys(this.vnColumn);
        if(arrKey.includes(text.toLowerCase())){
            return this.vnColumn[text];
        }
        return text;
    }
  }
};
</script>

<style>
</style>