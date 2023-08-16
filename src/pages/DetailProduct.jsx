import { useParams } from "react-router-dom";
import { getDetailFakeProduct } from "../services/getProductApi.service";
import { useEffect, useState } from "react";
import Navbar from "../components/layouts/Navbar";
import { TotalCartProvider } from "../context/TotalCart";
import CommonButton from "../components/commonButton";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/slices/cartSlices";
import { useTotalPrice } from "../context/TotalPriceContext";

const DetailProduct = () => {
  const cart = useSelector((state) => state.cart.data);
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const dispatch = useDispatch();
  // const totalPrice = useTotalPrice();

  useEffect(() => {
    getDetailFakeProduct(id, (data) => {
      setProduct(data);
    });
  }, [id]);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <div>
      <Navbar />

      <div className="flex flex-col items-center justify-center h-screen bg-white">
        <div className="w-3/4">
          {Object.keys(product).length > 0 && (
            <div className="flex font-sans">
              <div className="relative flex-none w-48">
                <img
                  src={product.image}
                  alt={product.title}
                  className="absolute inset-0 object-cover w-full h-full"
                  loading="lazy"
                />
              </div>
              <form className="flex-auto p-6">
                <div className="flex flex-wrap">
                  <h1 className="flex-auto text-lg font-semibold text-slate-900">
                    {product.title}
                  </h1>
                  <div className="text-lg font-semibold text-slate-500">
                    ${product.price}
                  </div>
                  <div className="flex-none w-full mt-2 text-sm font-medium text-slate-700">
                    Sold {product.rating.count} |⭐{product.rating.rate}
                  </div>
                </div>
                <div className="flex items-baseline pb-6 mt-4 mb-6 border-b border-slate-200">
                  <div className="flex space-x-2 text-sm text-black">
                    {product.description}
                  </div>
                </div>
                <div className="flex mb-6 space-x-4 text-sm font-medium">
                  <div className="flex flex-auto space-x-4">
                    <CommonButton
                      width="w-content"
                      fontWeight="text-xs"
                      onClick={() =>
                        dispatch(
                          addToCart({
                            id: product.id,
                            price: product.price,
                            qty: 1,
                            title: product.title,
                          })
                        )
                      }
                    >
                      Add to chart
                    </CommonButton>
                  </div>
                  <button
                    className="flex items-center justify-center flex-none border rounded-md w-9 h-9 text-slate-300 border-slate-200"
                    type="button"
                    aria-label="Like"
                  >
                    <svg
                      width="20"
                      height="20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                      />
                    </svg>
                  </button>
                </div>
                <p className="text-sm text-slate-700">
                  Free shipping on all continental US orders.
                </p>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DetailProduct;
