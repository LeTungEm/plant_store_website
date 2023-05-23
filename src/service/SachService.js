import axios from "axios";

const PRODUCT_API_URL =
    "https://webbooksstore.000webhostapp.com/Controllers/SachController.php";

class SachService {

    getAll() {
        return axios.get(`${PRODUCT_API_URL}`, {
            params: {
                action: "getAll"
            },
        });
    }

    getByID(masach) {
        return axios.get(`${PRODUCT_API_URL}`, {
            params: {
                action: "getByID",
                masach: masach,
            },
        });
    }
    insertSach(gioithieu, tensach, photo, giatien, manxb, message){
        return axios.get(`${PRODUCT_API_URL}`,{
            params: {
                action: "insertSach",
                tensach: tensach,
                manxb : manxb,
                gioithieu: gioithieu,
                photo: photo,
                giatien: giatien,
                message:message,
            },
        });
    }
    deleteSach(masach){
        return axios.get(`${PRODUCT_API_URL}`,{
            params :{
                action:"deleteSach",
                masach:masach,
            }
        });
    }
    updateSach(gioithieu, tensach, photo, giatien, manxb, message){
        return axios.get(`${PRODUCT_API_URL}`,{
            params: {
                action: "updateSach",
                tensach: tensach,
                manxb : manxb,
                gioithieu: gioithieu,
                photo: photo,
                giatien: giatien,
                message:message,
            },
        });
    }
}

export default new SachService();