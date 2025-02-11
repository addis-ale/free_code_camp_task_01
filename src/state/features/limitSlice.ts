import { createSlice } from "@reduxjs/toolkit";
interface InitialState {
  limit: number;
}
const initialState: InitialState = {
  limit: 1,
};
export const limitSlice = createSlice({
  name: "limt",
  initialState,
  reducers: {
    setLimit: (state, action) => {
      state.limit = action.payload;
    },
  },
});
export const { setLimit } = limitSlice.actions;
export default limitSlice.reducer;
