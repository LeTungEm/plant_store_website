import axios from "axios";

const PRODUCT_API_URL =
    "http://localhost/LeTungEm/plant_store_api__php/api/Controllers/ColorsController.php";

class ColorsService {

    getAll() {
        let formData = new FormData();
        formData.append('action', 'getAll');
        return axios.post(`${PRODUCT_API_URL}`, formData);
    }

    getForManager() {
        let formData = new FormData();
        formData.append('action', 'getForManager');
        return axios.post(`${PRODUCT_API_URL}`, formData);
    }
    isNameExist(name) {
        let formData = new FormData();
        formData.append('action', 'isNameExist');
        formData.append('name', name);
        return axios.post(`${PRODUCT_API_URL}`, formData);
    }

    deleteColor(colorId) {
        let formData = new FormData();
        formData.append('action', 'deleteColor');
        formData.append('colorId', colorId);
        return axios.post(`${PRODUCT_API_URL}`, formData);
    }

    createColor(name, description, code) {
        let formData = new FormData();
        formData.append('action', 'createColor');
        formData.append('name', name);
        formData.append('description', description);
        formData.append('code', code);
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