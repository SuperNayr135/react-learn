import InputForm from "../../components/input";
import CommonButton from "../../components/commonButton";

const FormRegister = () => {
  return (
    <form className="w-5/12 p-5 border-2 border-purple-600 border-solid rounded-lg">
      <InputForm
        lable="Full Name"
        type="text"
        placeholder="insert your name"
        name="fullname"
      />
      <InputForm
        lable="Email"
        type="email"
        placeholder="name@email.com"
        name="email"
      />
      <InputForm
        lable="Password"
        type="password"
        placeholder="password"
        name="password"
      />
      <InputForm
        lable="Confirm password"
        type="password"
        placeholder="password"
        name="confirm password"
      />
      <div className="mt-2">
        <CommonButton>Register</CommonButton>
      </div>
    </form>
  );
};

export default FormRegister;
