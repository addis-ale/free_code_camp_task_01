import { configureStore } from "@reduxjs/toolkit";

import setLimitSlice from "./features/limitSlice";
import { quotesApiSlice } from "./posts/postsApiSlice";
export const store = configureStore({
  reducer: {
    setLimit: setLimitSlice,
    [quotesApiSlice.reducerPath]: quotesApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(quotesApiSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
