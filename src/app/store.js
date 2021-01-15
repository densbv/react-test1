import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "../features/users/usersSlice";
import cardsReducer from "../features/cards/cardsSlice";

export default configureStore({
  reducer: {
    users: usersReducer,
    cards: cardsReducer
  },
});
