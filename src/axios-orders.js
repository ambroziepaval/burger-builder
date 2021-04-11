import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-my-burger-b4de7-default-rtdb.firebaseio.com/',
});

export default instance;
