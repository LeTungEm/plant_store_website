<template>
  <div class="w-2/3 md:w-1/2">
    <label class="block rounded-lg w-2/3 m-auto py-3 px-6 font-bold border border-green-700 text-green-700 text-center">
      Thay ảnh
      <input accept="image/*" hidden type="file" :onchange="changeFile" />
    </label>
    <div class="h-56 lg:h-80 overflow-hidden my-5">
      <cropper
        class="cropper w-full border"
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
    <button class="mr-5 text-lg" @click="crop">Crop</button>
    <button class="text-lg" @click="scale">Scale</button>
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
    scale() {
      if (this.img) {
        this.$refs.cropper.zoom(0.5);
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