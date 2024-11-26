import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "../baseQuery";
import { getContactsHandler } from "./queries/getContactsHandler";
import { getContactByIdHandler } from "./queries/getContactByIdHandler";

export const contactsApi = createApi({
  reducerPath: "contactsApi",
  baseQuery,
  endpoints: (builder) => ({
    getContacts: getContactsHandler(builder),
    getContactById: getContactByIdHandler(builder),
  }),
});

export const { useGetContactsQuery, useGetContactByIdQuery } = contactsApi;
