import {
    LOAD_STOCK_SUCCESS,
    LOAD_STOCK_FAILURE,
    REFRESH_SUCCESS
} from '../actions/types';

const initialState = {
    data: {},
    updateTime: null
};

export default function (state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case LOAD_STOCK_SUCCESS:
        case REFRESH_SUCCESS:
            return {
                ...state,
                data: payload,
                updateTime: new Date()
            };
        case LOAD_STOCK_FAILURE:
            return {}
        default:
            return state;
    }
}