// How to Redux-Toolkit in Next.js
// 1. Create Redux Folder
// 2. Create Store.js file
// 3. Import Provider in _app.js & connect store to provider
// 4. Create Reducer
// 5. Create Action & Slice
// 6. Connect Reducer to store
// 7. Add relevant end point in axios.get
// 8. Import useSelector, useDispatch in component
// 9. Import reducer in component(eg. fetchUser)
// 9. Use useDispatch to dispatch actions

import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./reducers/userReducer";
import productsSlice from "./reducers/productsReducer";

export const store = configureStore({
  reducer: {
    userData: userSlice.reducer,
    productsData: productsSlice.reducer,
  },
});
