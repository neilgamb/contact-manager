import {
  BaseQueryFn,
  EndpointBuilder,
  FetchArgs,
  FetchBaseQueryError,
  MutationDefinition,
} from "@reduxjs/toolkit/dist/query";
import { Contact } from "../../../types/contact";

export type AddContactArgs = Omit<Contact, "id">;

export type AddContactResponse = Contact;

export const addContactHandler = (
  builder: EndpointBuilder<
    BaseQueryFn<FetchArgs, unknown, FetchBaseQueryError>,
    string,
    "contactsApi"
  >
): MutationDefinition<
  AddContactArgs,
  BaseQueryFn<FetchArgs, unknown, FetchBaseQueryError>,
  string,
  AddContactResponse,
  "contactsApi"
> => {
  return builder.mutation<AddContactResponse, AddContactArgs>({
    invalidatesTags: ["Contact"],
    query: ({ name, email, phone, website }) => ({
      url: `contacts`,
      method: "POST",
      body: {
        name,
        email,
        phone,
        website,
      },
    }),
  });
};
