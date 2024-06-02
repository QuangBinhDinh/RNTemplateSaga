import { combineReducers } from '@reduxjs/toolkit';
import search from '../module/test/reducer';
import { api, domainApi, globalApi } from '@api/service';

export const rootReducer = combineReducers({
    search: search.reducer,
    [api.reducerPath]: api.reducer,
    [domainApi.reducerPath]: domainApi.reducer,
    [globalApi.reducerPath]: globalApi.reducer,
});
