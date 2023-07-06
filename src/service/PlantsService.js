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

    insertPlant(name, slug, price, description, score, fun_fact, status, image, light, pet_friendly, water, sad_plant_signs, supplier_id, quantity) {
        let formData = new FormData();
        formData.append('action', 'insertPlant');
        formData.append('name', name);
        formData.append('slug', slug);
        formData.append('price', price);
        formData.append('description', description);
        formData.append('score', score);
        formData.append('fun_fact', fun_fact);
        formData.append('status', status);
        formData.append('image', image);
        formData.append('light', light);
        formData.append('pet_friendly', pet_friendly);
        formData.append('water', water);
        formData.append('sad_plant_signs', sad_plant_signs);
        formData.append('supplier_id', supplier_id);
        formData.append('quantity', quantity);

        return axios.post(`${PRODUCT_API_URL}`, formData);
    }
}

export default new PlantsService();