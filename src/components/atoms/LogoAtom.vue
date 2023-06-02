<template>
    <div :onclick="comeToHome" class="text-2xl sm:text-4xl font-bold underline cursor-pointer">TM Plants</div>
</template>

<script>
export default {
  name: "LogoAtom",
  methods:{
    comeToHome(){
      this.$router.push('/');
    }
  }
};
</script>

<style>
</style>