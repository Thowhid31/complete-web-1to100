import axios from "axios";

const facther = axios.create({
    baseURL: 'http://localhost:5000',
    
  });

  export default facther;