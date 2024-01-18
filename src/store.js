import { configureStore } from "@reduxjs/toolkit";
import fetchingMenuReducer from "./Features/Menu/fetchingMenuSlice";
import cartReducer from "./Features/Cart/cartSlice";

const store=configureStore({
    reducer:{
        fetch: fetchingMenuReducer,
        cart: cartReducer,
    }
});
export default store;