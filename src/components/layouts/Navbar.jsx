import { useLogin } from "./../../hooks/useLogin";
import CommonButton from "../commonButton";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useTotalPrice } from "../../context/TotalPriceContext";
import { useTotalCart } from "../../context/TotalCart";
import { getId } from "../../services/user.service";

const Navbar = () => {
  const id = getId();
  const cart = useSelector((state) => state.cart.data);
  const username = useLogin();
  const totalPrice = useTotalPrice();
  const { totalCart, setTotalCart } = useTotalCart();

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  useEffect(() => {
    const sum = cart.reduce((acc, item) => {
      return acc + item.qty;
    }, 0);
    setTotalCart(sum);
  }, [cart]);

  return (
    <div className="sticky top-0 flex items-center justify-end gap-4 px-2 py-2 bg-sky-600 h-content">
      <Link to={`/profile`}>{username}</Link>
      <div className="p-2.5 bg-gray-800 rounded-lg">
        🛒 {totalCart} | ${totalPrice.total}
      </div>
      <CommonButton width="w-content" onClick={handleLogout}>
        Logout
      </CommonButton>
    </div>
  );
};

export default Navbar;
