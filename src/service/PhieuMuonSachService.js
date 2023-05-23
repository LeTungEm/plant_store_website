import axios from "axios";

const PRODUCT_API_URL =
    "https://webbalo.online/data/Controllers/ProductsController.php";

class PhieuMuonSachService {

    getAll() {
        return axios.get(`${PRODUCT_API_URL}`, {
            params: {
                action: "getAll"
            },
        });
    }

    getByID(sophieu) {
        return axios.get(`${PRODUCT_API_URL}`, {
            params: {
                action: "getByID",
                sophieu: sophieu,
            },
        });
    }
    insertPhieuMuonSach(ngaylap, trangthai){
        return axios.get(`${PRODUCT_API_URL}`,{
            params: {
                action: "insertPhieuMuonSach",
                ngaylap: ngaylap,
                trangthai : trangthai,
            },
        });
    }
    deletePhieuMuonSach(sophieu){
        return axios.get(`${PRODUCT_API_URL}`,{
            params :{
                action:"deletePhieuMuonSach",
                sophieu: sophieu,
            }
        });
    }
    updatePhieuMuonSach(ngaylap, trangthai,sophieu){
        return axios.get(`${PRODUCT_API_URL}`,{
            params: {
                action: "updatePhieuMuonSach",
                ngaylap: ngaylap,
                trangthai:trangthai,
                sophieu:sophieu,
            },
        });
    }
}

export default new PhieuMuonSachService();