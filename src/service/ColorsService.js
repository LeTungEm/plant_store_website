import axios from "axios";

const PRODUCT_API_URL =
    "http://localhost:3000/colors";

class ColorsService {

    getUsedByPlants() {
        return axios.get(`${PRODUCT_API_URL}/used_by_plants`);
    }

    getUsedByTools() {
        return axios.get(`${PRODUCT_API_URL}/used_by_tools`);
    }

    // getNewPlants() {
    //     return axios.get(`${PRODUCT_API_URL}/new`);
    // }

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

export default new ColorsService();