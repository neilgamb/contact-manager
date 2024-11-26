import { fetchBaseQuery } from "@reduxjs/toolkit/query";

const BASE_URL = "http://localhost:3001/";

export const baseQuery = async (args: any, api: any, extraOptions: any) => {
  return fetchBaseQuery({ baseUrl: BASE_URL })(args, api, extraOptions);
};
