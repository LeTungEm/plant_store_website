<template>
  <div class="border p-5 border-yellow-500 rounded-md">
    <label
      class="border bg-white text-yellow-500 font-bold block rounded-md w-full hover:bg-yellow-500 hover:text-white py-1 lg:py-2 px-2 lg:px-4"
    >
      Thay ảnh
      <input accept="image/*" hidden type="file" :onchange="changeFile" />
    </label>
    <div class="border h-56 lg:h-80 overflow-hidden my-5">
      <cropper
        class="cropper"
        :src="img"
        :stencil-size="{
          width: 120,
          height: 155.3,
        }"
        :auto-zoom="true"
        image-restriction="stencil"
        ref="cropper"
      />
    </div>
    <div class="flex flex-wrap gap-5">
      <button
        class="md:text-lg border rounded-md border-yellow-500 bg-white hover:bg-yellow-500 hover:text-white py-1 px-3"
        @click="crop"
      >
        Cắt ảnh
      </button>
      <button
        class="md:text-lg border rounded-md border-yellow-500 bg-white hover:bg-yellow-500 hover:text-white py-1 px-3"
        @click="zoomIn"
      >
        Phóng to
      </button>
      <button
        class="md:text-lg border rounded-md border-yellow-500 bg-white hover:bg-yellow-500 hover:text-white py-1 px-3"
        @click="zoomOut"
      >
        Thu nhỏ
      </button>
    </div>
  </div>
</template>

<script>
import { Cropper } from "vue-advanced-cropper";
import "vue-advanced-cropper/dist/style.css";
import UploadFile from "@/service/UploadFile";
export default {
  name: "CropImageMolecule",
  components: {
    Cropper,
  },
  data() {
    return {
      img: "",
      imageName: "",
    };
  },
  methods: {
    changeFile(e) {
      this.img = URL.createObjectURL(e.target.files[0]);
      console.log(e.target.files[0].name);
    },
    zoomOut() {
      if (this.img) {
        this.$refs.cropper.zoom(0.5);
      }
    },
    zoomIn() {
      if (this.img) {
        this.$refs.cropper.zoom(1.5);
      }
    },
    crop() {
      if (this.img) {
        const { canvas } = this.$refs.cropper.getResult();
        canvas.toBlob((blob) => {
          UploadFile.uploadImage(blob, "cute.jpg");
        }, "image/jpeg");
        this.img = canvas.toDataURL();
      }
    },
  },
};
</script>
<style>
</style>