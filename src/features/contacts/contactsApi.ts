import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "../baseQuery";
import { getContactsHandler } from "./queries/getContactsHandler";
import { getContactByIdHandler } from "./queries/getContactByIdHandler";
import { addContactHandler } from "./mutations/addContactHandler";
import { deleteContactHandler } from "./mutations/deleteContactHandler";

export const contactsApi = createApi({
  reducerPath: "contactsApi",
  baseQuery,
  tagTypes: ["Contact"],
  endpoints: (builder) => ({
    getContacts: getContactsHandler(builder),
    getContactById: getContactByIdHandler(builder),
    addContact: addContactHandler(builder),
    deleteContact: deleteContactHandler(builder),
  }),
});

export const {
  useGetContactsQuery,
  useGetContactByIdQuery,
  useAddContactMutation,
  useDeleteContactMutation,
} = contactsApi;
