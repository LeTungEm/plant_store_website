<template>
  <form
    class="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10"
    @submit.prevent="update"
  >
    <div>
      <label class="text-gray-500" for="userName">Tên</label>
      <input
        v-model="userInfo.name"
        id="userName"
        class="border rounded-md w-full outline-0 focus:outline-2 focus:outline-green-700 py-1 lg:py-2 px-2 lg:px-4"
        type="text"
      />
    </div>
    <div>
      <label class="text-gray-500" for="gender">Giới tính</label>
      <select
        v-model="userInfo.gender"
        id="gender"
        class="border rounded-md w-full outline-0 focus:outline-2 focus:outline-green-700 py-1 lg:py-2 px-2 lg:px-4"
      >
        <option value="1">Nam</option>
        <option value="0">Nữ</option>
      </select>
    </div>

    <div>
      <label class="text-gray-500" for="email">Email</label>
      <input
        v-model="userInfo.email"
        readonly
        id="email"
        class="border rounded-md w-full outline-0 focus:outline-2 focus:outline-green-700 py-1 lg:py-2 px-2 lg:px-4"
        type="email"
      />
    </div>
    <div>
      <label class="text-gray-500" for="birthday">Ngày sinh</label>
      <input
        v-model="userInfo.birthday"
        id="birthday"
        class="border rounded-md w-full outline-0 focus:outline-2 focus:outline-green-700 py-1 lg:py-2 px-2 lg:px-4"
        type="date"
      />
    </div>
    <div>
      <label class="text-gray-500" for="phone">Số điện thoại</label>
      <input
        v-model="userInfo.phone"
        id="phone"
        class="border rounded-md w-full outline-0 focus:outline-2 focus:outline-green-700 py-1 lg:py-2 px-2 lg:px-4"
        type="text"
      />
    </div>
    <div :onclick="openFormAddress">
      <label class="text-gray-500" for="address">Địa chỉ</label>
      <input
        v-if="!formAddresStatus"
        v-model="userInfo.address"
        id="address"
        class="border rounded-md w-full outline-0 focus:outline-2 focus:outline-green-700 py-1 lg:py-2 px-2 lg:px-4"
        type="text"
      />
      <SiteFormMolecule
        :defaultAddressData="userInfo.address"
        @changeAddress="changeAddress"
        v-if="formAddresStatus"
      />
    </div>
    <GreenButtonAtom
      class="py-2 px-5 w-full md:w-1/2 mx-auto md:col-span-2"
      :text="'Sửa thông tin'"
    />
    <NotificationAtom
      :isWarning="isWarning"
      :status="notificationStatus"
      :text="notificationMessage"
    />
  </form>
</template>

<script>
import { decodeEmail } from "@/assets/js/quickFunction";
import GreenButtonAtom from "@/components/atoms/button/GreenButtonAtom.vue";
import SiteFormMolecule from "@/components/molecules/SiteFormMolecule.vue";
import AccountsService from "@/service/AccountsService";
import NotificationAtom from "../atoms/NotificationAtom.vue";
// import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export default {
  name: "FormUpdateUserMolecule",
  data() {
    return {
      isWarning: false,
      notificationMessage: "",
      notificationStatus: false,
      hiddenPassW: true,
      formAddresStatus: false,
      address: "",
      userInfo: {},
    };
  },
  components: { GreenButtonAtom, SiteFormMolecule, NotificationAtom },
  methods: {
    showNotification(message) {
      this.notificationMessage = message;
      this.notificationStatus = !this.notificationStatus;
    },
    changeAddress(address) {
      this.address = address;
    },
    openFormAddress() {
      this.formAddresStatus = true;
    },
    changePassWStatus() {
      this.hiddenPassW = !this.hiddenPassW;
    },
    detailUser() {
      let encodeEmail = sessionStorage.getItem("EMUR");
      if (encodeEmail) {
        let email = decodeEmail(encodeEmail);
        AccountsService.detailUser(email).then((res) => {
          if (res.data) {
            this.userInfo = res.data;
            this.userInfo.birthday = res.data.birthday.substr(0, 10);
            this.address = res.data.address;
            this.$emit('changeName', res.data.name);
          }
        });
      }
    },
    update() {
      AccountsService.update(
        this.userInfo.name,
        this.address,
        this.userInfo.phone,
        this.userInfo.gender,
        this.userInfo.birthday,
        this.userInfo.email
      )
        .then((res) => {
          if (res.data.message) {
            this.isWarning = false;
            this.showNotification("Sửa thông tin thành công.");
          } else {
            this.isWarning = true;
            this.showNotification("Sửa thông tin không thành công !!!");
          }
        })
        .catch((err) => {
          console.log(err);
          this.isWarning = true;
          this.showNotification("Sửa thông tin không thành công !!!");
        });
    },
  },
  created() {
    this.detailUser();
  },
};
</script>

<style>
</style>