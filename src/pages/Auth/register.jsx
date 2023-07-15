import "../../components/styles/App.css";
import AuthLayout from "../../components/layouts/authLayout";
import FormRegister from "../../components/fragments/FormRegister";

const RegisterPage = () => {
  return (
    <AuthLayout title="Register" type="register">
      <FormRegister />
    </AuthLayout>
  );
};

export default RegisterPage;
