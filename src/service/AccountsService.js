import { encodeEmail } from "@/assets/js/quickFunction";
import axios from "axios";

const PRODUCT_API_URL = "http://localhost/LeTungEm/plant_store_api__php/api/Controllers/AccountsController.php";

class AccountsService {

    insert(address, gender, birthday, phone, password, name, email, roleId) {
        let formData = new FormData();
        let encodePass = encodeEmail(password);
        formData.append('action', 'insertAccount');
        formData.append('address', address);
        formData.append('gender', gender);
        formData.append('birthday', birthday);
        formData.append('phone', phone);
        formData.append('password', encodePass);
        formData.append('name', name);
        formData.append('email', email);
        formData.append('roleId', roleId);
        return axios.post(`${PRODUCT_API_URL}`, formData);
    }
    update(name, address, phone, gender, birthday, email) {
        let formData = new FormData();
        formData.append('action', 'updateAccount');
        formData.append('name', name);
        formData.append('address', address);
        formData.append('phone', phone);
        formData.append('gender', gender);
        formData.append('birthday', birthday);
        formData.append('email', email);
        return axios.post(`${PRODUCT_API_URL}`, formData);
    }
    isEmailExists(email) {
        let formData = new FormData();
        formData.append('action', 'isEmailExists');
        formData.append('email', email);
        return axios.post(`${PRODUCT_API_URL}`, formData);
    }
    authenticate(email, password) {
        let formData = new FormData();
        let encodePass = encodeEmail(password);
        formData.append('action', 'authenticate');
        formData.append('email', email);
        formData.append('password', encodePass);
        return axios.post(`${PRODUCT_API_URL}`, formData);
    }
    detailUser(email) {
        let formData = new FormData();
        formData.append('action', 'detail');
        formData.append('email', email);
        return axios.post(`${PRODUCT_API_URL}`, formData);
    }
    // isRemember(){
    //     return axios.get(`${PRODUCT_API_URL}/isRemember`);
    // }

}

export default new AccountsService();