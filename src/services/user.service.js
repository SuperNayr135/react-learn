import axios from "axios";
import jwtDecode from "jwt-decode";

const baseUrl = "https://fakestoreapi.com/users";

export const getId = () => {
  const token = localStorage.getItem("token");
  if (token) {
    const decoded = jwtDecode(token);
    // console.log(decoded.sub);
    return decoded.sub;
  }
};

const idUser = getId();
export const getDetailUser = (callback) => {
  axios
    .get(`${baseUrl}/${idUser}`)
    .then((res) => {
      callback(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getAllUser = (callback) => {
  axios
    .get(`${baseUrl}`)
    .then((res) => {
      callback(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};
