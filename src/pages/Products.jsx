import CardProduct from "../components/fragments/CardProduct";
import { useEffect, useState } from "react";
import { getFakeProduct } from "../services/getProductApi.service";
import { useLogin } from "../hooks/useLogin";
import Cart from "../components/fragments/Cart";
import Navbar from "../components/layouts/Navbar";
import { TotalCartProvider } from "../context/TotalCart";

const ProductsPage = () => {
  const [fakeProduct, setFakeProduct] = useState([]);
  useLogin();

  // const [cart, setCart] = useState([
  //   {
  //     id: 3,
  //     price: 55.99,
  //     qty: 1,
  //     title: "Mens Cotton Jacket",
  //   },
  // ]);

  // useEffect(() => {
  //   getFakeProduct().then((item) => {
  //     setFakeProduct(item);
  //   });
  // }, []);

  // useEffect(() => {
  //   setCart(JSON.parse(localStorage.getItem("cart")) || []);
  // }, []);

  useEffect(() => {
    getFakeProduct((data) => {
      setFakeProduct(data);
    });
  }, []);

  // const handleAddToCart = (id, title, price) => {
  //   if (cart.find((item) => item.id === id)) {
  //     setCart(
  //       cart.map((item) =>
  //         item.id === id ? { ...item, qty: item.qty + 1 } : item
  //       )
  //     );
  //   } else {
  //     setCart([
  //       ...cart,
  //       {
  //         id: id,
  //         title: title,
  //         price: price,
  //         qty: 1,
  //       },
  //     ]);
  //   }
  // };

  // const ProductList = () => {
  //   return fakeProduct.map((product, index) => {
  //     return (
  //       <div key={index}>
  //         <CardProduct>
  //           <CardProduct.Header src={product.image} />
  //           <CardProduct.Body title={product.title}>
  //             {product.description}
  //           </CardProduct.Body>
  //           <CardProduct.Footer
  //             id={product.id}
  //             title={product.title}
  //             price={product.price}
  //             qty={product.qty}
  //             hancleAddToCart={handleAddToCart}
  //           />
  //         </CardProduct>
  //       </div>
  //     );
  //   });
  // };

  return (
    <div>
      <TotalCartProvider>
        <Navbar />
        <div className="flex ">
          <div className="flex flex-wrap justify-center w-3/4 gap-4 py-5 ">
            {fakeProduct.length > 0 &&
              fakeProduct.map((product) => (
                <CardProduct key={product.id}>
                  <CardProduct.Header src={product.image} id={product.id} />
                  <CardProduct.Body title={product.title}>
                    {product.description}
                  </CardProduct.Body>
                  <CardProduct.Footer
                    id={product.id}
                    price={product.price}
                    title={product.title}
                  />
                </CardProduct>
              ))}
          </div>
          <Cart fakeProduct={fakeProduct} />
        </div>
      </TotalCartProvider>
    </div>
  );
};

export default ProductsPage;
