import { combineReducers } from 'redux';
import { dataReducer } from './dataReducer';
import { uiReducer } from './uiReducer';

export const rootReducer = combineReducers({
    //ui: uiReducer,
    data: dataReducer,
    btnDisabled: uiReducer   
})