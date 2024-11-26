import {
  BaseQueryFn,
  EndpointBuilder,
  FetchArgs,
  FetchBaseQueryError,
  QueryDefinition,
} from "@reduxjs/toolkit/dist/query";
import { Contact } from "../../../types/contact";

export type GetContactByIdArgs = {
  id: number;
};

export type GetContactByIdResponse = Contact;

export const getContactByIdHandler = (
  builder: EndpointBuilder<
    BaseQueryFn<FetchArgs, unknown, FetchBaseQueryError>,
    never,
    "contactsApi"
  >
): QueryDefinition<
  GetContactByIdArgs | undefined,
  BaseQueryFn<FetchArgs, unknown, FetchBaseQueryError>,
  never,
  GetContactByIdResponse,
  "contactsApi"
> => {
  return builder.query<GetContactByIdResponse, GetContactByIdArgs | undefined>({
    query: ({ id }: GetContactByIdArgs) => ({
      url: `users/${id}`,
      method: "GET",
    }),
  });
};
