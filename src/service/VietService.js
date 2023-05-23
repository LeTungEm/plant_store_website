import axios from "axios";

const PRODUCT_API_URL =
  "https://webbooksstore.000webhostapp.com/Controllers/VietController.php";

class VietService {

  getAll() {
    return axios.get(`${PRODUCT_API_URL}`, {
      params: { action: "getAll" },
    });
  }

  getByTacGiaID(matg) {
    return axios.get(`${PRODUCT_API_URL}`, {
      params: {
        action: "getByTacGiaID",
        matg: matg,
      },
    });
  }

  getBySachID(masach) {
    return axios.get(`${PRODUCT_API_URL}`, {
      params: {
        action: "getBySachID",
        masach: masach,
      },
    });
  }

  insertViet(matg, masach) {
    return axios.get(`${PRODUCT_API_URL}`, {
      params: {
        action: "insertViet",
        matg: matg,
        masach: masach,
      },
    });
  }

  deleteOne(matg, masach) {
    return axios.get(`${PRODUCT_API_URL}`, {
      params: {
        action: "deleteOne",
        matg: matg,
        masach:masach,
      },
    });
  }

  deleteVietByTacGiaID(matg) {
    return axios.get(`${PRODUCT_API_URL}`, {
      params: {
        action: "deleteVietByTacGiaID",
        matg: matg,
      },
    });
  }
  
  updateVietByTacGiaID(matg, masach,oldMatg,oldMasach) {
    return axios.get(`${PRODUCT_API_URL}`, {
      params: {
        action: "updateVietByTacGiaID",
        matg: matg,
        masach:masach,
        oldMatg:oldMatg,
        oldMasach:oldMasach,
      },
    });
  }
}

export default new VietService();
