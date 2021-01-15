import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "../features/users/usersSlice";
import cardReducer from "../features/cardSlice";

export default configureStore({
  reducer: {
    users: usersReducer,
    card: cardReducer
  },
});
