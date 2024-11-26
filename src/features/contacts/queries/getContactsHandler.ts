import {
  BaseQueryFn,
  EndpointBuilder,
  FetchArgs,
  FetchBaseQueryError,
  QueryDefinition,
} from "@reduxjs/toolkit/dist/query";
import { Contact } from "../../../types/contact";

export type GetContactsArgs = {
  page?: number;
  limit?: number;
};

export type GetContactsResponse = Contact[];

export const getContactsHandler = (
  builder: EndpointBuilder<
    BaseQueryFn<FetchArgs, unknown, FetchBaseQueryError>,
    never,
    "contactsApi"
  >
): QueryDefinition<
  GetContactsArgs | undefined,
  BaseQueryFn<FetchArgs, unknown, FetchBaseQueryError>,
  never,
  GetContactsResponse,
  "contactsApi"
> => {
  return builder.query<GetContactsResponse, GetContactsArgs | undefined>({
    query: ({ page = 1, limit = 50 }: GetContactsArgs) => ({
      url: `contacts?_page=${page}&_limit=${limit}`,
      method: "GET",
    }),
  });
};
