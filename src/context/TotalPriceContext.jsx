import { createContext, useContext, useReducer } from "react";

const TotalPriceContext = createContext();

const TotalPriceDispatchContext = createContext();

export const initial_state = {
  total: JSON.parse(localStorage.getItem("total-price")) || [],
};

const totalPriceReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE": {
      return {
        total: action.payload.total,
      };
    }
    case "GET": {
      return state;
    }
    default: {
      throw Error("unknown action: ", action.type);
    }
  }
};

export const TotalPriceProvider = ({ children }) => {
  const [totalPrice, dispatch] = useReducer(totalPriceReducer, initial_state);
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
