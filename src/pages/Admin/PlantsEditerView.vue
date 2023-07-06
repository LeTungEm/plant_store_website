<template>
  <div>
    <PlantFormMolecule
      @toNextForm="changeForm"
      @insertData="insertData"
      v-bind:class="isFinalForm ? 'hidden' : ''"
    />
    <PlantSetFormMolecule
      :planterIds="pickedPlanters"
      :status="isFinalForm"
      :plant="plant"
      @backToPreviousForm="changeForm"
      @savePlant="savePlant"
      v-bind:class="isFinalForm ? '' : 'hidden'"
    />
    <NotificationAtom
      isWarning
      :status="notificationStatus"
      :text="notificationMessage"
    />
  </div>
</template>

<script>
import PlantFormMolecule from "@/components/molecules/PlantFormMolecule.vue";
import NotificationAtom from "@/components/atoms/NotificationAtom.vue";
import PlantSetFormMolecule from "@/components/molecules/PlantSetFormMolecule.vue";
import PlantsService from "@/service/PlantsService";
import PlantSetService from "@/service/PlantSetService";
import UploadFile from "@/service/UploadFile";

export default {
  name: "PlantsEditerView",
  data() {
    return {
      notificationMessage: "",
      notificationStatus: false,
      isFinalForm: false,
      pickedPlanters: [],
      objectImage: {},
      pickedCategories: [],
      plant: {},
      toolVariants: [],
      arrayImage: [],
    };
  },
  components: { PlantFormMolecule, PlantSetFormMolecule, NotificationAtom },
  methods: {
    savePlant(toolVariants, arrayImage) {
      let slug = this.$route.params.slug;
      let arrTool = JSON.parse(toolVariants);
      this.toolVariants = arrTool;
      this.arrayImage = arrayImage;
      this.uploadPlantImage();
      if (slug == 0) {
        console.log("them cay");
        this.insertPlant();
      }
      // this.insertPlantSet(2);
      //
      // console.log(this.toolVariants, "toolVariants");
      this.$router.push("/quan-ly/quan-ly-cay");
    },
    uploadPlantImage() {
      console.log("=====upload image");
      let arrImage = [...this.arrayImage, this.objectImage];
      let arrBlob = [];
      let arrName = [];
      arrImage.forEach((objectImage) => {
        if (Object.keys(objectImage).length > 0) {
          let { blob } = objectImage;
          if (blob) {
            arrBlob.push(blob);
            arrName.push(objectImage.name);
          }
        }
      });
      console.log("blob", arrBlob);
      console.log("name", arrName);

      if (arrBlob.length > 0) {
        UploadFile.uploadImage(arrBlob, arrName).then((res) => {
          if (res.data.message == false) {
            this.showNotification("Tải ảnh thất bại !!!");
          }
        });
      }
    },
    updatePlant() {
      //
    },
    insertPlant() {
      console.log("bat dau them");
      console.log("plant_object", [
        this.plant.name,
        this.plant.slug,
        this.plant.price,
        this.plant.description,
        5,
        this.plant.fun_fact,
        this.plant.status,
        this.plant.image,
        this.plant.light,
        this.plant.pet_friendly,
        this.plant.water,
        this.plant.sad_plant_signs,
        this.plant.supplier_id,
        this.plant.quantity,
      ]);
      PlantsService.insertPlant(
        this.plant.name,
        this.plant.slug,
        this.plant.price,
        this.plant.description,
        5,
        this.plant.fun_fact,
        this.plant.status,
        this.plant.image,
        this.plant.light,
        this.plant.pet_friendly,
        this.plant.water,
        this.plant.sad_plant_signs,
        this.plant.supplier_id,
        this.plant.quantity
      ).then((res) => {
        if (res.data.message) {
          let plantId = res.data.plant_id;
          this.insertPlantSet(plantId, this.plant.price);
        }
      });
    },
    insertPlantSet(plantId, plantPrice) {
      console.log(plantId, "plantId");
      console.log(this.toolVariants, "toolVariants");
      PlantSetService.insertPlantSet(
        plantId,
        plantPrice,
        this.toolVariants
      ).then((res) => {
        console.log(res.data);
      });
    },

    changeForm() {
      this.isFinalForm = !this.isFinalForm;
    },
    insertData(objectImage, pickedCategories, pickedPlanters, plant) {
      this.objectImage = objectImage;
      this.pickedCategories = pickedCategories;
      this.pickedPlanters = pickedPlanters;
      this.plant = plant;
      console.log("objectImage", objectImage);
      console.log("pickedCategories", pickedCategories);
      console.log("pickedPlanters", pickedPlanters);
      console.log("plant", plant);
    },
    showNotification(message) {
      this.notificationMessage = message;
      this.notificationStatus = !this.notificationStatus;
    },
  },
};
</script>

<style>
</style>