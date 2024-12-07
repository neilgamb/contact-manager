import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "./store";

export interface AppState {
  activeContactId: number | null;
}

const initialState: AppState = {
  activeContactId: null,
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setActiveContactId: (state, action) => {
      state.activeContactId = action.payload;
    },
  },
});

export const { setActiveContactId } = appSlice.actions;

export const selectActiveContactId = (state: RootState) =>
  state.app.activeContactId;

export default appSlice.reducer;
