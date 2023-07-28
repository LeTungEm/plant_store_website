import axios from "axios";

const PRODUCT_API_URL =
    "http://localhost/LeTungEm/plant_store_api__php/api/Controllers/PlantSetController.php";

class PlantSetService {

    getAll(price, colorId, productType, name, selectedId) {
        let selectedIdJson = JSON.stringify(selectedId);
        let formData = new FormData();
        formData.append('action', 'getAll');
        formData.append('price', price);
        formData.append('colorId', colorId);
        formData.append('productType', productType);
        formData.append('name', name);
        formData.append('selectedId', selectedIdJson);
        return axios.post(`${PRODUCT_API_URL}`, formData);
    }

    insertPlantSet(plantId, plantPrice, listTool) {
        let formData = new FormData();
        let listJson = JSON.stringify(listTool);
        formData.append('action', 'insertPlantSet');
        formData.append('plantId', plantId);
        formData.append('plantPrice', plantPrice);
        formData.append('listTool', listJson);
        return axios.post(`${PRODUCT_API_URL}`, formData);
    }

    insertToolVariant(listVariant) {
        let formData = new FormData();
        let listJson = JSON.stringify(listVariant);
        formData.append('action', 'insertToolVariant');
        formData.append('listVariant', listJson);
        return axios.post(`${PRODUCT_API_URL}`, formData);
    }

    deletePlantSetByPlantId(plantId) {
        let formData = new FormData();
        formData.append('action', 'deletePlantSetByPlantId');
        formData.append('plantId', plantId);
        return axios.post(`${PRODUCT_API_URL}`, formData);
    }

    deletePlantSetByPlantSetId(listPlantSetRemoveId) {
        let formData = new FormData();
        let jsonArrId = JSON.stringify(listPlantSetRemoveId);
        formData.append('action', 'deletePlantSetByPlantSetId');
        formData.append('listPlantSetRemoveId', jsonArrId);
        return axios.post(`${PRODUCT_API_URL}`, formData);
    }

    updatePlantSet(listVariant, plantPrice) {
        let formData = new FormData();
        let jsonArr = JSON.stringify(listVariant);
        formData.append('action', 'updatePlantSet');
        formData.append('listVariant', jsonArr);
        formData.append('plantPrice', plantPrice);
        return axios.post(`${PRODUCT_API_URL}`, formData);
    }

    setStatusByPlantId(status, plantId) {
        let formData = new FormData();
        formData.append('action', 'setStatusByPlantId');
        formData.append('status', status);
        formData.append('plantId', plantId);
        return axios.post(`${PRODUCT_API_URL}`, formData);
    }

    setStatusByToolId(status, toolId) {
        let formData = new FormData();
        formData.append('action', 'setStatusByToolId');
        formData.append('status', status);
        formData.append('toolId', toolId);
        return axios.post(`${PRODUCT_API_URL}`, formData);
    }

    getAvailableQuantity(listPlantSetId) {
        let formData = new FormData();
        let jsonArr = JSON.stringify(listPlantSetId);
        formData.append('action', 'getAvailableQuantity');
        formData.append('listPlantSetId', jsonArr);
        return axios.post(`${PRODUCT_API_URL}`, formData);
    }

    decreateQuantityWhenBuyPlant(plantSetId, quantity) {
        let formData = new FormData();
        formData.append('action', 'decreateQuantityWhenBuyPlant');
        formData.append('plantSetId', plantSetId);
        formData.append('quantity', quantity);
        return axios.post(`${PRODUCT_API_URL}`, formData);
    }
}

export default new PlantSetService();