"use client";

import { adminApi } from "./api";

export const productsApi = adminApi.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: (params = {}) => {
        const qs = new URLSearchParams();
        Object.entries(params).forEach(([k, v]) => {
          if (v !== undefined && v !== null && v !== "") {
            qs.set(k, String(v));
          }
        });
        const query = qs.toString();
        return `/products${query ? `?${query}` : ""}`;
      },
      providesTags: (result) =>
        result?.items
          ? [
              ...result.items.map((p) => ({ type: "Product", id: p.id })),
              { type: "Products", id: "LIST" },
            ]
          : [{ type: "Products", id: "LIST" }],
    }),
    getProduct: builder.query({
      query: (id) => `/products/${id}`,
      providesTags: (result, error, id) => [{ type: "Product", id }],
    }),
  }),
});

export const { useGetProductsQuery, useGetProductQuery } = productsApi;
