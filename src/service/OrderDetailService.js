import axios from "axios";

const PRODUCT_API_URL =
    "http://localhost/LeTungEm/plant_store_api__php/api/Controllers/OrderDetailController.php";

class OrderDetailService {

    createOrderDetail(orderId, orderDetail) {
        let formData = new FormData();
        formData.append('action', 'insertOrderDetail');
        formData.append('orderId', orderId);
        formData.append('orderDetail', JSON.stringify(orderDetail));
        return axios.post(`${PRODUCT_API_URL}`, formData);
    }

    getByOrderId(orderId) {
        let formData = new FormData();
        formData.append('action', 'getByOrderId');
        formData.append('orderId', orderId);
        return axios.post(`${PRODUCT_API_URL}`, formData);
    }
}

export default new OrderDetailService();