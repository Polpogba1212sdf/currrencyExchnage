import {useDispatch} from "react-redux";
import {bindActionCreators} from "@reduxjs/toolkit";
import {currencyActions} from "../store/currency/currency.slice";

const actions = {
    ...currencyActions
}

export const useActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(actions, dispatch)
}
