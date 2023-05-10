import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./reducers/cartReducer";
import { eventReducer } from "./reducers/eventReducer";
import { orderReducer } from "./reducers/orderReducer";
import { productReducer } from "./reducers/productReducer";
import { sellerReducer } from "./reducers/sellerReducer";
import { userReducer } from "./reducers/userReducer";
import { wishlistReducer } from "./reducers/wishlistReducer";

const Store = configureStore({
  reducer: {
    cart: cartReducer,
    events: eventReducer,
    order: orderReducer,
    products: productReducer,
    seller: sellerReducer,
    user: userReducer,
    wishlist: wishlistReducer,
  },
});

export default Store;