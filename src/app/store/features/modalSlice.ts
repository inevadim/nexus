import { createSlice } from "@reduxjs/toolkit";

export type ModalState = {
  value: boolean;
};

const initialState: ModalState = {
  value: false,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    changeVisible: (state) => {
      state.value = !state.value;
    },
  },
});

export const { changeVisible } = modalSlice.actions;
export default modalSlice.reducer;
