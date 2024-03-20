import { createSlice } from "@reduxjs/toolkit";

const hotelSlice = createSlice({
  name: "hotel",
  initialState: {
    currentHotel: {},
  },
  reducers: {
    hotellist: (state, action) => {
        state.currentHotel = action.payload;
      },
    logout:(state)  =>{
      state.currentHotel= null;
    }
  },
});

export const { hotellist,logout } =
hotelSlice.actions;
export default hotelSlice.reducer;
