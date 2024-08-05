/* eslint-disable indent */
import { IUserAction, IUserState, UserActionTypes } from '../types/user';

const defaultState: IUserState = {
    user: {},
    isAuth: false,
    loading: false,
    error: null,
    isDisabled: false,
};

export const userReducer = (state = defaultState, action: IUserAction): IUserState => {
    switch (action.type) {
        case UserActionTypes.FETCH_LOGIN:
            return { ...state, loading: true, isDisabled: true };
        case UserActionTypes.FETCH_LOGIN_SUCCESS:
            return { ...state, user: action.payload, isAuth: true, loading: false };
        case UserActionTypes.FETCH_LOGIN_ERROR:
            return { ...state, error: action.payload, loading: false, isDisabled: false };
        case UserActionTypes.FETCH_LOGIN_UNERROR:
            return { ...state, loading: false, error: null };
        default:
            return state;
    }
};
