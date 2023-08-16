import CardProduct from "../components/fragments/CardProduct";
import { useEffect, useState } from "react";
import { getFakeProduct } from "../services/getProductApi.service";
import { useLogin } from "../hooks/useLogin";
import { Link } from "react-router-dom";
import Cart from "../components/fragments/Cart";
import Navbar from "../components/layouts/Navbar";
import { TotalCartProvider } from "../context/TotalCart";
import { getCategories } from "../services/getProductApi.service";
import { getFakeProductLimit } from "../services/getProductApi.service";

const ProductsPage = () => {
  const [toggle, setToggle] = useState(1);
  const [listCategories, setListCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [limitFakeProduct, setLimitFakeProduct] = useState([]);
  const [fakeProduct, setFakeProduct] = useState([]);
  const [productByCategory, setProductByCategory] = useState([]);
  useLogin();

  useEffect(() => {
    getFakeProduct((data) => {
      setFakeProduct(data);
    });
    getCategories((data) => {
      setListCategories(data);
    });
    getFakeProductLimit((data) => {
      setLimitFakeProduct(data);
    });
  }, []);

  useEffect(() => {
    setProductByCategory([]);
    showProductsByCategory();
  }, [selectedCategory]);

  const showProductsByCategory = () => {
    const filteredProducts = fakeProduct.filter(
      (product) => product.category === selectedCategory
    );
    filteredProducts.forEach((product) => {
      setProductByCategory((current) => [...current, product]);
    });
  };

  const incCarousel = () => {
    if (toggle < 5) {
      setToggle(toggle + 1);
    }
    if (toggle >= 5) {
      setToggle(1);
    }
  };
  const decCarousel = () => {
    if (toggle > 1) {
      setToggle(toggle - 1);
    }
    if (toggle <= 1) {
      setToggle(5);
    }
  };

  return (
    <TotalCartProvider>
      <div className="relative sticky top-0 z-30">
        <Navbar />
      </div>
      <div className="flex justify-center ">
        <div className="w-[80rem] mt-6">
          <div
            // onMouseLeave={() => setIsShown(false)}
            // onMouseEnter={() => setIsShown(true)}
            className="relative z-20 flex flex-col w-max group/list"
          >
            <button
              data-popover-target="popover-bottom"
              data-popover-placement="bottom"
              type="button"
              className={`text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800`}
            >
              {selectedCategory != 0 ? selectedCategory : "Categories"}
              <svg
                className="w-2.5 h-2.5 ml-2.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>
            <div>
              <div
                data-popover
                id="popover-bottom"
                role="tooltip"
                className="absolute z-10 group-hover/list:visible invisible inline-block w-64 text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-100 hover:opacity-100 dark:text-gray-400 dark:border-gray-600 dark:bg-gray-800"
              >
                <ul
                  className="py-2 text-sm text-gray-700 dark:text-gray-200"
                  aria-labelledby="dropdownHoverButton"
                >
                  {listCategories.length > 0 &&
                    listCategories.map((categories) => (
                      <li
                        key={categories}
                        onClick={() => setSelectedCategory(categories)}
                      >
                        <a className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                          {categories}
                        </a>
                      </li>
                    ))}
                  <li onClick={() => setSelectedCategory(0)}>
                    <a className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                      All
                    </a>
                  </li>
                </ul>
                <div data-popper-arrow></div>
              </div>
            </div>
          </div>
          <button className="w-max bg-sky-500 px-5 py-3 rounded-lg hover:bg-sky-800 duration-300 hover:animate-bounce">
            tes button
          </button>

          <div className="flex flex-row gap-6">
            <div className="flex flex-col items-center ">
              <div
                id="default-carousel"
                className="relative z-10 w-full mt-4 "
                data-carousel="slide"
              >
                <div className="relative h-56 overflow-hidden rounded-lg md:h-96 ">
                  {limitFakeProduct.length > 0 &&
                    limitFakeProduct.map((product) => (
                      <Link to={`/product/${product.id}`}>
                        <div
                          className={`${
                            toggle === product.id ? "block" : "hidden"
                          } duration-700 ease-in-out`}
                          data-carousel-item
                          key={product.id}
                        >
                          <img
                            src={product.image}
                            className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 "
                            alt="..."
                          />
                        </div>
                      </Link>
                    ))}
                </div>

                <button
                  type="button"
                  className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                  data-carousel-prev
                  onClick={() => {
                    decCarousel();
                  }}
                >
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg
                      className="w-4 h-4 text-white "
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 6 10"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 1 1 5l4 4"
                      />
                    </svg>
                    <span className="sr-only">Previous</span>
                  </span>
                </button>
                <button
                  type="button"
                  className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                  data-carousel-next
                  onClick={() => {
                    incCarousel();
                  }}
                >
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg
                      className="w-4 h-4 text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 6 10"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 9 4-4-4-4"
                      />
                    </svg>
                    <span className="sr-only">Next</span>
                  </span>
                </button>
              </div>

              <div className="relative grid w-full gap-4 mt-4 h-72 ">
                <div className="relative z-0">
                  <div className="justify-start block h-full max-w-xs p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-lime-500 dark:border-gray-700 dark:hover:bg-gray-700"></div>
                </div>

                <div className="absolute inset-y-0 z-10 flex grid items-center grid-cols-6 gap-4">
                  <div className="flex items-center justify-center h-full ">
                    <p className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      categories
                    </p>
                  </div>
                  {/* <div className="flex items-center justify-center h-full ">
                    <p className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      categories
                    </p>
                  </div> */}

                  {limitFakeProduct.length > 0 &&
                    limitFakeProduct.map((product) => (
                      <CardProduct key={product.id}>
                        <CardProduct.Header
                          src={product.image}
                          id={product.id}
                        />
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
              </div>

              <div className="flex flex-wrap justify-center w-full gap-4 py-6 ">
                {selectedCategory
                  ? productByCategory.length > 0 &&
                    productByCategory.map((product) => (
                      <CardProduct key={product.id}>
                        <CardProduct.Header
                          src={product.image}
                          id={product.id}
                        />
                        <CardProduct.Body title={product.title}>
                          {product.description}
                        </CardProduct.Body>
                        <CardProduct.Footer
                          id={product.id}
                          price={product.price}
                          title={product.title}
                        />
                      </CardProduct>
                    ))
                  : fakeProduct.length > 0 &&
                    fakeProduct.map((product) => (
                      <CardProduct key={product.id}>
                        <CardProduct.Header
                          src={product.image}
                          id={product.id}
                        />
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
            </div>
            {/* <Cart fakeProduct={fakeProduct} /> */}
          </div>
        </div>
      </div>
    </TotalCartProvider>
  );
};

export default ProductsPage;
