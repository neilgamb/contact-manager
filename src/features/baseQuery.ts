import { fetchBaseQuery } from "@reduxjs/toolkit/query";

const BASE_URL = "https://jsonplaceholder.typicode.com/";

export const baseQuery = async (args: any, api: any, extraOptions: any) => {
  return fetchBaseQuery({ baseUrl: BASE_URL })(args, api, extraOptions);
};
