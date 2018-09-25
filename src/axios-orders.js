import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://reactjs-burger-builder-b4779.firebaseio.com/'
});

export default instance;