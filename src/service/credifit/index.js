import { credifitNestApi } from './../config';
import axios from 'axios';
//import  router from './../router';
//var showAlert = true

const creadifitService = axios.create({
  baseURL: credifitNestApi, // service base_url,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
});

export default creadifitService;
