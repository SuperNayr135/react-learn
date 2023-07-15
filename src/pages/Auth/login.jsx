import "../../components/styles/App.css";
import AuthLayout from "../../components/layouts/authLayout";
import FormLogin from "../../components/fragments/FormLogin";

const LoginPage = () => {
  return (
    <AuthLayout title="Login" type="login">
      <FormLogin />
    </AuthLayout>
  );
};

export default LoginPage;
