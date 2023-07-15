import { Children } from "react";

const CommonLable = (props) => {
  const { htmlFor, children, style = "block mb-2 " } = props;
  return (
    <label htmlFor={htmlFor} className={style}>
      {children}
    </label>
  );
};
export default CommonLable;
