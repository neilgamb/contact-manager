import {
  BaseQueryFn,
  EndpointBuilder,
  FetchArgs,
  FetchBaseQueryError,
  MutationDefinition,
} from "@reduxjs/toolkit/dist/query";

export type DeleteContactArgs = {
  id: string;
};

export type DeleteContactResponse = void;

export const deleteContactHandler = (
  builder: EndpointBuilder<
    BaseQueryFn<FetchArgs, unknown, FetchBaseQueryError>,
    string,
    "contactsApi"
  >
): MutationDefinition<
  DeleteContactArgs,
  BaseQueryFn<FetchArgs, unknown, FetchBaseQueryError>,
  string,
  DeleteContactResponse,
  "contactsApi"
> => {
  return builder.mutation<DeleteContactResponse, DeleteContactArgs>({
    invalidatesTags: ["Contact"],
    query: ({ id }) => ({
      url: `contacts/${id}`,
      method: "DELETE",
    }),
  });
};
