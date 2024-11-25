import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const contactsApi = createApi({
  reducerPath: "contactsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  endpoints: (builder) => ({
    getContacts: builder.query({
      query: (page = 1) => `users?_page=${page}&_limit=10`,
    }),
    getContactById: builder.query({
      query: (id: number) => `users/${id}`,
    }),
  }),
});

export const { useGetContactsQuery, useGetContactByIdQuery } = contactsApi;
