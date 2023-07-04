import axios from "axios";

const PRODUCT_API_URL =
  "http://localhost/LeTungEm/plant_store_api__php/api/Controllers/UploadFileController.php";

class UploadFileService {

  uploadImage(files = [], fileNames = []) {
    let formData = new FormData();
    files.forEach(file => {
      formData.append("files[]", file);
    })
    fileNames.forEach(fileName => {
      formData.append("names[]", fileName);
    })
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