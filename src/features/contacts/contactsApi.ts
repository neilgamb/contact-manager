import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "../baseQuery";

export const contactsApi = createApi({
  reducerPath: "contactsApi",
  baseQuery,
  endpoints: (builder) => ({
    getContacts: builder.query({
      query: (page = 1) => `users?_page=${page}&_limit=2`,
    }),
    getContactById: builder.query({
      query: (id: number) => `users/${id}`,
    }),
  }),
});

export const { useGetContactsQuery, useGetContactByIdQuery } = contactsApi;
