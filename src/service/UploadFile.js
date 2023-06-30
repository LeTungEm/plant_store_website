import axios from "axios";

const PRODUCT_API_URL =
  "http://localhost/LeTungEm/plant_store_api__php/api/Controllers/UploadFileController.php";

class UploadFileService {

  uploadImage(file, fileName) {
    let formData = new FormData();
    formData.append("file", file);
    formData.append("name", fileName);
    return axios.post(`${PRODUCT_API_URL}`,
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