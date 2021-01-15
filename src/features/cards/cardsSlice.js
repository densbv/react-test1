import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [];

const cardsSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {
    cardAdded: {
      reducer(state, action) {
        state.push(action.payload)
      },
      prepare({...vars}) {
        const {Api, Description, Auth, HTTPS, Cors, Link, Category} = vars;
        return {
          payload: {
            id: nanoid(),
            Api,
            Description,
            Auth,
            HTTPS,
            Cors,
            Link,
            Category
          }
        }
      }
    },
  },
});

export const { cardAdded } = cardsSlice.actions;

export default cardsSlice.reducer;
