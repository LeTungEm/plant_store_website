import axios from "axios";

const PRODUCT_API_URL =
    "http://localhost/LeTungEm/plant_store_api__php/api/Controllers/PlantsCategoriesController.php";

class PlantsCategoriesService {

    getByCategoriesSlug(categorySlug) {
        let formData = new FormData();
        formData.append('action', 'getByCategoriesSlug');
        formData.append('categorySlug', categorySlug);
        return axios.post(`${PRODUCT_API_URL}`, formData);
    }

    insertPlantCategories(plantId, listCategory = []) {
        let jsonArr = JSON.stringify(listCategory);
        let formData = new FormData();
        formData.append('action', 'insertPlantCategories');
        formData.append('plantId', plantId);
        formData.append('listCategory', jsonArr);
        return axios.post(`${PRODUCT_API_URL}`, formData);
    }

    updatePlantCategoriesByPlantId(plantId, listCategory = []) {
        let jsonArr = JSON.stringify(listCategory);
        let formData = new FormData();
        formData.append('action', 'updatePlantCategoriesByPlantId');
        formData.append('plantId', plantId);
        formData.append('listCategory', jsonArr);
        return axios.post(`${PRODUCT_API_URL}`, formData);
    }

    deletePlantCategoriesByPlantId(plantId) {
        let formData = new FormData();
        formData.append('action', 'deletePlantCategoriesByPlantId');
        formData.append('plantId', plantId);
        return axios.post(`${PRODUCT_API_URL}`, formData);
    }
}

export default new PlantsCategoriesService();