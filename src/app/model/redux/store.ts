import { configureStore } from '@reduxjs/toolkit'
import modalReducer from "./features/modal/modalSlice"
import widgetReducer from "./features/widgets/widgetsSlice"

export const store = configureStore({
  reducer: {
    modal:modalReducer,
    widgets:widgetReducer
  },
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch