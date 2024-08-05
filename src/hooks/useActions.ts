import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as UserActionCreators from '../store/action';

export const useActions = (): typeof UserActionCreators => {
    const dispatch = useDispatch();
    return bindActionCreators(UserActionCreators, dispatch);
};
