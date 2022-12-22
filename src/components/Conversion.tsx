import React, {useEffect, useState} from "react";
import {CurrencyBlock} from "./CurrencyBlock";
import {IConversion} from "../models/models";

export const Conversion = ({rates}:IConversion) => {
    const [fromPrice, setFromPrice] = useState(0)
    const [toPrice, setToPrice] = useState(1)
    const [fromCurrency, setFromCurrency] = useState('UAH')
    const [toCurrency, setToCurrency] = useState('USD')

    const onChangeFromPrice = (val:string) => {
        setFromPrice(Number(val))
        setToPrice(Number(val) / rates[fromCurrency] * rates[toCurrency])
    }
    const onChangeToPrice = (val:string) => {
        setToPrice(Number(val))
        setFromPrice(rates[fromCurrency] / rates[toCurrency] * Number(val))
    }

    useEffect(() => {
        onChangeFromPrice(String(fromPrice))
    },[fromCurrency])
    useEffect(() => {
        onChangeToPrice(String(toPrice))
    },[toCurrency])

    return (
        <div className="flex flex-col justify-center pt-10 mx-auto w-screen">
            <div className="flex justify-center mb-3">
                <CurrencyBlock value={fromPrice} currency={fromCurrency}
                               onChangeCurrency={setFromCurrency} onChangeValue={onChangeFromPrice}/>
            </div>
            <div className="flex justify-center">
                <CurrencyBlock value={toPrice} currency={toCurrency}
                               onChangeCurrency={setToCurrency} onChangeValue={onChangeToPrice}/>
            </div>
        </div>
    )
}