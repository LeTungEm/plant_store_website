<template>
  <div class="overflow-y-auto max-h-[85vh]">
    <h1 v-if="this.$route.params.orderId == 0" class="text-2xl">
      Tạo đơn hàng
    </h1>
    <h1 v-else class="text-2xl">Cập nhật đơn hàng</h1>
    <AdmFormInsertOrderOrganism />
  </div>
</template>

<script>
import AdmFormInsertOrderOrganism from "@/components/organisms/AdmFormInsertOrderOrganism.vue";

export default {
  name: "OrdersEditerView",
  data() {
    return {
    };
  },
  components: { AdmFormInsertOrderOrganism },
  methods: {
    
  },
};
</script>

<style>
</style>