<template>
  <ul
    class="flex justify-center [&>*]:mr-5 text-md [&>*]:border [&>*]:border-green-800 [&>*]:rounded-full [&>*]:w-5 [&>*]:h-5 [&>*]:flex [&>*]:justify-center [&>*]:items-center md:[&>*]:w-7 md:[&>*]:h-7"
  >
    <li class="hover:bg-blue-700">
      <font-awesome-icon class="text-[10px] md:text-sm" :icon="['fab', 'facebook-f']" />
    </li>
    <li class="hover:bg-sky-500">
      <font-awesome-icon class="text-[10px] md:text-sm" :icon="['fab', 'twitter']" />
    </li>
    <li class="hover:bg-yellow-500">
      <font-awesome-icon class="text-[10px] md:text-sm" :icon="['fab', 'instagram']" />
    </li>
  </ul>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export default {
  name: "SocialMolecule",
  components: {
    FontAwesomeIcon,
  },
};
</script>

<style>
</style>