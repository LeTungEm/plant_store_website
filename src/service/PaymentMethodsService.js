import axios from "axios";

const PRODUCT_API_URL =
    "http://localhost:3000/payment_methods";

class PaymentMethodsService {

    getAll() {
        return axios.get(`${PRODUCT_API_URL}`);
    }
}

export default new PaymentMethodsService();