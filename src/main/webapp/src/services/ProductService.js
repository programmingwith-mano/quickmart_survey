import axios from 'axios'

const LOGIN_URL = "http://localhost:8080/login";
const REGISTER_URL = "http://localhost:8080/register";

class UserProfileService {

    login(username, password) {
        return axios.get(LOGIN_URL+"?username=" + username+"&password="+password);
    }

    register(userProfile) {
        return axios.post(REGISTER_URL, userProfile);
    }
}


export default new UserProfileService()