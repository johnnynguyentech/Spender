import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://try-spender.firebaseio.com/'
});

export default instance;