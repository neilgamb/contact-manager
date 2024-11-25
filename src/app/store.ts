import { configureStore } from "@reduxjs/toolkit";
import { contactsApi } from "../features/contacts/contactsApi";
import { TypedUseSelectorHook, useSelector } from "react-redux";

export const store = configureStore({
  reducer: {
    [contactsApi.reducerPath]: contactsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(contactsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
