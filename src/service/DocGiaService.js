import axios from "axios";

const PRODUCT_API_URL =
    "https://webbooksstore.000webhostapp.com/Controllers/DocGiaController.php";

class DocGiaService {

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

    insertDocGia(email, matkhau, hoten, malop, madonvi) {
        return axios.get(`${PRODUCT_API_URL}`, {
            params: {
                action: "insertDocGia",
                email: email,
                matkhau: matkhau,
                hoten: hoten,
                malop: malop,
                madonvi: madonvi,
            },
        });
    }

    deleteDocGia(iddocgia) {
        return axios.get(`${PRODUCT_API_URL}`, {
            params: {
                action: "iddocgia",
                iddocgia: iddocgia,
            },
        });
    }

    updateChiTietPhieu(email, matkhau, hoten, malop, madonvi, iddocgia) {
        return axios.get(`${PRODUCT_API_URL}`, {
            params: {
                action: "updateChiTietPhieu",
                email: email,
                matkhau: matkhau,
                hoten: hoten,
                malop: malop,
                madonvi: madonvi,
                iddocgia: iddocgia,
            },
        });
    }

    checkLogin(email, matkhau) {
        return axios.get(`${PRODUCT_API_URL}`, {
            params: {
                action: "checkLogin",
                email: email,
                matkhau: matkhau,
            },
        });
    }
}

export default new DocGiaService();