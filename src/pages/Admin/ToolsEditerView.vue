<template>
  <div class="overflow-y-auto max-h-[85vh]">
    <ToolsFormMolecule
      @toNextForm="toNextForm"
      v-bind:class="isToolsForm ? '' : 'hidden'"
    />
    <ToolsVariantFormMolecule
      @toPreviousForm="toPreviousForm"
      @changeImage="changeImage"
      @changePrice="changePrice"
      @changeQuantity="changeQuantity"
      @createTool="createTool"
      :toolVariants="
        Object.keys(toolData).length > 0 ? toolData.pickedSizes : []
      "
      :toolPrice="Object.keys(toolData).length > 0 ? toolData.toolPrice : 0"
      :toolQuantity="
        Object.keys(toolData).length > 0 ? toolData.toolQuantity : 0
      "
      v-bind:class="isToolsForm ? 'hidden' : ''"
    />
  </div>
</template>

<script>
import { normalizeString } from "@/assets/js/quickFunction";
import ToolsFormMolecule from "@/components/molecules/ToolsFormMolecule.vue";
import ToolsVariantFormMolecule from "@/components/molecules/ToolsVariantFormMolecule.vue";
import UploadFile from "@/service/UploadFile";
import { mapActions } from "vuex";
import ToolsService from "@/service/ToolsService";
import ToolsCategoriesService from "@/service/ToolsCategoriesService";
import PlantSetService from "@/service/PlantSetService";

export default {
  name: "ToolsEditerView",
  data() {
    return {
      isToolsForm: true,
      toolData: {},
    };
  },
  components: {
    ToolsFormMolecule,
    ToolsVariantFormMolecule,
  },
  methods: {
    ...mapActions(["showNotification"]),

    createTool() {
      console.log(this.toolData);
      this.getAllImageObject();
      if (this.$route.params.slug == 0) {
        this.insertTool();
      } else {
        console.log("update");
      }
    },
    insertTool() {
      console.log("insert");
      ToolsService.insertTool(
        this.toolData.toolName,
        this.toolData.toolSlug,
        this.toolData.description,
        this.toolData.status,
        normalizeString(this.toolData.image).replace(/ /g, "-"),
        this.toolData.supplier
      ).then((res) => {
        console.log(res.data);
        if (res.data.message) {
          this.insertCategories(res.data.tool_id);
          this.insertVariant(res.data.tool_id);
        }
      }).finally(() => {
        this.$router.push('/quan-ly/quan-ly-chau')
      })
    },
    insertCategories(toolId) {
      if (this.toolData.pickedCategories.length > 0) {
        ToolsCategoriesService.inserToolCategories(
          toolId,
          this.toolData.pickedCategories
        );
      }
    },
    async insertVariant(toolId) {
      let arrVariant = [];
      await this.toolData.pickedSizes.forEach((size) => {
        size.selfColors.forEach((color) => {
          let objectTool = this.createObject(size, color, toolId);
          arrVariant.push(objectTool);
        });
      });
      PlantSetService.insertToolVariant(arrVariant);
    },
    createObject(size, color, toolId) {
      let image = "default.jpg";
      let price = this.toolData.toolPrice;
      let status = this.toolData.status;
      let colorId = color.color_id;
      let sizeId = size.size_id;
      let quantity = this.toolData.toolQuantity;
      if (color.image) {
        image = color.image;
      }
      if (color.toolPrice) {
        price = color.toolPrice;
      }
      if (color.toolQuantity) {
        quantity = color.toolQuantity;
      }
      return {
        image:  normalizeString(image).replace(/ /g, "-"),
        price: price,
        isSale: 0,
        salePrice: 0,
        status: status,
        plantId: 1,
        toolId: toolId,
        colorId: colorId,
        sizeId: sizeId,
        quantity: quantity,
      };
    },
    async getAllImageObject() {
      let arrBlob = [];
      let arrName = [];
      if (Object.keys(this.toolData.objectImage).length > 0) {
        arrBlob.push(this.toolData.objectImage.blob);
        arrName.push(
          normalizeString(this.toolData.objectImage.name).replace(/ /g, "-")
        );
      }
      let listSize = this.toolData.pickedSizes;
      listSize.forEach((size) => {
        size.selfColors.forEach((color) => {
          if (color.objectImage && Object.keys(color.objectImage).length > 0) {
            arrBlob.push(color.objectImage.blob);
            arrName.push(
              normalizeString(color.objectImage.name).replace(/ /g, "-")
            );
          }
        });
      });

      if (arrBlob.length > 0) {
        let result = await UploadFile.uploadImage(arrBlob, arrName);
        if (result.data.message == false) {
          this.showNotification(["Tải ảnh thất bại !!!", true]);
        }
      }
    },
    changePrice(sizeIndex, colorIndex, value) {
      this.toolData.pickedSizes[sizeIndex].selfColors[colorIndex].toolPrice =
        value;
    },
    changeQuantity(sizeIndex, colorIndex, value) {
      this.toolData.pickedSizes[sizeIndex].selfColors[colorIndex].toolQuantity =
        value;
    },
    changeImage(objectIndex, objectImage) {
      let sizeIndex = objectIndex.sizeIndex;
      let colorIndex = objectIndex.colorIndex;
      console.log(this.toolData.pickedSizes[sizeIndex]);
      this.toolData.pickedSizes[sizeIndex].selfColors[colorIndex].image =
        objectImage.name;
      this.toolData.pickedSizes[sizeIndex].selfColors[colorIndex].objectImage =
        objectImage;
    },
    changeForm() {
      this.isToolsForm = !this.isToolsForm;
    },
    toNextForm(toolData) {
      this.changeForm();
      this.toolData = toolData;
    },
    toPreviousForm() {
      this.changeForm();
    },
  },
};
</script>

<style>
</style>