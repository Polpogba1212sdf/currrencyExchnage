import {configureStore} from "@reduxjs/toolkit";
import {currencyApi} from "./currency/currency.api";
import {currencyReducer} from "./currency/currency.slice";

export const store = configureStore({
    reducer: {
        [currencyApi.reducerPath]: currencyApi.reducer,
        currency: currencyReducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(currencyApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>