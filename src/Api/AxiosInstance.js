import axios from 'axios';


const AxiosInstance = axios.create({
    baseURL: 'http://localhost/BTAG/api', 
    headers: {
      'Content-Type': 'application/json'
    }
  });

  export default AxiosInstance;