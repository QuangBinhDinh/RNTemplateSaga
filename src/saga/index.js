import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './reducer';
import { api, domainApi, globalApi } from '@api/service';
import { put, takeEvery, all } from 'redux-saga/effects';
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();
const Store = configureStore({
    reducer: rootReducer,
    middleware: gDM => gDM().concat(sagaMiddleware),
});

export default Store;

sagaMiddleware.run();
