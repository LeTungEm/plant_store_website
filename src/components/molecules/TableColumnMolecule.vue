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
            slug: 'Đường dẫn'
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