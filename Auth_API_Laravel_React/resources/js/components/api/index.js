import axios from "axios";

const BASE_URL = 'http://127.0.0.1:8000/api';

console.log(axios);

export default {
    loginSubmit: (data) => 
        axios.post(`${BASE_URL}/login`, data, {
            accept: 'application/json',
            "Content-Type": 'multipart/form-data',
        }),

    registerSubmit: (data) => 
        axios.post(`${BASE_URL}/register`, data, {
            accept: 'application/json',
            "Content-Type": 'multipart/form-data',
        }),


}