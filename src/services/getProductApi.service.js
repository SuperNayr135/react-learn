import axios from "axios";

const baseUrlProduct = "https://fakestoreapi.com/products";
const baseUrlLimit = "https://fakestoreapi.com/products?limit=5";
const baseUrlCategories = "https://fakestoreapi.com/products/categories";

export const getFakeProduct = (callback) => {
  // const product = await axios.get(baseUrlLimit);
  axios
    .get(baseUrlProduct)
    .then((res) => {
      callback(res.data);
      // console.log(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
  // console.log(product.data);

  // return product.data;
};

export const getFakeProductLimit = (callback) => {
  // const product = await axios.get(baseUrlLimit);
  axios
    .get(baseUrlLimit)
    .then((res) => {
      callback(res.data);
      // console.log(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
  // console.log(product.data);

  // return product.data;
};

export const getDetailFakeProduct = (id, callback) => {
  axios
    .get(`${baseUrlProduct}/${id}`)
    .then((res) => {
      callback(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getCategories = (callback) => {
  axios
    .get(`${baseUrlCategories}`)
    .then((res) => {
      callback(res.data);
      // console.log(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getSpecificCategories = (callback) => {
  axios
    .get(`${baseUrlCategories}`)
    .then((res) => {
      callback(res.data);
      // console.log(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};
