<template>
    <button class="bg-white border-2 border-green-700 py-1 px-2 md:py-2 md:px-6 xl:py-4 xl:px-8 text-green-700 rounded-sm font-bold text-xs md:whitespace-nowrap md:text-lg duration-200 hover:bg-green-700 hover:text-white">{{ text }}</button>
  </template>
  
  <script>
  export default {
      name:"WhiteButtonAtom",
      props:{
          text: String,
      }
  }
  </script>
  
  <style>
  
  </style>