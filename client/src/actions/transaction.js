import axios from 'axios';
import { TRANSACTION_SUCCESS, BUY_STOCK_SUCCESS } from './types';
import {loadUser} from './auth';

export const loadTransaction = () => async dispatch => {
    try {
        const res = await axios.get('/api/transactions');

        dispatch({
            type: TRANSACTION_SUCCESS,
            payload: res.data
        })
    } catch (error) {
        console.error(error)
    }
}

export const buyStock = ({ action, name, quantity, price }) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
        }
    }
    const body = JSON.stringify({
        action: action,
        name: name,
        quantity: quantity,
        price: price,
    })
    try {
        const res = await axios.post('/api/transactions', body, config);

        dispatch({
            type: BUY_STOCK_SUCCESS,
            payload: res.data,
        })
        dispatch(loadUser());
    } catch (error) {
        console.error(error);
    }
}