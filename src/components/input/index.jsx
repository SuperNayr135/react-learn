import CommonLable from "./commonLable";
import CommonInput from "./commonInput";
import { forwardRef } from "react";

const InputForm = forwardRef((props, ref) => {
  const { lable, type, placeholder, name } = props;
  return (
    <div className="mb-4">
      <CommonLable htmlFor={name}>{lable}</CommonLable>
      <CommonInput
        name={name}
        type={type}
        placeholder={placeholder}
        ref={ref}
      ></CommonInput>
    </div>
  );
});

export default InputForm;
