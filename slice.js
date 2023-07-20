import toolkit from "@reduxjs/toolkit";

const { configureStore, createSlice } = toolkit;

const cartSlice = createSlice({
  name: "cart",
  initialState: [
    {
      id: 1,
      qty: 5,
    },
  ],
  reducers: {
    addToCart: (state, action) => {
      state.push(action.payload);
    },
  },
});

const loginSlice = createSlice({
  name: "login",
  initialState: { status: false },
  reducers: {
    login: (state, action) => {
      state.status = true;
    },
  },
});

const store = configureStore({
  reducer: {
    cartReducer: cartSlice.reducer,
    loginReducer: loginSlice.reducer,
  },
});

console.log("ONCREATE STORE: ", store.getState());

store.subscribe(() => {
  console.log("STORE CHANGE: ", store.getState());
});

const action1 = { type: "ADD_TO_CART", payload: { id: 2, qty: 10 } };

store.dispatch(cartSlice.actions.addToCart({ id: 2, qty: 10 }));
store.dispatch(loginSlice.actions.login());
