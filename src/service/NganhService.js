import axios from "axios";

const PRODUCT_API_URL =
    "https://webbooksstore.000webhostapp.com/Controllers/NganhController.php";

class NganhService {

    getAll() {
        return axios.get(`${PRODUCT_API_URL}`, {
            params: {
                action: "getAll"
            },
        });
    }

    getByID(manganh) {
        return axios.get(`${PRODUCT_API_URL}`, {
            params: {
                action: "getByID",
                manganh: manganh,
            },
        });
    }
    insertNganh(tennganh,manganh){
        return axios.get(`${PRODUCT_API_URL}`,{
            params: {
                action: "insertNganh",
                tennganh: tennganh,
                manganh : manganh,
            },
        });
    }
    deleteNganh(manganh){
        return axios.get(`${PRODUCT_API_URL}`,{
            params :{
                action:"deleteNganh",
                manganh:manganh,
            }
        });
    }
    updateNganh(tennganh, manganh){
        return axios.get(`${PRODUCT_API_URL}`,{
            params: {
                action: "updateNganh",
                tennganh: tennganh,
                manganh : manganh,
            },
        });
    }
}

export default new NganhService();