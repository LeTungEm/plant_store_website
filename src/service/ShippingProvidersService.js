import axios from "axios";

const PRODUCT_API_URL =
    "http://localhost:3000/shipping_providers";

class ShippingProvidersService {

    getAll() {
        return axios.get(`${PRODUCT_API_URL}`);
    }

    checkFeeGHN() {
        const API_TOKEN = 'APITokenSample-ca441e70288cB0515F310742';

        const requestData = {
            pick_province: 'Hà Nội',
            pick_district: 'Quận Hai Bà Trưng',
            province: 'Hà nội',
            district: 'Quận Cầu Giấy',
            address: 'P.503 tòa nhà Auu Việt, số 1 Lê Đức Thọ',
            weight: 1000,
            value: 3000000,
            transport: 'fly',
            deliver_option: 'xteam',
            tags: [1, 7]
        };

        axios.get('https://services.giaohangtietkiem.vn/services/shipment/fee', {
            headers: {
                'Content-Type': 'application/json',
                'Token': API_TOKEN,
                'ShopId': '885'
            },
            params: requestData
        })
            .then(response => {
                console.log('Phí vận chuyển:', response.data.shippingFee);
            })
            .catch(error => {
                console.error('Lỗi khi lấy thông tin phí vận chuyển:', error);
            });
    }
}

export default new ShippingProvidersService();