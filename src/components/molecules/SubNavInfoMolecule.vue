<template>
  <ul class="flex justify-center [&>*]:mr-10 text-[10px] md:text-sm items-center">
    <li>
      <font-awesome-icon
        class="text-lime-500"
        :icon="['fas', 'location-dot']"
      />
      <span class="italic">&nbsp;180 Cao Lỗ, phường 4, quận 88, TP HCM</span>
    </li>
    <li>
      <font-awesome-icon class="text-lime-500" :icon="['fas', 'envelope']" />
      <span class="italic">&nbsp;garderia@mail.com</span>
    </li>
  </ul>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export default {
  name: "SubNavInfo",
  components:{
        FontAwesomeIcon
    }
};
</script>

<style>
</style>