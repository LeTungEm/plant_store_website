import axios from "axios";

const PRODUCT_API_URL =
    "http://localhost/LeTungEm/plant_store_api__php/api/Controllers/OrderController.php";

class OrderService {

    // getAll() {
    //     return axios.get(`${PRODUCT_API_URL}`);
    // }

    createOrder(transportFee, nameReceiver, phoneReceiver, addressReceiver, isPay, note, deleteReason, payDate, accountId, couponId, shippingProviderId, paymentMethodId, total) {
        let formData = new FormData();
        formData.append('action', 'insertOrder');
        formData.append('transportFee', transportFee);
        formData.append('nameReceiver', nameReceiver);
        formData.append('phoneReceiver', phoneReceiver);
        formData.append('addressReceiver', addressReceiver);
        formData.append('isPay', isPay);
        formData.append('note', note);
        formData.append('deleteReason', deleteReason);
        formData.append('payDate', payDate);
        formData.append('accountId', accountId);
        formData.append('couponId', couponId);
        formData.append('shippingProviderId', shippingProviderId);
        formData.append('paymentMethodId', paymentMethodId);
        formData.append('total', total);
        return axios.post(`${PRODUCT_API_URL}`, formData);
    }
}

export default new OrderService();