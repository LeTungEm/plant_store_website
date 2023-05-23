<template>
  <button>
    <h1>{{title.text}}</h1>
    <slot></slot>
  </button>
</template>

<script>
export default {
    name: "ButtonAtom",
    props:{
        title: {
            text: String,
            number: Number
        },
        text:String,
    }
}
</script>

<style>

</style>