<template>
  <div>
    <hr />
    <DetailPropertyHeaderAtom class="cursor-pointer" :onclick="changeStatus" :text="title" />
    <div class="md:text-xl" v-bind:class="status ? '' : 'hidden'">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import DetailPropertyHeaderAtom from "../atoms/header/DetailPropertyHeaderAtom.vue";
export default {
  name: "DropTextMolecule",
  data() {
    return {
      status: false,
    };
  },
  props: {
    title: String,
    defaultStatus: Boolean,
  },
  methods: {
    changeStatus() {
      this.status = !this.status;
    },
  },
  components: { DetailPropertyHeaderAtom },
  created(){
    if(this.defaultStatus){
      this.status = this.defaultStatus;
    }
  }
};
</script>

<style>
</style>