import axios from "axios";

const PRODUCT_API_URL =
    "https://webbooksstore.000webhostapp.com/Controllers/DonViCongTacController.php";

class DonViCongTacService {

    getAll() {
        return axios.get(`${PRODUCT_API_URL}`, {
            params: {
                action: "getAll"
            },
        });
    }

    getByID(madonvi) {
        return axios.get(`${PRODUCT_API_URL}`, {
            params: {
                action: "getByID",
                madonvi: madonvi,
            },
        });
    }

    insertDonViCongTac(tendonvi) {
        return axios.get(`${PRODUCT_API_URL}`, {
            params: {
                action: "insertDonViCongTac",
                tendonvi: tendonvi,
            },
        });
    }

    deleteDonViCongTac(madonvi) {
        return axios.get(`${PRODUCT_API_URL}`, {
            params: {
                action: "deleteDonViCongTac",
                madonvi: madonvi,
            },
        });
    }

    updateDonViCongTac(tendonvi, madonvi) {
        return axios.get(`${PRODUCT_API_URL}`, {
            params: {
                action: "updateDonViCongTac",
                tendonvi: tendonvi,
                madonvi: madonvi,
            },
        });
    }

}

export default new DonViCongTacService();