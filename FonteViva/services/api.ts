import axios from 'axios';

const api = axios.create({
  baseURL: 'http://10.0.2.2:5129/api/RegistroMedidaApi',
  timeout: 5000,
});

export default api;
