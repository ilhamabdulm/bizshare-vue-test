import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://sandbox.bizharedev.id:17001/',
  headers: {
    'Accept-Language': 'id',
    'Content-Type': 'application/json',
  },
});

class FetchApi {
  static async get(param) {
    try {
      const response = await instance.get(param);
      return Promise.resolve(response.data);
    } catch (err) {
      return Promise.reject(err.response);
    }
  }

  static async post(param, body) {
    try {
      const response = await instance.post(param, body);
      return Promise.resolve(response.data);
    } catch (err) {
      return Promise.reject(err.response);
    }
  }
}

export default FetchApi;
