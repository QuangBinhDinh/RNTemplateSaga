import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './reducer';
import createSagaMiddleware from 'redux-saga';
import RootSaga from './rootSaga';
import { createStore, compose, applyMiddleware } from 'redux';

const sagaMiddleware = createSagaMiddleware();
// const Store = configureStore({
//     reducer: rootReducer,
//     middleware: gDM => gDM().concat(sagaMiddleware),
// });
const Store = createStore(rootReducer, compose(applyMiddleware(sagaMiddleware)));
sagaMiddleware.run(RootSaga);

export default Store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof Store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof Store.dispatch;
