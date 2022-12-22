export interface Currency {
    success: boolean
    timestamp: number
    rates: Rates
    base: string
    date: string
}

export interface Rates {
    UAH: number
    USD: number
    EUR: number
}

export interface ICurrencyBlock {
    currency: string
    value: number
    onChangeValue?: (val:string) => void
    onChangeCurrency?: (val:string) => void
}

export interface IHeader {
    isLoading: boolean
}

export interface IConversion {
    rates?: Rates | any
}


