import {
  BaseQueryFn,
  EndpointBuilder,
  FetchArgs,
  FetchBaseQueryError,
  QueryDefinition,
} from "@reduxjs/toolkit/dist/query";
import { Contact } from "../../../types/contact";

export type GetContactsResponse = {
  contactsIdsArray: number[];
  contactsDictionary: Record<string, Contact>;
};

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
    transformResponse: (response: Contact[]) => {
      // create array of contact ids
      const contactIds = response.map((contact) => contact.id);

      // create a dictionary of contacts by id
      const contactsById = response.reduce((acc, contact) => {
        acc[contact.id] = contact;
        return acc;
      }, {} as Record<string, Contact>);

      return {
        contactsIdsArray: contactIds,
        contactsDictionary: contactsById,
      };
    },
  });
};
