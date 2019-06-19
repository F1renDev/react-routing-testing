import axios from 'axios';

/* Creating a custom instance of axios with a pre-defined request URL to the jsonplaceholder API */
const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
});

export default instance;