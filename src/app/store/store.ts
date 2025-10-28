import { configureStore } from "@reduxjs/toolkit";
import modalReducer, { modalSlice } from "./features/modalSlice";
import widgetReducer, { widgetsSlice } from "./features/widgetsSlice";

export const store = configureStore({
  reducer: {
    [modalSlice.name]: modalReducer,
    [widgetsSlice.name]: widgetReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
