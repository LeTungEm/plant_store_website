import axios from "axios";

const PRODUCT_API_URL =
    "https://webbalo.online/data/Controllers/ProductsController.php";

class DocGiaSDTService {

    getAll() {
        return axios.get(`${PRODUCT_API_URL}`, {
            params: {
                action: "getAll"
            },
        });
    }

    getByID(iddocgia) {
        return axios.get(`${PRODUCT_API_URL}`, {
            params: {
                action: "getByID",
                iddocgia: iddocgia,
            },
        });
    }

    insertDocGiaSDT(sdt, iddocgia) {
        return axios.get(`${PRODUCT_API_URL}`, {
            params: {
                action: "insertDocGiaSDT",
                sdt: sdt,
                iddocgia: iddocgia,
            },
        });
    }

    deleteDocGiaSDT(iddocgia) {
        return axios.get(`${PRODUCT_API_URL}`, {
            params: {
                action: "deleteDocGiaSDT",
                iddocgia: iddocgia,
            },
        });
    }

    deleteOneSDT(iddocgia, sdt) {
        return axios.get(`${PRODUCT_API_URL}`, {
            params: {
                action: "deleteOneSDT",
                iddocgia: iddocgia,
                sdt: sdt,
            },
        });
    }

    updateDocGiaSDT(sdt, iddocgia) {
        return axios.get(`${PRODUCT_API_URL}`, {
            params: {
                action: "updateDocGiaSDT",
                sdt: sdt,
                iddocgia: iddocgia,
            },
        });
    }
}

export default new DocGiaSDTService();