<template>
  <form>
    <div class="flex mb-5">
      <select
        v-model="city"
        class="border rounded-md w-full outline-0 focus:outline-2 focus:outline-green-700 py-1 lg:py-2 px-2 lg:px-4"
      >
        <option
          v-for="(site, index) in sites"
          :key="site.code"
          :value="{ name: site.name, index: index }"
        >
          {{ site.name }}
        </option>
      </select>
    </div>
    <div class="flex mb-5">
      <select
        v-model="district"
        class="border rounded-md w-full outline-0 focus:outline-2 focus:outline-green-700 py-1 lg:py-2 px-2 lg:px-4"
      >
        <option
          v-for="(district, index) in districts"
          :key="district.code"
          :value="{ name: district.name, index: index }"
        >
          {{ district.name }}
        </option>
      </select>
    </div>
    <div class="flex mb-5">
      <select
        v-model="ward"
        class="border rounded-md w-full outline-0 focus:outline-2 focus:outline-green-700 py-1 lg:py-2 px-2 lg:px-4"
      >
        <option
          v-for="(ward, index) in wards"
          :key="ward.code"
          :value="{ name: ward.name, index: index }"
        >
          {{ ward.name }}
        </option>
      </select>
    </div>
    <div class="flex mb-5">
      <input
        v-model="additionAddress"
        placeholder="Số nhà, đường,..."
        class="border rounded-md w-full outline-0 focus:outline-2 focus:outline-green-700 py-1 lg:py-2 px-2 lg:px-4"
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
      additionAddress: "",
      flagCity: true,
      flagDistrict: true,
    };
  },
  props: {
    defaultAddressData: String,
  },
  watch: {
    city: function () {
      if (this.flagCity) {
        this.getAllDistricts();
        this.sumAddress();
      } else {
        this.flagCity = true;
      }
    },
    district: function () {
      if (this.flagDistrict) {
        this.getAllWards();
        this.sumAddress();
      } else {
        this.flagDistrict = true;
      }
    },
    ward: function () {
      this.sumAddress();
    },
    additionAddress: function () {
      this.sumAddress();
    },
  },
  emits: ["changeAddress"],
  methods: {
    sumAddress() {
      let address = [
        this.additionAddress,
        this.ward.name,
        this.district.name,
        this.city.name,
      ].join(", ");
      this.$emit("changeAddress", address);
    },
    getAllSite() {
      SiteService.getAll()
        .then((res) => {
          this.sites = res.data;
          this.city = { name: res.data[0].name, index: 0 };
        })
        .finally(() => {
          this.setAddress();
        });
    },

    getAllDistricts() {
      let cityIndex = this.city.index;
      this.districts = this.sites[cityIndex].districts;
      if (this.districts.length > 0) {
        this.district = { name: this.districts[0].name, index: 0 };
      }
    },

    getAllWards() {
      let indexDistrict = this.district.index;
      this.wards = this.districts[indexDistrict].wards;
      if (this.wards.length > 0) {
        this.ward = { name: this.wards[0].name, index: 0 };
      }
    },
    findCityIndex(cityName) {
      let indexCity = null;
      this.sites.forEach((city, index) => {
        if (city.name == cityName) {
          indexCity = index;
          this.districts = city.districts;
        }
      });
      return indexCity;
    },
    findDistrictIndex(districtName) {
      let indexDistrict = null;
      this.districts.forEach((district, index) => {
        if (district.name == districtName) {
          indexDistrict = index;
          this.wards = district.wards;
        }
      });
      return indexDistrict;
    },
    findWardIndex(wardName) {
      let indexWard = null;
      this.wards.forEach((ward, index) => {
        if (ward.name == wardName) {
          indexWard = index;
        }
      });
      return indexWard;
    },
    setDefaultCity(){
      // 
    },
    setAddress() {
      if (this.defaultAddressData && this.additionAddress == "") {
        let arrAddress = this.defaultAddressData.split(", ");
        let arrLength = arrAddress.length;
        let cityName = arrAddress[--arrLength];
        let districtName = arrAddress[--arrLength];
        let wardName = arrAddress[--arrLength];
        let cityIndex = this.findCityIndex(cityName);
        let districtIndex = this.findDistrictIndex(districtName);
        let wardIndex = this.findWardIndex(wardName);
        if (cityIndex != null) {
          this.flagCity = false;
          this.city = { name: cityName, index: cityIndex };
        }
        if (districtIndex != null) {
          this.flagDistrict = false;
          this.district = { name: districtName, index: districtIndex };
        }
        if (wardIndex != null) this.ward = { name: wardName, index: wardIndex };
        for (let index = 0; index < arrLength; index++) {
          this.additionAddress += arrAddress[index];
          if (index != arrLength - 1) {
            this.additionAddress += ", ";
          }
        }
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