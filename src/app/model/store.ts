import { configureStore } from "@reduxjs/toolkit"
import modalReducer, { modalSlice } from "./features/modal/modalSlice"
import widgetReducer, { widgetsSlice } from "./features/widgets/widgetsSlice"
import { appReducer, appSlice } from "./appSlice"

export const store = configureStore({
  reducer: {
    [modalSlice.name]: modalReducer,
    [widgetsSlice.name]: widgetReducer,
    [appSlice.name]: appReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
