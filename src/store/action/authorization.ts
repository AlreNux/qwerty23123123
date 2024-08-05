/* eslint-disable indent */
import { Dispatch } from 'react';
import { getIsUserAuth } from '../../services/Authorization';
import { IUserAction, UserActionTypes } from '../types/user';

const inputLogin = 'anonimus.unknown@anonimus.com';
const inputPassword = 'HelloWorld228!2';

export const actionAuthorization = async (dispatch: Dispatch<IUserAction>): Promise<void> => {
    dispatch({ type: UserActionTypes.FETCH_LOGIN });
    try {
        const data = await getIsUserAuth({ email: inputLogin, password: inputPassword });
        dispatch({ type: UserActionTypes.FETCH_LOGIN_SUCCESS, payload: data });
    } catch (error) {
        const fetchError = error as unknown as string;
        dispatch({
            type: UserActionTypes.FETCH_LOGIN_ERROR,
            payload: `Oppss...something was wrong ${fetchError}`,
        });
    }
};

export const actionNullErrorStyle = (dispatch: Dispatch<IUserAction>): void => {
    dispatch({ type: UserActionTypes.FETCH_LOGIN_UNERROR });
};
