<template>
  <div>
    <input type="file" :onchange="changeFile" />
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
    };
  },
  methods: {
    changeFile(e) {
      this.img = URL.createObjectURL(e.target.files[0]);
    },
    scale() {
      this.$refs.cropper.zoom(0.5);
    },
    crop() {
      const { canvas } = this.$refs.cropper.getResult();
      canvas.toBlob((blob) => {
        let form = new FormData();
        form.append("file", blob);
        form.append("name", "cute.jpg");
        UploadFile.uploadImage(form);
      }, "image/jpeg");
      this.img = canvas.toDataURL();
    },
  },
};
</script>
<style>
</style>