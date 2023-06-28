import axios from "axios";

const PRODUCT_API_URL =
    "http://localhost:3000/order";

class OrderService {

    getAll() {
        return axios.get(`${PRODUCT_API_URL}`);
    }

    createOrder(transportFee, nameReceiver, phoneReceiver, addressReceiver, isPay, note, deleteReason, payDate, accountId, couponId, shippingProviderId, paymentMethodId, total) {
        return axios.post(`${PRODUCT_API_URL}`, {
            transportFee: transportFee,
            nameReceiver: nameReceiver,
            phoneReceiver: phoneReceiver,
            addressReceiver: addressReceiver,
            isPay: isPay,
            note: note,
            deleteReason: deleteReason,
            payDate: payDate,
            accountId: accountId,
            couponId: couponId,
            shippingProviderId: shippingProviderId,
            paymentMethodId: paymentMethodId,
            total: total
        });
    }
}

export default new OrderService();