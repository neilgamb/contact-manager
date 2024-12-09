import { createSelector } from "@reduxjs/toolkit";
import { contactsApi } from "./contactsApi";

const selectContactsQuery = contactsApi.endpoints.getContacts.select(undefined);

export const selectContactIds = createSelector(
  selectContactsQuery,
  (contactsQueryState) => contactsQueryState?.data?.contactsIdsArray
);

export const selectContacts = createSelector(
  selectContactsQuery,
  (contactsQueryState) => contactsQueryState?.data?.contactsDictionary
);

export const selectContactById = (contactId: number) =>
  createSelector(selectContacts, (contacts) => contacts?.[contactId]);
