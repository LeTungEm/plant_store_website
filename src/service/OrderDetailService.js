import axios from "axios";

const PRODUCT_API_URL =
    "http://localhost:3000/order_detail";

class OrderDetailService {

    getAll() {
        return axios.get(`${PRODUCT_API_URL}`);
    }

    createOrderDetail(orderId, orderDetail) {
        return axios.post(`${PRODUCT_API_URL}`, {
            orderId: orderId,
            orderDetail: orderDetail
        });
    }
}

export default new OrderDetailService();