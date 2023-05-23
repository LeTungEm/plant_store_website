import axios from "axios";

const PRODUCT_API_URL =
  "https://webbooksstore.000webhostapp.com/Controllers/ThongBaoController.php";

class ThongBaoService {

  getAll() {
    return axios.get(`${PRODUCT_API_URL}`, {
      params: { action: "getAll" },
    });
  }

  getByID(mathongbao) {
    return axios.get(`${PRODUCT_API_URL}`, {
      params: {
        action: "getByID",
        mathongbao: mathongbao,
      },
    });
  }
  insertThongBao(tieude,noidung,ngaydang) {
    return axios.get(`${PRODUCT_API_URL}`, {
      params: {
        action: "insertThongBao",
        tieude: tieude,
        noidung: noidung,
        ngaydang: ngaydang,
      },
    });
  }

  deleteThongBao(mathongbao) {
    return axios.get(`${PRODUCT_API_URL}`, {
      params: {
        action: "deleteThongBao",
        mathongbao: mathongbao,
      },
    });
  }

  updateThongBao(tieude,noidung,ngaydang,mathongbao) {
    return axios.get(`${PRODUCT_API_URL}`, {
      params: {
        action: "updateThongBao",
        tieude: tieude,
        noidung: noidung,
        ngaydang: ngaydang,
        mathongbao: mathongbao,
      },
    });
  }
}

export default new ThongBaoService();
