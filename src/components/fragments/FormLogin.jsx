import InputForm from "../../components/input";
import CommonButton from "../../components/commonButton";
import { useEffect, useRef, useState } from "react";
import { login } from "../../services/auth.service";

const FormLogin = () => {
  const [loginFailed, setLoginFailed] = useState("");
  const handleLogin = (event) => {
    event.preventDefault();

    const data = {
      username: event.target.username.value,
      password: event.target.password.value,
    };
    login(data, (status, res) => {
      if (status) {
        localStorage.setItem("token", res);
        window.location.href = "/product";
      } else {
        setLoginFailed(res.response.data);
      }
    });
  };

  const usernameRef = useRef(null);

  useEffect(() => {
    usernameRef.current.focus();
  }, []);

  return (
    <form
      className="w-5/12 p-5 border-2 border-purple-600 border-solid rounded-lg"
      onSubmit={handleLogin}
    >
      <InputForm
        lable="Username"
        type="text"
        placeholder="username"
        name="username"
        ref={usernameRef}
      />
      <InputForm
        lable="Password"
        type="password"
        placeholder="password"
        name="password"
      />
      <div className="mt-2">
        <CommonButton type="submit">Login</CommonButton>
        {loginFailed && (
          <p className="mt-2 text-center text-red-900">{loginFailed}</p>
        )}
      </div>
    </form>
  );
};

export default FormLogin;
