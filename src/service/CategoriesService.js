import axios from "axios";

const PRODUCT_API_URL =
    "http://localhost/LeTungEm/plant_store_api__php/api/Controllers/CategoriesController.php";

class CategoriesService {

    getAll() {
        let formData = new FormData();
        formData.append('action', 'getAll');
        return axios.post(`${PRODUCT_API_URL}`, formData);
    }

    getDisplayCategories() {
        let formData = new FormData();
        formData.append('action', 'getDisplayCategories');
        return axios.post(`${PRODUCT_API_URL}`, formData);
    }

    getSpecialCategories() {
        let formData = new FormData();
        formData.append('action', 'getSpecialCategories');
        return axios.post(`${PRODUCT_API_URL}`, formData);
    }

    getByParentSlug(parentSlug) {
        let formData = new FormData();
        formData.append('action', 'getByParentSlug');
        formData.append('parentSlug', parentSlug);
        return axios.post(`${PRODUCT_API_URL}`, formData);
    }
}

export default new CategoriesService();