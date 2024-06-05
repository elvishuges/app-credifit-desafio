import axios from 'axios';
import { credifitNestApi } from '../config';

const credifitAxiosInstance = axios.create({
  baseURL: credifitNestApi,
  timeout: 10000,
  headers: { 'Content-Type': 'application/json' },
});

export default credifitAxiosInstance;
