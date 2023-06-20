import axios from "axios";

const PRODUCT_API_URL = "http://localhost:3000/accounts";

class AccountsService {

    insert(address, gender, birthday, phone, password, name, email, roleId) {
        return axios.post(`${PRODUCT_API_URL}`, {
            address: address,
            gender: gender,
            birthday: birthday,
            phone: phone,
            password: password,
            name: name,
            email: email,
            roleId: roleId
        });
    }
    isEmailExists(email) {
        return axios.post(`${PRODUCT_API_URL}/email/exists`, {
            email: email
        });
    }
    authenticate(email, password) {
        return axios.post(`${PRODUCT_API_URL}/authenticate`, {
            email: email,
            password: password
        });
    }

}

export default new AccountsService();