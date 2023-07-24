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

    <LoadingAtom :status="loadingStatus" />
  </div>
</template>

<script>
import PlantFormMolecule from "@/components/molecules/PlantFormMolecule.vue";
import PlantSetFormMolecule from "@/components/molecules/PlantSetFormMolecule.vue";
import PlantsService from "@/service/PlantsService";
import PlantSetService from "@/service/PlantSetService";
import UploadFile from "@/service/UploadFile";
import PlantsCategoriesService from "@/service/PlantsCategoriesService";
import LoadingAtom from "@/components/atoms/LoadingAtom.vue";
import { mapActions } from "vuex";

export default {
  name: "PlantsEditerView",
  data() {
    return {
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
    LoadingAtom,
  },
  methods: {
    ...mapActions(["showNotification"]),

    async savePlant(toolVariants, arrayImage) {
      let slug = this.$route.params.slug;
      let arrTool = JSON.parse(toolVariants);
      this.toolVariants = arrTool;
      this.arrayImage = arrayImage;
      this.loadingStatus = true;
      await this.uploadPlantImage();
      if (slug == 0) {
        // insert
        let insertResult = await this.insertPlant();
        if (insertResult) {
          this.$router.push("/quan-ly/quan-ly-cay");
        }
      } else {
        // update
        await this.updatePlant();
        await this.updatePlantCategoriesByPlantId();
        await this.insertPlantSet(this.plant.plant_id, this.plant.price);
        this.loadingStatus = false;
        this.$router.push("/quan-ly/quan-ly-cay");
      }
    },
    async uploadPlantImage() {
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
        let result = await UploadFile.uploadImage(arrBlob, arrName);
        if(result.data.message == false){
          this.showNotification(['Tải ảnh thất bại !!!', true]);

        }
      }
    },
    async updatePlant() {
      await PlantsService.updatePlant(
        this.plant.name,
        this.plant.slug,
        this.plant.price,
        this.plant.description,
        this.plant.fun_fact,
        this.plant.status,
        this.plant.image,
        this.plant.light,
        this.plant.pet_friendly,
        this.plant.water,
        this.plant.sad_plant_signs,
        this.plant.supplier_id,
        this.plant.quantity,
        this.plant.plant_id
      );
    },
    async insertPlant() {
      let result = false;
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
      if (this.toolVariants.length > 0) {
        await PlantSetService.insertPlantSet(
          plantId,
          plantPrice,
          this.toolVariants
        );
      }
    },

    async insertCategories(plantId, listCategories) {
      await PlantsCategoriesService.insertPlantCategories(
        plantId,
        listCategories
      );
    },

    async updatePlantCategoriesByPlantId() {
      await PlantsCategoriesService.updatePlantCategoriesByPlantId(
        this.plant.plant_id,
        this.pickedCategories
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
    },
  },
};
</script>

<style>
</style>