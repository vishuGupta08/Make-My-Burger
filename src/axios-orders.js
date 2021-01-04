import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://burger-53a17-default-rtdb.firebaseio.com/',

});

export default instance