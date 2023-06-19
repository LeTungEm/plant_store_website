import axios from "axios";

const PRODUCT_API_URL = "http://localhost:3000/accounts";

class AccountsService {

    insert(address, gender, birthday, phone, password, status, name, email, roleId) {
        return axios.post(`${PRODUCT_API_URL}`, {
            address: address,
            gender: gender,
            birthday: birthday,
            phone: phone,
            password: password,
            status: status,
            name: name,
            email: email,
            roleId: roleId
        });
    }

}

export default new AccountsService();