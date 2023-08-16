import { Link } from "react-router-dom";
import CommonButton from "../commonButton";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/slices/cartSlices";

const CardProduct = (props) => {
  const { children } = props;
  return (
    <div className="flex flex-col justify-start max-w-sm bg-gray-800 border border-gray-700 rounded-lg shadow w-44 ">
      {children}
    </div>
  );
};

const Header = (props) => {
  const { id, src, alt } = props;
  return (
    <Link to={`/product/${id}`}>
      <div className="flex justify-center">
        <img src={src} alt={alt} className="w-full h-48 pb-1 rounded-t-lg" />
      </div>
    </Link>
  );
};

const Body = (props) => {
  const { title, children } = props;
  return (
    <div className="h-full px-2 ">
      <a href="">
        <h5 className="text-base font-semibold tracking-tight text-white">
          {title.substring(0, 18)}...
        </h5>
        {/* <p className="text-white text-s">{children.substring(0, 100)}...</p> */}
      </a>
    </div>
  );
};

const Footer = (props) => {
  const { id, title, price } = props;
  const dispatch = useDispatch();
  return (
    <div className="flex flex-wrap items-center justify-between gap-2 px-2 pb-2 ">
      <span className="text-base text-white font-bond">
        {price.toLocaleString("en-US", { style: "currency", currency: "USD" })}
      </span>
      {/* <CommonButton
        width="w-content"
        fontWeight="text-xs"
        onClick={() =>
          dispatch(
            addToCart({
              id: id,
              price: price,
              qty: 1,
              title: title,
            })
          )
        }
      >
        Add to chart
      </CommonButton> */}
    </div>
  );
};

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;

export default CardProduct;
