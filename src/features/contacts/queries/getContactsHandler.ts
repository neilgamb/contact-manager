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
    "Contact",
    "contactsApi"
  >
): QueryDefinition<
  undefined,
  BaseQueryFn<FetchArgs, unknown, FetchBaseQueryError>,
  "Contact",
  GetContactsResponse,
  "contactsApi"
> => {
  return builder.query<GetContactsResponse, undefined | undefined>({
    providesTags: ["Contact"],
    query: () => ({ url: `contacts`, method: "GET" }),
  });
};
