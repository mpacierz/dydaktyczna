

import axios from 'axios';

const instance = axios.create ({
    baseURL: 'https://react-test-app2-default-rtdb.firebaseio.com'
});

export default instance;