import { createSelector } from "@reduxjs/toolkit";
import { contactsApi } from "./contactsApi";

// Base selector for the contacts query
const selectContactsQuery = contactsApi.endpoints.getContacts.select(1);

// Custom selector to extract the error state
export const selectIsGetContactsError = createSelector(
  selectContactsQuery,
  (contactsQueryState) => !!contactsQueryState?.error
);

export const selectContacts = createSelector(
  selectContactsQuery,
  (contactsQueryState) => contactsQueryState?.data
);
