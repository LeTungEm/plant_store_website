import axios from "axios";

const PRODUCT_API_URL =
    "https://webbalo.online/data/Controllers/ProductsController.php";

class GomCoService {

    getAll() {
        return axios.get(`${PRODUCT_API_URL}`, {
            params: {
                action: "getAll"
            },
        });
    }

    getByTheLoaiID(matheloai) {
        return axios.get(`${PRODUCT_API_URL}`, {
            params: {
                action: "getByTheLoaiID",
                matheloai: matheloai,
            },
        });
    }

    getBySachID(masach) {
        return axios.get(`${PRODUCT_API_URL}`, {
            params: {
                action: "getBySachID",
                masach: masach,
            },
        });
    }

    insertGomCo(matheloai, masach) {
        return axios.get(`${PRODUCT_API_URL}`, {
            params: {
                action: "insertGomCo",
                matheloai: matheloai,
                masach: masach,
            },
        });
    }

    deleteGomCo(matheloai, masach) {
        return axios.get(`${PRODUCT_API_URL}`, {
            params: {
                action: "deleteGomCo",
                matheloai: matheloai,
                masach: masach,
            },
        });
    }

    deleteGomCoByTheLoaiID(matheloai) {
        return axios.get(`${PRODUCT_API_URL}`, {
            params: {
                action: "deleteGomCoByTheLoaiID",
                matheloai: matheloai,
            },
        });
    }

    deleteGomCoByMaSach(masach) {
        return axios.get(`${PRODUCT_API_URL}`, {
            params: {
                action: "deleteGomCoByMaSach",
                masach: masach,
            },
        });
    }

    updateGomCo(matheloai, masach, oldMatheloai, oldMasach) {
        return axios.get(`${PRODUCT_API_URL}`, {
            params: {
                action: "updateGomCo",
                matheloai: matheloai,
                masach: masach,
                oldMatheloai: oldMatheloai,
                oldMasach: oldMasach,
            },
        });
    }

}

export default new GomCoService();