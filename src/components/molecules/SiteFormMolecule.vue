<template>
  <form>
    <div class="flex mb-5">
      <select
        v-model="city"
        class="border w-full outline-0 focus:outline-2 focus:outline-green-700 py-1 lg:py-2 px-2 lg:px-4"
      >
        <option
          v-for="(site, index) in sites"
          :key="site.code"
          :value="{ city: site.name, index: index }"
        >
          {{ site.name }}
        </option>
      </select>
    </div>
    <div class="flex mb-5">
      <select
        v-model="district"
        class="border w-full outline-0 focus:outline-2 focus:outline-green-700 py-1 lg:py-2 px-2 lg:px-4"
      >
        <option
          v-for="(district, index) in districts"
          :key="district.code"
          :value="{ district: district.name, index: index }"
        >
          {{ district.name }}
        </option>
      </select>
    </div>
    <div class="flex mb-5">
      <select
        v-model="ward"
        class="border w-full outline-0 focus:outline-2 focus:outline-green-700 py-1 lg:py-2 px-2 lg:px-4"
      >
        <option
          v-for="(ward, index) in wards"
          :key="ward.code"
          :value="{ ward: ward.name, index: index }"
        >
          {{ ward.name }}
        </option>
      </select>
    </div>
    <div class="flex mb-5">
      <input
        placeholder="Địa chỉ cụ thể"
        class="border w-full outline-0 focus:outline-2 focus:outline-green-700 py-1 lg:py-2 px-2 lg:px-4"
        type="text"
      />
    </div>
  </form>
</template>

<script>
import SiteService from "@/service/SiteService";
export default {
  name: "SiteFormMolecule",
  data() {
    return {
      sites: [],
      city: {},
      districts: [],
      district: {},
      wards: [],
      ward: {},
    };
  },
  watch: {
    city: function () {
      this.getAllDistricts();
    },
    district: function () {
      this.getAllWards();
    },
  },
  methods: {
    getAllSite() {
      SiteService.getAll().then((res) => {
        this.sites = res.data;
        this.city = { city: res.data[0].name, index: 0 };
      });
    },

    getAllDistricts() {
      let cityIndex = this.city.index;
      this.districts = this.sites[cityIndex].districts;
      if (this.districts.length > 0) {
        this.district = { district: this.districts[0].name, index: 0 };
      }
    },

    getAllWards() {
      let indexDistrict = this.district.index;
      this.wards = this.districts[indexDistrict].wards;
      if (this.wards.length > 0) {
        this.ward = { ward: this.wards[0].name, index: 0 };
      }
    },
  },
  created() {
    this.getAllSite();
  },
};
</script>

<style>
</style>