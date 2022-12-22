import React, {useEffect} from 'react';
import {Header} from "./components/Header";
import {Conversion} from "./components/Conversion";
import {useGetCurrencyUsdQuery} from "./store/currency/currency.api";
import {Alert, Spin} from "antd";
import {LoadingOutlined} from "@ant-design/icons";
import {useActions} from "./hooks/actions";

const antIcon = <LoadingOutlined />

function App() {
    const {isLoading, isError, data} = useGetCurrencyUsdQuery()
    const {saveCurrency} = useActions()
    useEffect(() => {
        if (data) {
            saveCurrency({
                eur: data.EUR,
                uah: data.UAH
            })
        }
    }, [data])


    if (isError) {
        return <Alert message="Помилка!!!" type="error" showIcon className="m-5"/>
    }

    return (
        <div className="flex flex-col">
            <Header isLoading={isLoading}/>
            {isLoading ? <Spin indicator={antIcon} className="mt-10"/> : <Conversion rates={data} />}
        </div>
    );
}

export default App;
