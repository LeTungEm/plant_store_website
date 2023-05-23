import axios from "axios";

const PRODUCT_API_URL =
  "http://localhost:3000";

class UploadImageService {

  uploadImage(formData) {
    return axios.post(`${PRODUCT_API_URL}/uploadFile`,
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }
    )
  }

  getAll() {
    return axios.get(`${PRODUCT_API_URL}/products`)
  }

  them() {
    return axios.post(`${PRODUCT_API_URL}/products`, ({
      cat_name: "jjjhvhj"
    }),

    )
  }
}

export default new UploadImageService();