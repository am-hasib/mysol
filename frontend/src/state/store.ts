import { configureStore } from "@reduxjs/toolkit";
import { persistStore } from "redux-persist";
export const store = configureStore({
  reducer: {},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const persistor = persistStore(store);
