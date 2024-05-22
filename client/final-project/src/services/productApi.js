//redux-toolkit-query - RTK
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const ProductsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ BASE_URL: "http://localhost:5050/" }),
  endpoints: (builder) => ({
    //endpoints
    getAllProducts: builder.query({
      query: () => `products`,
    }),
    getProductByID: builder.query({
      query: (id) => `products/${id}`,
    }),
    deleteProductByID: builder.mutation({
      query: (id) => ({
        url: `products/${id}`,
        method: "DELETE",
      }),
    }),
    postProduct: builder.mutation({
      query: (payload) => ({
        url: "products",
        method: "POST",
        body: payload,
        headers: {
          "Content-Type": "application/json",
        },
      }),
    }),
  }),
});

//auto-generate hook (use + endpoint + Query)
export const {
  useGetAllProductsQuery,
  useGetProductByIDQuery,
  useDeleteProductByIDMutation,
  usePostProductMutation,
} = ProductsApi;
