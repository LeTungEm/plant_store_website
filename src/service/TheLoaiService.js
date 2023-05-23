import axios from "axios";

const PRODUCT_API_URL =
  "https://webbooksstore.000webhostapp.com/Controllers/TheLoaiController.php";

class TheLoaiService {

  getAll() {
    return axios.get(`${PRODUCT_API_URL}`, {
      params: { action: "getAll" },
    });
  }

  getByID(matheloai) {
    return axios.get(`${PRODUCT_API_URL}`, {
      params: {
        action: "getByID",
        matheloai: matheloai,
      },
    });
  }
  insertTheLoai(tentheloai) {
    return axios.get(`${PRODUCT_API_URL}`, {
      params: {
        action: "insertTheLoai",
        tentheloai: tentheloai,
      },
    });
  }

  deleteTheLoai(matheloai) {
    return axios.get(`${PRODUCT_API_URL}`, {
      params: {
        action: "deleteTheLoai",
        matheloai: matheloai,
      },
    });
  }

  updateTheLoai(tentheloai, matheloai) {
    return axios.get(`${PRODUCT_API_URL}`, {
      params: {
        action: "updateTheLoai",
        tentheloai: tentheloai,
        matheloai: matheloai,
      },
    });
  }
}

export default new TheLoaiService();
