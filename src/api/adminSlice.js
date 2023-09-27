import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const adminApi = createApi({
    reducerPath: 'admin',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8080/' }),
    endpoints: (builder) => ({
      getAccounts: builder.query({
        query: () => `accounts`,
        providesTags:['accounts'],
        // invalidatesTags:['accounts']
      }), 
      addAccounts: builder.mutation({
        query: (amount, id) => ({
            url : "accounts",
            method: "POST",
            body: {amount:amount, id : id}
        }),
        // providesTags:['accounts'],
        invalidatesTags:['accounts']
      }),
    }),
  })
  
  export const { useGetAccountsQuery, useAddAccountsMutation } = adminApi