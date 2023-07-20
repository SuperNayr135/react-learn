import { useParams } from "react-router-dom";
import { getDetailFakeProduct } from "../services/getProductApi.service";
import { useEffect, useState } from "react";
// import InputForm from "../components/input";
// import CommonButton from "../components/commonButton";

const DetailProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    getDetailFakeProduct(id, (data) => {
      setProduct(data);
    });
  }, [id]);

  console.log(product);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white">
      <div className="w-3/4">
        {Object.keys(product).length > 0 && (
          <div class="flex font-sans">
            <div class="flex-none w-48 relative">
              <img
                src={product.image}
                alt={product.title}
                class="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <form class="flex-auto p-6">
              <div class="flex flex-wrap">
                <h1 class="flex-auto text-lg font-semibold text-slate-900">
                  {product.title}
                </h1>
                <div class="text-lg font-semibold text-slate-500">
                  ${product.price}
                </div>
                <div class="w-full flex-none text-sm font-medium text-slate-700 mt-2">
                  Sold {product.rating.count} |⭐{product.rating.rate}
                </div>
              </div>
              <div class="flex items-baseline mt-4 mb-6 pb-6 border-b border-slate-200">
                <div class="space-x-2 flex text-sm text-black">
                  {product.description}
                </div>
              </div>
              <div class="flex space-x-4 mb-6 text-sm font-medium">
                <div class="flex-auto flex space-x-4">
                  <button
                    class="h-10 px-6 font-semibold rounded-md bg-black text-white"
                    type="submit"
                  >
                    Add to Cart
                  </button>
                </div>
                <button
                  class="flex-none flex items-center justify-center w-9 h-9 rounded-md text-slate-300 border border-slate-200"
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
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                    />
                  </svg>
                </button>
              </div>
              <p class="text-sm text-slate-700">
                Free shipping on all continental US orders.
              </p>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default DetailProduct;
