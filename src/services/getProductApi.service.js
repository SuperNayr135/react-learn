import axios from "axios";

const baseUrl = "https://fakestoreapi.com/products";
const baseUrlLimit = "https://fakestoreapi.com/products?limit=5";

export const getFakeProduct = (callback) => {
  // const product = await axios.get(baseUrlLimit);
  axios
    .get(baseUrlLimit)
    .then((res) => {
      callback(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
  // console.log(product.data);

  // return product.data;
};
