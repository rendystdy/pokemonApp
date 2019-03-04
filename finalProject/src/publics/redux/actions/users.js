import axios from "axios";

export const login = (data) => {
  return {
    type: 'LOGIN_USER',
    payload: axios.post('http://192.168.0.23:3333/api/v1/login', data)
  }
}
