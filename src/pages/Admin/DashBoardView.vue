<template>
  <div>
    <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
      <OverMetricItemMolecule
        :title="'Tiền bán hàng'"
        :number="1500000"
      />
      <OverMetricItemMolecule
        :title="'Số đơn hàng'"
        :number="1500"
      />
      <OverMetricItemMolecule
        :title="'Khách trả hàng'"
        :number="10"
      />
      <OverMetricItemMolecule
        :title="'Người dùng mới'"
        :number="1500000"
      />
    </div>
    <PieChartMolecule class="mt-5" :data="chartData" :options="chartOptions" />
  </div>
</template>

<script>
import OverMetricItemMolecule from "@/components/molecules/OverMetricItemMolecule.vue";
import PieChartMolecule from "@/components/molecules/PieChartMolecule.vue";

export default {
  components: { OverMetricItemMolecule, PieChartMolecule },
  name: "DashBoardView",
  data() {
    return {
      chartData: {
        labels: ["Doanh thu từ cây", "Doanh thu từ chậu"],
        datasets: [
          {
            backgroundColor: ["red", "green"],
            data: [30, 40],
          },
        ],
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
      },
    };
  },
  methods: {},
};
</script>

<style>
</style>