import {
  BaseQueryFn,
  EndpointBuilder,
  FetchArgs,
  FetchBaseQueryError,
  QueryDefinition,
} from "@reduxjs/toolkit/dist/query";
import { Contact } from "../../../types/contact";

export type GetContactsResponse = Contact[];

export const getContactsHandler = (
  builder: EndpointBuilder<
    BaseQueryFn<FetchArgs, unknown, FetchBaseQueryError>,
    never,
    "contactsApi"
  >
): QueryDefinition<
  undefined,
  BaseQueryFn<FetchArgs, unknown, FetchBaseQueryError>,
  never,
  GetContactsResponse,
  "contactsApi"
> => {
  return builder.query<GetContactsResponse, undefined | undefined>({
    query: () => ({ url: `contacts`, method: "GET" }),
  });
};
