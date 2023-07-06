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
}

export default new PlantSetService();