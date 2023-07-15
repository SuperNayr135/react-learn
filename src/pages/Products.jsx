import CommonButton from "../components/commonButton";
import CardProduct from "../components/fragments/CardProduct";
// import { product } from "../assets/product";
import { useEffect, useState } from "react";
import { getFakeProduct } from "../services/getProductApi.service";
import { getUsername } from "../services/auth.service";
import { data } from "autoprefixer";

const ProductsPage = () => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [cart, setCart] = useState([]);
  const [fakeProduct, setFakeProduct] = useState([]);
  const [username, setUsername] = useState("");

  // useEffect(() => {
  //   getFakeProduct().then((item) => {
  //     setFakeProduct(item);
  //   });
  // }, []);

  useEffect(() => {
    const token = localStorage.getItem("token");
    getFakeProduct((data) => {
      setFakeProduct(data);
    });

    if (token) {
      setUsername(getUsername(token));
    } else {
      window.location.href = "/login";
    }
  }, []);

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart")) || []);
  }, []);

  useEffect(() => {
    if (cart.length > 0 && fakeProduct.length > 0) {
      const sum = cart.reduce((acc, item) => {
        const products = fakeProduct.find((product) => product.id === item.id);
        return (acc += products.price * item.qty);
      }, 0);
      setTotalPrice(sum);
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart, fakeProduct]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  const handleAddToCart = (id, title, price) => {
    if (cart.find((item) => item.id === id)) {
      setCart(
        cart.map((item) =>
          item.id === id ? { ...item, qty: item.qty + 1 } : item
        )
      );
    } else {
      setCart([
        ...cart,
        {
          id: id,
          title: title,
          price: price,
          qty: 1,
        },
      ]);
    }
  };

  const handleReduceFromCart = (id) => {
    if (cart.find((item) => item.id === id)) {
      setCart(
        cart.map((item) =>
          item.id === id ? { ...item, qty: item.qty - 1 } : item
        )
      );
    }
  };

  const handleRemoveFromCart = (id) => {
    if (cart.find((item) => item.id === id)) {
      const remove = cart.filter((item) => item.id !== id);
      setCart(remove);
    }
  };

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
      <div className="flex items-center justify-end gap-4 px-2 py-2 bg-sky-600 h-content">
        {username}
        <CommonButton width="w-content" onClick={handleLogout}>
          Logout
        </CommonButton>
      </div>

      <div className="flex ">
        <div className="flex flex-wrap justify-center w-3/4 gap-4 py-5 ">
          {fakeProduct.length > 0 &&
            fakeProduct.map((product) => (
              <CardProduct key={product.id}>
                <CardProduct.Header src={product.image} />
                <CardProduct.Body title={product.title}>
                  {product.description}
                </CardProduct.Body>
                <CardProduct.Footer
                  id={product.id}
                  title={product.title}
                  price={product.price}
                  qty={product.qty}
                  hancleAddToCart={handleAddToCart}
                />
              </CardProduct>
            ))}
        </div>

        <div className="w-1/4 py-5 mr-4 ">
          <div className="py-6 text-2xl font-bold h-content">Cart</div>

          {fakeProduct.length > 0 &&
            cart.map((product) => (
              <div className="flex flex-col gap-1 py-2" key={product.id}>
                <div className="text-xl">{product.title}</div>
                <div className="text-sm">Warna</div>
                <div className="flex flex-row items-center">
                  <div className="text-xl font-bold">
                    {(product.price * product.qty).toLocaleString("en-US", {
                      style: "currency",
                      currency: "USD",
                    })}
                  </div>
                  <div className="flex flex-row items-center gap-2 mt-2 ml-auto">
                    <CommonButton
                      width="w-content"
                      onClick={() => handleRemoveFromCart(product.id)}
                    >
                      🗑️
                    </CommonButton>
                    <CommonButton
                      width="w-content"
                      onClick={() => handleReduceFromCart(product.id)}
                    >
                      -
                    </CommonButton>
                    <div>{product.qty}</div>
                    <CommonButton
                      width="w-content"
                      onClick={() => handleAddToCart(product.id, product.title)}
                    >
                      +
                    </CommonButton>
                  </div>
                </div>
              </div>
            ))}

          <div className="mt-auto">
            <div className="flex flex-row py-5 text-2xl h-content">
              <div>Price Total</div>
              <div className="ml-auto">
                {totalPrice.toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                })}
              </div>
            </div>
            <CommonButton>Buy (1)</CommonButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
