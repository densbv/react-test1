import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    userAdded(state, action) {
      state.push(action.payload);
    },
    userUpdated(state, action) {
      const { id, name, about } = action.payload
      const existingUser = state.find(user => user.id === id)
      if (existingUser) {
        existingUser.name = name
        existingUser.about = about
      }
    }
  },
});

export const { userAdded, userUpdated } = usersSlice.actions

export default usersSlice.reducer;
