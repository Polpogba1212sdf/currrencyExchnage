import React from "react";
import {Spin} from "antd";
import {LoadingOutlined} from '@ant-design/icons';
import {IHeader} from "../models/models";
import {useAppSelector} from "../hooks/redux";

const antIcon = <LoadingOutlined />

export const Header = ({isLoading}:IHeader) => {
    const {uah, eur} = useAppSelector(state => state.currency)
    const eurToUah = uah / eur
    return (
        <div className="flex items-center justify-center h-[50px] px-5 shadow-md bg-gray-500 text-white">
                <div>
                    <span className="mr-4">
                        Курси валют:
                    </span>
                    <span className="mr-4">
                        USD/UAH {isLoading ? <Spin indicator={antIcon} /> : uah.toFixed(2)}
                    </span>
                    <span>
                        EUR/UAH {isLoading ? <Spin indicator={antIcon} /> : eurToUah.toFixed(2)}
                    </span>
                </div>
        </div>
    )
}