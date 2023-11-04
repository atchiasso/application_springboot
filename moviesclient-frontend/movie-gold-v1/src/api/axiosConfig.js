import axios from 'axios';

export default axios.create({
    baseURL: 'https://dd41-87-231-30-60.ngrok-free.app',
    headers: {"ngrok-skip-browser-warning": "true"}
});