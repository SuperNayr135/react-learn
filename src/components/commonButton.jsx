const CommonButton = (props) => {
  const {
    fontWeight = "font-medium",
    width = "w-full",
    children = "Dummy",
    style = `rounded-lg border-solid border-2 ${width} border-sky-500 border-transparent px-6 py-2.5 text-base ${fontWeight} bg-[#1a1a1a] cursor-pointer transition hover:border-purple-600`,
    onClick = () => {},
    type = "button",
  } = props;
  return (
    <button className={style} onClick={onClick} type={type}>
      {children}
    </button>
  );
};

export default CommonButton;
