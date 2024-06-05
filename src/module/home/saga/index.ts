import { put, takeLatest, call, all } from 'redux-saga/effects';
import {
    FETCH_ALL_POST,
    FETCH_POST_DETAIL,
    fetchAllPost,
    fetchAllPostError,
    fetchAllPostSuccess,
    fetchPostDetailError,
    fetchPostDetailSuccess,
} from './slice';
import { AxiosResponse } from 'axios';
import { BaseError } from '@api/axios';
import { getAllPost, getPostById } from './service';

export function* onGetPost() {
    try {
        console.log('Saga calling');
        const res: AxiosResponse<any> = yield call(getAllPost);
        const result = res.data.result.slice(0, 6);
        yield put(fetchAllPostSuccess(result));
    } catch (e) {
        var error = e as BaseError;
        console.log(error);
        yield put(fetchAllPostError(error));
    }
}

export function* onGetPostDetail({ type, payload }: { type: string; payload: number }) {
    try {
        const res: AxiosResponse<any> = yield call(getPostById, payload);
        const result = res.data.result;
        yield put(fetchPostDetailSuccess(result));
    } catch (e) {
        var error = e as BaseError;
        console.log(error);
        yield put(fetchPostDetailError(error));
    }
}

function* HomeSaga() {
    yield takeLatest(FETCH_POST_DETAIL, onGetPostDetail);
    yield takeLatest(FETCH_ALL_POST, onGetPost);
}

// function* generator1(): Generator<number, void> {
//     const res = yield 1;
// }

export default HomeSaga;
