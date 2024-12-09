import {
  BaseQueryFn,
  EndpointBuilder,
  FetchArgs,
  FetchBaseQueryError,
  MutationDefinition,
} from "@reduxjs/toolkit/dist/query";
import { Contact } from "../../../types/contact";

export type UpdateContactArgs = Contact;

export type UpdateContactResponse = Contact;

export const updateContactHandler = (
  builder: EndpointBuilder<
    BaseQueryFn<FetchArgs, unknown, FetchBaseQueryError>,
    string,
    "contactsApi"
  >
): MutationDefinition<
  UpdateContactArgs,
  BaseQueryFn<FetchArgs, unknown, FetchBaseQueryError>,
  string,
  UpdateContactResponse,
  "contactsApi"
> => {
  return builder.mutation<UpdateContactResponse, UpdateContactArgs>({
    invalidatesTags: ["Contact"],
    query: ({ id, name, email, phone, website }) => ({
      url: `contacts/${id}`,
      method: "PATCH",
      body: {
        name,
        email,
        phone,
        website,
      },
    }),
  });
};
