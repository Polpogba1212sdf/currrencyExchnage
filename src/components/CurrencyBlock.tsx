import Input from "antd/es/input/Input";
import {Select} from "antd";
import {ICurrencyBlock} from "../models/models";

export const CurrencyBlock = ({currency, value, onChangeValue, onChangeCurrency}:ICurrencyBlock) => {
    const defaultCurrencies = ['UAH', 'USD', 'EUR']

    return (
        <>
            <Input placeholder="Currency amount" className="w-52 mr-5" value={value}
                   onChange={({target}) => onChangeValue && onChangeValue(target.value)} type="number"/>
            <Select
                defaultValue={currency}
                onChange={onChangeCurrency}
                options={defaultCurrencies.map(cur => ({
                    value: cur,
                    label: cur
                }))}
            />
        </>
    )
}