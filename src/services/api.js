import axios from 'axios';

const api = axios.create({
   baseURL: 'https://parkman-backend.herokuapp.com'
});

export default api;