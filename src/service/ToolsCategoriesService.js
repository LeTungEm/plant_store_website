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
}

export default new ToolsCategoriesService();