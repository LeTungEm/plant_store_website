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
    
    getBySlug(plantSlug) {
        let formData = new FormData();
        formData.append('action', 'getBySlug');
        formData.append('plantSlug', plantSlug);
        return axios.post(`${PRODUCT_API_URL}`, formData);
    }

    getVariantsById(plantId) {
        let formData = new FormData();
        formData.append('action', 'getVariantsById');
        formData.append('plantId', plantId);
        return axios.post(`${PRODUCT_API_URL}`, formData);
    }

    isSlugExist(plantSlug) {
        let formData = new FormData();
        formData.append('action', 'isSlugExist');
        formData.append('plantSlug', plantSlug);
        return axios.post(`${PRODUCT_API_URL}`, formData);
    }

    search(search) {
        let formData = new FormData();
        formData.append('action', 'search');
        formData.append('search', search);
        return axios.post(`${PRODUCT_API_URL}`, formData);
    }

    setPlantStatus(status, plantId) {
        let formData = new FormData();
        formData.append('action', 'setPlantStatus');
        formData.append('status', status);
        formData.append('plantId', plantId);
        return axios.post(`${PRODUCT_API_URL}`, formData);
    }
}

export default new PlantsService();