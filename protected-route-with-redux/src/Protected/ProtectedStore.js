// import { configureStore } from "@reduxjs/toolkit";
// import loginReducer from "./ProtectedReducer";

// export default configureStore({
//   reducer: {
//     checkedLogin: loginReducer,
//   },
// });

// ProtectedStore.js
import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./ProtectedReducer";

export default configureStore({
  reducer: {
    isLoggedIn: loginReducer,
  },
});
