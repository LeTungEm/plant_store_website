import axios from "axios";

const PRODUCT_API_URL =
    "https://webbooksstore.000webhostapp.com/Controllers/LopController.php";

class LopService {

    getAll() {
        return axios.get(`${PRODUCT_API_URL}`, {
            params: {
                action: "getAll"
            },
        });
    }

    getByID(malop) {
        return axios.get(`${PRODUCT_API_URL}`, {
            params: {
                action: "getByTheLoaiID",
                malop: malop,
            },
        });
    }


    insertLop(tenlop, manganh) {
        return axios.get(`${PRODUCT_API_URL}`, {
            params: {
                action: "insertLop",
                tenlop: tenlop,
                manganh: manganh,
            },
        });
    }

    deleteLop(malop) {
        return axios.get(`${PRODUCT_API_URL}`, {
            params: {
                action: "deleteLop",
                malop: malop,
            },
        });
    }

    updateLop(tenlop, manganh, malop) {
        return axios.get(`${PRODUCT_API_URL}`, {
            params: {
                action: "updateLop",
                tenlop: tenlop,
                manganh: manganh,
                malop: malop,
            },
        });
    }

}

export default new LopService();