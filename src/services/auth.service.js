import axios from "axios";
import jwtDecode from "jwt-decode";

export const login = (data, callback) => {
  axios
    .post("https://fakestoreapi.com/auth/login", data)
    .then((res) => {
      // console.log(res);
      callback(true, res.data.token);
    })
    .catch((res) => {
      callback(false, res);
    });
};

export const getUsername = (token) => {
  const decoded = jwtDecode(token);
  return decoded.user;
};
