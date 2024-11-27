import { createSelector } from "@reduxjs/toolkit";
import { contactsApi } from "./contactsApi";

// Base selector for the contacts query
const selectContactsQuery = contactsApi.endpoints.getContacts.select(undefined);

export const selectContacts = createSelector(
  selectContactsQuery,
  (contactsQueryState) => contactsQueryState?.data
);
