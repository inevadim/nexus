import { createSlice } from "@reduxjs/toolkit"

export const appSlice = createSlice({
  name: "app",
  initialState: {
    isLoggedIn: true, // пока дефолтно залогинен
    error: null as string | null,
  },
  selectors: {
    selectIsLoggedIn: state => state.isLoggedIn,
  },
  reducers: create => ({
    setIsLoggedIn: create.reducer<{ isLoggedIn: boolean }>((state, action) => {
      state.isLoggedIn = action.payload.isLoggedIn
    }),
  }),
})

export const { selectIsLoggedIn } = appSlice.selectors
export const appReducer = appSlice.reducer
