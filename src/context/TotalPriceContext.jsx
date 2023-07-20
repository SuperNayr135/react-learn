import { createContext, useContext, useReducer } from "react";

const TotalPriceContext = createContext();

const TotalPriceDispatchContext = createContext();

const totalPriceReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE": {
      return {
        total: action.payload.total,
      };
    }
    default: {
      throw Error("unknown action: ", action.type);
    }
  }
};

export const TotalPriceProvider = ({ children }) => {
  const [totalPrice, dispatch] = useReducer(totalPriceReducer, { total: 0 });
  return (
    <TotalPriceContext.Provider value={totalPrice}>
      <TotalPriceDispatchContext.Provider value={dispatch}>
        {children}
      </TotalPriceDispatchContext.Provider>
    </TotalPriceContext.Provider>
  );
};

export const useTotalPrice = () => {
  return useContext(TotalPriceContext);
};

export const useTotalPriceDispatch = () => {
  return useContext(TotalPriceDispatchContext);
};
