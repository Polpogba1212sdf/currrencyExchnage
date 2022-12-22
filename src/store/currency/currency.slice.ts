import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface CurrencyState {
    uah: number
    eur: number
}

const initialState: CurrencyState = {
    uah: 0,
    eur: 0
}

export const currencySlice = createSlice({
    name: 'currency',
    initialState,
    reducers: {
        saveCurrency(state, action: PayloadAction<CurrencyState>) {
            state.uah = action.payload.uah
            state.eur = action.payload.eur
        }
    }
})

export const currencyActions = currencySlice.actions
export const currencyReducer = currencySlice.reducer