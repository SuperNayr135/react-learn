import toolkit from "@reduxjs/toolkit";

const { configureStore, createAction, createReducer } = toolkit;

const addToCart = createAction("ADD_TO_CART");
const login = createAction("CREATE_SESSION");

const initialStateCart = [
  {
    id: 1,
    qty: 5,
  },
];

const cartReducer = createReducer(initialStateCart, (builder) => {
  builder.addCase(addToCart, (state, action) => {
    state.push(action.payload);
  });
});

const loginReducer = createReducer({ status: false }, (builder) => {
  builder.addCase(login, (state, action) => {
    state.status = true;
  });
});

const store = configureStore({
  reducer: {
    cartReducer: cartReducer,
    loginReducer: loginReducer,
  },
});

console.log("ONCREATE STORE: ", store.getState());

store.subscribe(() => {
  console.log("STORE CHANGE: ", store.getState());
});

const action1 = { type: "ADD_TO_CART", payload: { id: 2, qty: 10 } };

store.dispatch(addToCart({ id: 2, qty: 10 }));
store.dispatch(login());
