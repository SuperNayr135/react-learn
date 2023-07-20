import { Link } from "react-router-dom";
import { useDarkMode } from "../../context/DarkMode";

const AuthLayout = (props) => {
  const { title, children, type } = props;
  const { isDarkMode, setIsDarkMode } = useDarkMode();

  return (
    <div
      className={`flex flex-col items-center justify-center h-screen gap-2 ${
        isDarkMode && "bg-white text-black"
      }`}
    >
      <button
        className={`absolute rounded right-2 top-2 ${
          isDarkMode && "text-gray-800"
        }`}
        onClick={() => setIsDarkMode(!isDarkMode)}
      >
        {isDarkMode ? "go Dark" : "go Light"}
      </button>
      <h1 className="mb-2 text-5xl">{title}</h1>
      <p className="mb-4 text-sm">Welcome, Please enter your details!</p>
      {children}
      <div className="flex justify-center">
        <p className="mt-2 text-xs">
          {type === "login"
            ? "Don't have an account? "
            : "Already have an account? "}

          {type === "login" && (
            <Link to="/register" className="font-bold text-sky-500">
              Sign up
            </Link>
          )}
          {type === "register" && (
            <Link to="/login" className="font-bold text-sky-500">
              Sign in
            </Link>
          )}
        </p>
      </div>
    </div>
  );
};

export default AuthLayout;
