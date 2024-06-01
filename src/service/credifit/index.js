import axios from 'axios';
import { credifitNestApi } from '../config';

// Create an Axios instance with custom configuration
const credifitAxiosInstance = axios.create({
  baseURL: credifitNestApi, // Ensure this uses https
  timeout: 10000, // Increased timeout for potential longer requests
  headers: { 'Content-Type': 'application/json' },
});

export default credifitAxiosInstance;
