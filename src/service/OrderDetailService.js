import axios from "axios";

const PRODUCT_API_URL =
    "http://localhost/LeTungEm/plant_store_api__php/api/Controllers/OrderDetailController.php";

class OrderDetailService {

    // getAll() {
    //     return axios.get(`${PRODUCT_API_URL}`);
    // }

    createOrderDetail(orderId, orderDetail) {
        let formData = new FormData();
        formData.append('action', 'insertOrderDetail');
        formData.append('orderId', orderId);
        formData.append('orderDetail', JSON.stringify(orderDetail));
        return axios.post(`${PRODUCT_API_URL}`, formData);
    }
}

export default new OrderDetailService();