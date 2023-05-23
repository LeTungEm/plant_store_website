<template>
  <router-view />
  <nav>
    <router-link class="text-lg mr-10 active:text-blue-600" to="/">home</router-link>
    <router-link class="text-lg mr-10 active:text-blue-600" to="/shop">shop</router-link>
    <div class="grid grid-cols-2">..</div>
  </nav>
</template>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;

* {
  font-family: Playfair Display, serif;
}

nav .router-link-exact-active{
  color: rgb(59 130 246);
  font-style: italic;
  font-weight: bolder;
} 
</style>
