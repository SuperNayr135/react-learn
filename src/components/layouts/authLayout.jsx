import { Link } from "react-router-dom";

const AuthLayout = (props) => {
  const { title, children, type } = props;
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-2">
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
