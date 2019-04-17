import axios from 'axios';

const api = axios.create({
    baseURL: 'https://xomnistack-backend.herokuapp.com',
});

export default api;

