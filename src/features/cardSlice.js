import { createSlice, nanoid, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  card: [],
};

const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    userAdded: {
      reducer(state, action) {
        state.push(action.payload)
      }
    }  
  },
});

export const { cardAdded } = cardSlice.actions

export default cardSlice.reducer;
