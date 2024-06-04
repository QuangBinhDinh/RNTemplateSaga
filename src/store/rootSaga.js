import { fork, all } from 'redux-saga/effects';
import HomeSaga from '../module/home/saga';

function* hello() {
    console.log('Hello saga');
    console.log('Hi there');
}
function* RootSaga() {
    yield all([hello(), fork(HomeSaga)]);
}
export default RootSaga;
