import { fetchBaseQuery } from "@reduxjs/toolkit/query";

const BASE_URL = "http://localhost:3001/";

// Utility function to add a delay
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const baseQuery = async (args: any, api: any, extraOptions: any) => {
  // Add artificial delay (e.g., 2 seconds)
  await delay(500);
  return fetchBaseQuery({ baseUrl: BASE_URL })(args, api, extraOptions);
};
