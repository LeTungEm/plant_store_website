import axios from "axios";

const PRODUCT_API_URL =
    "http://localhost/LeTungEm/plant_store_api__php/api/Controllers/PlantSetController.php";

class PlantSetService {

    insertPlantSet(plantId, plantPrice, listTool) {
        let formData = new FormData();
        let listJson = JSON.stringify(listTool);
        formData.append('action', 'insertPlantSet');
        formData.append('plantId', plantId);
        formData.append('plantPrice', plantPrice);
        formData.append('listTool', listJson);
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

    updatePlantSet(listVariant) {
        let formData = new FormData();
        let jsonArr = JSON.stringify(listVariant);
        formData.append('action', 'updatePlantSet');
        formData.append('listVariant', jsonArr);
        return axios.post(`${PRODUCT_API_URL}`, formData);
    }

    setStatusByPlantId(status, plantId) {
        let formData = new FormData();
        formData.append('action', 'setStatusByPlantId');
        formData.append('status', status);
        formData.append('plantId', plantId);
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