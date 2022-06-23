import { combineReducers, createStore } from "redux";
import { cartReducer } from "./cart-reducer";
import { mainReducer } from "./main-reducer";
import { productReducer } from "./product-reducer";

const reducers = combineReducers({
  mainPage: mainReducer,
  productPage: productReducer,
  cartPage: cartReducer
});

const store = createStore(reducers);
window.store = store;
export default store;