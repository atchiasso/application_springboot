import axios from 'axios';

export default axios.create({
    baseURL: 'https://9ab5-87-231-30-60.ngrok-free.app',
    headers: {"ngrok-skip-browser-warning": "true"}
});