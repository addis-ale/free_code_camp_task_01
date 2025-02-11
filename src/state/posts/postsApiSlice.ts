import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define the expected API response structure
interface Quote {
  quote: string; // Quote text
  author: string; // Author name
}

export const quotesApiSlice = createApi({
  reducerPath: "quotes",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.api-ninjas.com/v1/",
    prepareHeaders: (headers) => {
      headers.set(
        "X-Api-Key",
        process.env.NEXT_PUBLIC_NINJAS_API_KEY as string
      ); // Store key in .env
      return headers;
    },
  }),

  endpoints: (builder) => ({
    getQuote: builder.query<Quote[], number | void>({
      // Accept a trigger (number) as the query parameter
      query: () => `quotes`, // API query endpoint
    }),
  }),
});

export const { useGetQuoteQuery } = quotesApiSlice;
