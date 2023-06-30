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
}

export default new PlantsCategoriesService();