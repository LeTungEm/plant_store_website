<template>
  <div class="md:flex items-center gap-5 mb-5">
    <div>
      <img
        class="border rounded-full max-w-[150px] md:max-w-[200px]"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdTT0dok_f1YY7pmOjgpi7l45CVcAvkl9LFQ&usqp=CAU"
        alt=""
      />
    </div>
    <div>
      <h1 class="text-3xl">{{ name }}</h1>
    </div>
    <!-- <div class="flex-grow">
      <div class="flex flex-wrap items-center justify-between">
        <div
          @click="logout"
          class="flex items-center gap-1 md:gap-5 text-green-700 cursor-pointer"
        >
          <span>Đăng xuất</span>
          <font-awesome-icon
            class="float-right text-lg md:text-xl"
            :icon="['fas', 'arrow-right-from-bracket']"
          />
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
export default {
  name: "OverViewUserProfileMolecule",
  props: {
    name: String,
  },
  methods: {   
  },
};
</script>

<style>
</style>