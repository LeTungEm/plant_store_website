import axios from "axios";

const PRODUCT_API_URL =
    "http://localhost:3000/plants";

class PlantsService {

    getAllActive() {
        return axios.get(`${PRODUCT_API_URL}/active`);
    }

    getDetail(plantSlug) {
        return axios.get(`${PRODUCT_API_URL}/${plantSlug}`);
    }

    search(search){
        return axios.get(`${PRODUCT_API_URL}/search/${search}`);
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

export default new PlantsService();