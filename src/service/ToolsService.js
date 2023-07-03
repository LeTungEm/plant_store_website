import axios from "axios";

const PRODUCT_API_URL =
    "http://localhost/LeTungEm/plant_store_api__php/api/Controllers/ToolsController.php";

class ToolsService {

    getAllActive() {
        let formData = new FormData();
        formData.append('action', 'getByStatus');
        return axios.post(`${PRODUCT_API_URL}`, formData);
    }

    getBriefInfo() {
        let formData = new FormData();
        formData.append('action', 'getBriefInfo');
        return axios.post(`${PRODUCT_API_URL}`, formData);
    }

    getDetail(toolSlug) {
        let formData = new FormData();
        formData.append('action', 'detail');
        formData.append('toolSlug', toolSlug);
        return axios.post(`${PRODUCT_API_URL}`, formData);
    }

    search(search) {
        let formData = new FormData();
        formData.append('action', 'search');
        formData.append('search', search);
        return axios.post(`${PRODUCT_API_URL}`, formData);
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

export default new ToolsService();