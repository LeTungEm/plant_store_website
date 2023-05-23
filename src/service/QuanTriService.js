import axios from "axios";

const PRODUCT_API_URL =
  "https://webbalo.online/data/Controllers/ProductsController.php";

class QuanTriService {
  getAll() {
    return axios.get(`${PRODUCT_API_URL}`, {
      params: {
        action: "getAll",
      },
    });
  }

  getByID(id) {
    return axios.get(`${PRODUCT_API_URL}`, {
      params: {
        action: "getByID",
        id: id,
      },
    });
  }
  insertQuanTri(email, matkhau) {
    return axios.get(`${PRODUCT_API_URL}`, {
      params: {
        action: "insertQuanTri",
        email: email,
        matkhau: matkhau,
      },
    });
  }
  deleteQuanTri(id) {
    return axios.get(`${PRODUCT_API_URL}`, {
      params: {
        action: "deleteQuanTri",
        id: id,
      },
    });
  }
  updateQuanTri(email, matkhau, id) {
    return axios.get(`${PRODUCT_API_URL}`, {
      params: {
        action: "updateQuanTri",
        email: email,
        matkhau: matkhau,
        id: id,
      },
    });
  }
}

export default new QuanTriService();
