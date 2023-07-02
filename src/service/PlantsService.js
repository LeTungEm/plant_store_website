import axios from "axios";

const PRODUCT_API_URL =
    "http://localhost/LeTungEm/plant_store_api__php/api/Controllers/PlantsController.php";

class PlantsService {

    getAll() {
        let formData = new FormData();
        formData.append('action', 'getAll');
        return axios.post(`${PRODUCT_API_URL}`, formData);
    }

    getAllActive() {
        let formData = new FormData();
        formData.append('action', 'getByStatus');
        return axios.post(`${PRODUCT_API_URL}`, formData);
    }

    getDetail(plantSlug) {
        let formData = new FormData();
        formData.append('action', 'detail');
        formData.append('plantSlug', plantSlug);
        return axios.post(`${PRODUCT_API_URL}`, formData);
    }

    search(search) {
        let formData = new FormData();
        formData.append('action', 'search');
        formData.append('search', search);
        return axios.post(`${PRODUCT_API_URL}`, formData);
    }
}

export default new PlantsService();