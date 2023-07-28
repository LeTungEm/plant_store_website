import axios from "axios";

const PRODUCT_API_URL =
    "http://localhost/LeTungEm/plant_store_api__php/api/Controllers/SizesController.php";

class SizesService {

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

    insertSize(name) {
        let formData = new FormData();
        formData.append('action', 'insertSize');
        formData.append('name', name);
        return axios.post(`${PRODUCT_API_URL}`, formData);
    }

    deleteSize(sizeId) {
        let formData = new FormData();
        formData.append('action', 'deleteSize');
        formData.append('sizeId', sizeId);
        return axios.post(`${PRODUCT_API_URL}`, formData);
    }
}

export default new SizesService();