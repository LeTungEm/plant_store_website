<template>
  <div v-if="status" class="flex-col gap-5 p-5 md:gap-10 md:p-10 relative">
    <OverViewUserProfileMolecule :name="name" />
    <FormUpdateUserMolecule @changeName="changeName" />
  </div>
</template>

<script>
import OverViewUserProfileMolecule from "@/components/molecules/OverViewUserProfileMolecule.vue";
import FormUpdateUserMolecule from "@/components/molecules/FormUpdateUserMolecule.vue";
import { mapActions } from "vuex";

export default {
  name: "UserProfileView",
  data() {
    return {
      status: true,
      name: "",
    };
  },
  components: { OverViewUserProfileMolecule, FormUpdateUserMolecule },
  methods: {
    ...mapActions(["setUserLoginStatus"]),
    changeName(name) {
      this.name = name;
    },
  },
  created() {
    // this.checkLogin();
  },
};
</script>

<style>
</style>
    FormUpdateUserMolecule