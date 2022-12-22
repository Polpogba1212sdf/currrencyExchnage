import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {Currency, Rates} from "../../models/models";

export const currencyApi = createApi({
    reducerPath: 'currency/api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.apilayer.com/',
        prepareHeaders: (headers) => headers.set('apikey', `rJOUfxdUcu6ByF6gRK9JCl9donTypJ3C`),
    }),
    endpoints: build => ({
        getCurrencyUsd: build.query<Rates, void>({
            query: () => `fixer/latest?symbols=UAH,USD,EUR&base=USD`,
            transformResponse: (response: Currency) => response.rates
        })
    })
})

export const {useGetCurrencyUsdQuery} = currencyApi