import axios from "axios";

const PRODUCT_API_URL =
    "http://localhost/LeTungEm/plant_store_api__php/api/Controllers/ColorsController.php";

class ColorsService {

    getAll() {
        let formData = new FormData();
        formData.append('action', 'getAll');
        return axios.post(`${PRODUCT_API_URL}`, formData);
    }

    getUsedByPlants() {
        let formData = new FormData();
        formData.append('action', 'getUsedByPlants');
        return axios.post(`${PRODUCT_API_URL}`, formData);
    }

    getUsedByTools() {
        let formData = new FormData();
        formData.append('action', 'getUsedByTools');
        return axios.post(`${PRODUCT_API_URL}`, formData);
    }
}

export default new ColorsService();