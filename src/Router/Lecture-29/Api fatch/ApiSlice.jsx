import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
};

const apiSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    // addUser: (state, action) => {
    //   state.users.push(action.payload);
    // },
  },
});

export const { addUser } = apiSlice.actions;
export default apiSlice.reducer;