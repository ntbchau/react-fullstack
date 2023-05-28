import axios from "axios";

const handleLoginApi = (userEmail, userPassword) => {
    //return axios.post('http://localhost:8081/api/login', { email, password });
    return axios.post('http://localhost:8081/api/login', { email: userEmail, password: userPassword });
}

const getAllUsers = (inputId) => {
    return axios.get(`http://localhost:8081/api/get-all-users?id=${inputId}`)
}
export { handleLoginApi, getAllUsers }