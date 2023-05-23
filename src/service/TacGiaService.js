import axios from "axios";

const PRODUCT_API_URL =
  "https://webbooksstore.000webhostapp.com/Controllers/TacGiaController.php";

class TacGiaService {

    getAll() {
    return axios.get(`${PRODUCT_API_URL}`, {
      params: { action: "getAll" },
    });
  }

  getByID(matg) {
    return axios.get(`${PRODUCT_API_URL}`, {
      params: {
        action: "getByID",
        matg: matg,
      },
    });
  }

  insertTacGia(gioithieu,tentg) {
    return axios.get(`${PRODUCT_API_URL}`, {
      params: {
        action: "insertTacGia", 
        gioithieu: gioithieu, 
        tentg: tentg
      },
    });
  }

  deleteTacGia(matg) {
    return axios.get(`${PRODUCT_API_URL}`, {
      params: {
        action: "deleteTacGia",
        matg: matg,
      },
    });
  }

  updateTacGia(gioithieu,tentg,matg) {
    return axios.get(`${PRODUCT_API_URL}`, {
      params: {
        action: "updateChiTietPhieu",
        gioithieu: gioithieu, 
        tentg: tentg, 
        matg: matg
      },
    });
  }
}

export default new TacGiaService();
