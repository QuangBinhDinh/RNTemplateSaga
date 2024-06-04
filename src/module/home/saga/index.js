import { put, takeLatest, call } from 'redux-saga/effects';
import { getAllPost } from './service';
import { getPostFail, getPostSuccess } from '../reducer/action';
import { GET_POST } from '../reducer/actionType';

export function* onGetPost() {
    try {
        console.log('Saga calling');
        const res = yield call(getAllPost);
        console.log('Saga response');
        console.log(res);
        const result = res.data.result.slice(0, 6);
        yield put(getPostSuccess(result));
    } catch (error) {
        console.log(error);
        yield put(getPostFail(error));
    }
}

function* HomeSaga() {
    yield takeLatest(GET_POST, onGetPost);
}

export default HomeSaga;
