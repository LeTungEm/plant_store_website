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
    <LoadingAtom :status="loadingStatus" />
  </div>
</template>

<script>
import PlantFormMolecule from "@/components/molecules/PlantFormMolecule.vue";
import NotificationAtom from "@/components/atoms/NotificationAtom.vue";
import PlantSetFormMolecule from "@/components/molecules/PlantSetFormMolecule.vue";
import PlantsService from "@/service/PlantsService";
import PlantSetService from "@/service/PlantSetService";
import UploadFile from "@/service/UploadFile";
import PlantsCategoriesService from "@/service/PlantsCategoriesService";
import LoadingAtom from "@/components/atoms/LoadingAtom.vue";

export default {
  name: "PlantsEditerView",
  data() {
    return {
      notificationMessage: "",
      notificationStatus: false,
      loadingStatus: false,
      isFinalForm: false,
      pickedPlanters: [],
      objectImage: {},
      pickedCategories: [],
      plant: {},
      toolVariants: [],
      arrayImage: [],
    };
  },
  components: {
    PlantFormMolecule,
    PlantSetFormMolecule,
    NotificationAtom,
    LoadingAtom,
  },
  methods: {
    async savePlant(toolVariants, arrayImage) {
      let slug = this.$route.params.slug;
      let arrTool = JSON.parse(toolVariants);
      this.toolVariants = arrTool;
      this.arrayImage = arrayImage;
      this.uploadPlantImage();
      if (slug == 0) {
        console.log("them cay");
        let insertResult = await this.insertPlant();
        if (insertResult) {
          this.$router.push("/quan-ly/quan-ly-cay");
        }
      } else {
        // update
        console.log("update cay");
        // updatecay
        // updateCategoriesPlant
        // them bien the moi
        console.log(this.pickedCategories);
      }
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
    async insertPlant() {
      console.log("bat dau them");
      let result = false;
      this.loadingStatus = true;
      let resultMessage = await PlantsService.insertPlant(
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
      );

      if (resultMessage.data.message) {
        let plantId = resultMessage.data.plant_id;
        await this.insertPlantSet(plantId, this.plant.price);
        await this.insertCategories(plantId, this.pickedCategories);
        this.loadingStatus = false;
        result = true;
      } else {
        this.loadingStatus = false;
      }
      return result;
    },

    async insertPlantSet(plantId, plantPrice) {
      await PlantSetService.insertPlantSet(
        plantId,
        plantPrice,
        this.toolVariants
      );
    },

    async insertCategories(plantId, listCategories) {
      await PlantsCategoriesService.insertPlantCategories(
        plantId,
        listCategories
      );
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