import axios from "axios";

const PRODUCT_API_URL =
  "http://localhost:3000";

class UploadFileService {

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
}

export default new UploadFileService();