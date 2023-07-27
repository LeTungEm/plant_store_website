import axios from "axios";

const PRODUCT_API_URL =
    "http://localhost/LeTungEm/plant_store_api__php/api/Controllers/OrderController.php";

class OrderService {

    getAllByAccountId(accountId) {
        let formData = new FormData();
        formData.append('action', 'getAllByAccountId');
        formData.append('accountId', accountId);
        return axios.post(`${PRODUCT_API_URL}`, formData);
    }

    getAll() {
        let formData = new FormData();
        formData.append('action', 'getAll');
        return axios.post(`${PRODUCT_API_URL}`, formData);
    }

    getByOrderId(orderId) {
        let formData = new FormData();
        formData.append('action', 'getByOrderId');
        formData.append('orderId', orderId);
        return axios.post(`${PRODUCT_API_URL}`, formData);
    }

    cancelOrder(orderId) {
        let formData = new FormData();
        formData.append('action', 'cancelOrder');
        formData.append('orderId', orderId);
        return axios.post(`${PRODUCT_API_URL}`, formData);
    }

    createOrder(status, transportFee, nameReceiver, phoneReceiver, addressReceiver, isPay, note, deleteReason, payDate, accountId, couponId, shippingProviderId, paymentMethodId, total) {
        let formData = new FormData();
        formData.append('action', 'insertOrder');
        formData.append('status', status);
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

    updateOrder(transportFee, nameReceiver, phoneReceiver, addressReceiver, isPay, status, note, shippingProviderId, paymentMethodId, total, orderId) {
        let formData = new FormData();
        formData.append('action', 'updateOrder');
        formData.append('transportFee', transportFee);
        formData.append('nameReceiver', nameReceiver);
        formData.append('phoneReceiver', phoneReceiver);
        formData.append('addressReceiver', addressReceiver);
        formData.append('isPay', isPay);
        formData.append('status', status);
        formData.append('note', note);
        formData.append('shippingProviderId', shippingProviderId);
        formData.append('paymentMethodId', paymentMethodId);
        formData.append('total', total);
        formData.append('orderId', orderId);
       
        return axios.post(`${PRODUCT_API_URL}`, formData);
    }
}

export default new OrderService();