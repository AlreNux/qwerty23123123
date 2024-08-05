import { AuthorizeResponse } from '../../services/Authorization';

export interface IUserState {
    user: Record<string, never> | AuthorizeResponse;
    isAuth: boolean;
    error: string | null;
    loading: boolean;
    isDisabled: boolean;
}

export enum UserActionTypes {
    FETCH_LOGIN = 'FETCH_LOGIN',
    FETCH_LOGIN_SUCCESS = 'FETCH_LOGIN_SUCCESS',
    FETCH_LOGIN_ERROR = 'FETCH_LOGIN_ERROR',
    FETCH_LOGIN_UNERROR = 'FETCH_LOGIN_UNERROR',
}

interface FetchUserAction {
    type: UserActionTypes.FETCH_LOGIN;
}

interface FetchUserSuccessAction {
    type: UserActionTypes.FETCH_LOGIN_SUCCESS;
    payload: AuthorizeResponse;
}

interface FetchUserErrorAction {
    type: UserActionTypes.FETCH_LOGIN_ERROR;
    payload: string;
}

interface FetchUserUnErrorAction {
    type: UserActionTypes.FETCH_LOGIN_UNERROR;
}

export type IUserAction = FetchUserAction | FetchUserSuccessAction | FetchUserErrorAction | FetchUserUnErrorAction;
