import { Dispatch } from 'react';
import { IUserAction } from '../types/user';
import { actionNullErrorStyle, actionAuthorization } from './authorization';

export const nullErrorStyle = (): ((dispatch: Dispatch<IUserAction>) => void) => actionNullErrorStyle;
export const onAuthorization = (): ((dispatch: Dispatch<IUserAction>) => Promise<void>) => actionAuthorization;
