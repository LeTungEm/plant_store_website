import axios from "axios";

const PRODUCT_API_URL =
    "https://webbooksstore.000webhostapp.com/Controllers/NhaXuatBanController.php";

class NhaXuatBanService {

    getAll() {
        return axios.get(`${PRODUCT_API_URL}`, {
            params: {
                action: "getAll"
            },
        });
    }

    getByID(manxb) {
        return axios.get(`${PRODUCT_API_URL}`, {
            params: {
                action: "getByID",
                manxb: manxb,
            },
        });
    }
    insertNhaXuatBan(tennxb,gioithieu){
        return axios.get(`${PRODUCT_API_URL}`,{
            params: {
                action: "insertNhaXuaXuatBan",
                tennxb:tennxb,
                gioithieu:gioithieu ,
            },
        });
    }
    deleteNhaXuatBan( manxb){
        return axios.get(`${PRODUCT_API_URL}`,{
            params :{
                action:"deleteNhaXuatBan",
                manxb: manxb,
            }
        });
    }
    updateNhaXuatBan(tennxb,gioithieu ,manxb){
        return axios.get(`${PRODUCT_API_URL}`,{
            params: {
                action: "updateNhaXuatBan",
                tennxb:tennxb,
                gioithieu:gioithieu ,
                manxb: manxb,
            },
        });
    }
}

export default new NhaXuatBanService();