import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import CommonButton from "./../commonButton";
import { addToCart } from "../../redux/slices/cartSlices";
import {
  useTotalPriceDispatch,
  useTotalPrice,
} from "../../context/TotalPriceContext";
import { useTotalCart } from "../../context/TotalCart";

const Cart = (props) => {
  const { fakeProduct } = props;
  const cart = useSelector((state) => state.cart.data);
  const dispatchAddToCart = useDispatch();
  const dispatchUseTotalPrice = useTotalPriceDispatch();
  const totalPrice = useTotalPrice();
  const { totalCart, setTotalCart } = useTotalCart();
  // const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    if (cart.length > 0 && fakeProduct.length > 0) {
      const sum = cart.reduce((acc, item) => {
        const products = fakeProduct.find((product) => product.id === item.id);
        return (acc += products.price * item.qty);
      }, 0);
      // setTotalPrice(sum);
      dispatchUseTotalPrice({
        type: "UPDATE",
        payload: {
          total: sum,
        },
      });
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart, fakeProduct]);

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

  return (
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
                  onClick={() =>
                    dispatchAddToCart(
                      addToCart({
                        id: product.id,
                        price: product.price,
                        qty: 1,
                        title: product.title,
                      })
                    )
                  }
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
            {totalPrice.total.toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
            })}
          </div>
        </div>
        <CommonButton>Buy ({totalCart})</CommonButton>
      </div>
    </div>
  );
};

export default Cart;
