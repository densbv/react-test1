import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [];

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    userAdded: {
      reducer(state, action) {
        state.push(action.payload)
      },
      prepare(name, about) {
        return {
          payload: {
            id: nanoid(),
            date: new Date().toISOString(),
            name,
            about
          }
        }
      }
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
