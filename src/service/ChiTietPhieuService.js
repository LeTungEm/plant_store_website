import axios from "axios";

const PRODUCT_API_URL =
    "https://webbalo.online/data/Controllers/ProductsController.php";

class ChiTietPhieuService {

    getAll() {
        return axios.get(`${PRODUCT_API_URL}`, {
            params: {
                action: "getAll"
            },
        });
    }

    getByID(mads) {
        return axios.get(`${PRODUCT_API_URL}`, {
            params: {
                action: "getByID",
                mads: mads,
            },
        });
    }

    insertChiTietPhieu(soluong, ngatdat, sophieu, masach, iddocgia) {
        return axios.get(`${PRODUCT_API_URL}`, {
            params: {
                action: "insertChiTietPhieu",
                soluong: soluong,
                ngatdat: ngatdat,
                sophieu: sophieu,
                masach: masach,
                iddocgia: iddocgia,
            },
        });
    }

    deleteChiTietPhieu(mads) {
        return axios.get(`${PRODUCT_API_URL}`, {
            params: {
                action: "deleteChiTietPhieu",
                mads: mads,
            },
        });
    }

    updateChiTietPhieu(soluong, ngatdat, sophieu, masach, iddocgia, mads) {
        return axios.get(`${PRODUCT_API_URL}`, {
            params: {
                action: "updateChiTietPhieu",
                soluong: soluong,
                ngatdat: ngatdat,
                sophieu: sophieu,
                masach: masach,
                iddocgia: iddocgia,
                mads: mads,
            },
        });
    }
}

export default new ChiTietPhieuService();