import { combineReducers } from '@reduxjs/toolkit';
import HomeReducer from '../module/home/saga/slice';

export const rootReducer = combineReducers({
    home: HomeReducer,
});
