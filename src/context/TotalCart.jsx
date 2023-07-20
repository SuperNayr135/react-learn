import { createContext, useState, useContext } from "react";

const TotalCartContext = createContext();
// const TotalCartContextDispatch = createContext();

export const TotalCartProvider = ({ children }) => {
  const [totalCart, setTotalCart] = useState(0);
  return (
    <TotalCartContext.Provider value={{ totalCart, setTotalCart }}>
      {children}
    </TotalCartContext.Provider>
  );
};

export const useTotalCart = () => {
  return useContext(TotalCartContext);
};
