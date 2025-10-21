import { createSlice } from "@reduxjs/toolkit"

export interface ModalState {
  value: boolean
}

const initialState: ModalState = {
  value: false,
}

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    changeVisible: state => {
      state.value = !state.value
    },
  },
  selectors: {
    SelectModalValue: state => state.value,
  },
})

export const { changeVisible } = modalSlice.actions
export const { SelectModalValue } = modalSlice.selectors
export default modalSlice.reducer
