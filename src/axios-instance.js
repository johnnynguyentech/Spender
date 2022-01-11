import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://try-spender-default-rtdb.firebaseio.com/'
});

export default instance;