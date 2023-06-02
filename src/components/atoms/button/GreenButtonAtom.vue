<template>
  <button class="bg-green-700 py-1 px-2 md:py-2 md:px-6 xl:py-4 xl:px-8 text-white font-bold rounded-sm text-xs md:whitespace-nowrap md:text-lg hover:bg-green-800 duration-200">{{ text }}</button>
</template>

<script>
export default {
    name:"GreenButtonAtom",
    props:{
        text: String,
    }
}
</script>

<style>

</style>