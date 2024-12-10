import {
  BaseQueryFn,
  EndpointBuilder,
  FetchArgs,
  FetchBaseQueryError,
  QueryDefinition,
} from "@reduxjs/toolkit/dist/query";
import { Contact } from "../../../types/contact";

export type GetContactByIdArgs = {
  id: string;
};

export type GetContactByIdResponse = Contact;

export const getContactByIdHandler = (
  builder: EndpointBuilder<
    BaseQueryFn<FetchArgs, unknown, FetchBaseQueryError>,
    "Contact",
    "contactsApi"
  >
): QueryDefinition<
  GetContactByIdArgs,
  BaseQueryFn<FetchArgs, unknown, FetchBaseQueryError>,
  "Contact",
  GetContactByIdResponse,
  "contactsApi"
> => {
  return builder.query<GetContactByIdResponse, GetContactByIdArgs>({
    providesTags: (arg) => [{ type: "Contact", id: arg?.id }],
    // keepUnusedDataFor: 5, // seconds
    query: ({ id }: GetContactByIdArgs) => ({
      url: `contacts/${id}`,
      method: "GET",
    }),
  });
};
