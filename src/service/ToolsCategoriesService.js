import axios from "axios";

const PRODUCT_API_URL =
    "http://localhost/LeTungEm/plant_store_api__php/api/Controllers/ToolsCategoriesController.php";

class ToolsCategoriesService {

    getByCategoriesId(categoryId) {
        let formData = new FormData();
        formData.append('action', 'getByCategoriesId');
        formData.append('categoryId', categoryId);
        return axios.post(`${PRODUCT_API_URL}`, formData);
    }


    inserToolCategories(toolId, listCategory = []) {
        let jsonArr = JSON.stringify(listCategory);
        let formData = new FormData();
        formData.append('action', 'inserToolCategories');
        formData.append('toolId', toolId);
        formData.append('listCategory', jsonArr);
        return axios.post(`${PRODUCT_API_URL}`, formData);
    }
}

export default new ToolsCategoriesService();