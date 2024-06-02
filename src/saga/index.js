import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './reducer';
import { api, domainApi, globalApi } from '@api/service';
import { put, takeEvery, all } from 'redux-saga/effects';
import createSagaMiddleware from 'redux-saga';
const Store = configureStore({
    reducer: rootReducer,
    middleware: gDM => gDM().concat(api.middleware).concat(domainApi.middleware).concat(globalApi.middleware),
});

const sagaMiddleware = createSagaMiddleware();
sagaMiddleware.run();
