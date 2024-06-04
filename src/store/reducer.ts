import { combineReducers } from '@reduxjs/toolkit';
import HomeReducer from '../module/home/reducer';

export const rootReducer = combineReducers({
    home: HomeReducer,
});
