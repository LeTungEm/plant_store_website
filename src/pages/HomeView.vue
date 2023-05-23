<template>
  <h1 class="text-blue-500">home</h1>
  <font-awesome-icon class="text-yellow-400" icon="coffee" />
  <button-atom :title="{text:'name', number:4}">
    <ul>
      <li>hai</li>
      <li>hai</li>
      <li>hai</li>
      <li>hai</li>
    </ul>
  </button-atom>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import ButtonAtom from '@/components/atoms/button/ButtonAtom.vue';


export default {
  name: "HomeView",
  data(){
    return {
      lishBook: [],
      bookTypes: [],
      authors: [],
      writedBy: [],
    };
  },
  components:{
    FontAwesomeIcon,
    ButtonAtom
  },

};
</script>
