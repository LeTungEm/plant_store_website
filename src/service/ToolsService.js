import axios from "axios";

const PRODUCT_API_URL =
    "http://localhost/LeTungEm/plant_store_api__php/api/Controllers/ToolsController.php";

class ToolsService {

    getAllActive() {
        let formData = new FormData();
        formData.append('action', 'getByStatus');
        return axios.post(`${PRODUCT_API_URL}`, formData);
    }

    getBriefInfo() {
        let formData = new FormData();
        formData.append('action', 'getBriefInfo');
        return axios.post(`${PRODUCT_API_URL}`, formData);
    }
    getVariantsByIds(arrId) {
        let formData = new FormData();
        formData.append('action', 'getVariantsByIds');
        formData.append('arrId', JSON.stringify(arrId));
        return axios.post(`${PRODUCT_API_URL}`, formData);
    }

    getDetail(toolSlug) {
        let formData = new FormData();
        formData.append('action', 'detail');
        formData.append('toolSlug', toolSlug);
        return axios.post(`${PRODUCT_API_URL}`, formData);
    }

    search(search) {
        let formData = new FormData();
        formData.append('action', 'search');
        formData.append('search', search);
        return axios.post(`${PRODUCT_API_URL}`, formData);
    }

    getAll() {
        let formData = new FormData();
        formData.append('action', 'getAll');
        return axios.post(`${PRODUCT_API_URL}`, formData);
    }

    setToolStatus(status, toolId) {
        let formData = new FormData();
        formData.append('action', 'setToolStatus');
        formData.append('status', status);
        formData.append('toolId', toolId);
        return axios.post(`${PRODUCT_API_URL}`, formData);
    }

    isSlugExist(toolSlug) {
        let formData = new FormData();
        formData.append('action', 'isSlugExist');
        formData.append('toolSlug', toolSlug);
        return axios.post(`${PRODUCT_API_URL}`, formData);
    }

    insertTool(name, slug, description, status, image, supplier_id) {
        let formData = new FormData();
        formData.append('action', 'insertTool');
        formData.append('name', name);
        formData.append('slug', slug);
        formData.append('description', description);
        formData.append('status', status);
        formData.append('image', image);
        formData.append('supplier_id', supplier_id);
        return axios.post(`${PRODUCT_API_URL}`, formData);
    }


    // getNewPlants() {
    //     return axios.get(`${PRODUCT_API_URL}/new`);
    // }
}

export default new ToolsService();