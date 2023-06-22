// import { createSlice } from "@reduxjs/toolkit";

// export const loginSlice = createSlice({
//   name: "ProtectedLoginSlice",
//   initialState: false,
//   reducers: {
//     loggedin: (state) => {
//       return (state = true);
//     },
//     loggedout: (state) => {
//       return (state = false);
//     },
//   },
// });

// export const { loggedin, loggedout } = loginSlice.actions;

// export default loginSlice.reducer;


// ProtectedSlice.js

import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
  name: "ProtectedLoginSlice",
  initialState: false,
  reducers: {
    loggedin: (state) => {
      return true;
    },
    loggedout: (state) => {
      return false;
    },
  },
});

export const { loggedin, loggedout } = loginSlice.actions;

export default loginSlice.reducer;


