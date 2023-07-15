import { forwardRef } from "react";

const CommonInput = forwardRef((props, ref) => {
  const {
    type,
    placeholder,
    name,
    style = "rounded-lg py-2 px-3 w-full placeholder:opacity-50 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-2",
  } = props;
  return (
    <input
      type={type}
      className={style}
      placeholder={placeholder}
      name={name}
      id={name}
      ref={ref}
    />
  );
});

export default CommonInput;
