import { fetchBaseQuery } from "@reduxjs/toolkit/query";

const BASE_URL = "http://localhost:3001/";

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const baseQuery = async (args: any, api: any, extraOptions: any) => {
  await delay(750); // add mock delay to simulate network latency
  return fetchBaseQuery({ baseUrl: BASE_URL })(args, api, extraOptions);
};
