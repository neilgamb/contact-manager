import {
  BaseQueryFn,
  EndpointBuilder,
  FetchArgs,
  FetchBaseQueryError,
  MutationDefinition,
} from "@reduxjs/toolkit/dist/query";

export type AddContactArgs = {
  name: string;
  email: string;
};

export type AddContactResponse = {
  id: string;
  name: string;
  email: string;
};

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
    query: ({ name, email }) => ({
      url: `contacts`,
      method: "POST",
      body: { name, email },
    }),
  });
};
