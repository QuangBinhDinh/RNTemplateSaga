import test from 'tape';

import { put, call } from 'redux-saga/effects';
import { onGetPost } from '../module/home/saga';
import { getPost } from '../module/home/saga/service';

test('Home saga test', assert => {
    const gen = onGetPost();

    assert.deepEqual(gen.next().value, call(getPost, -1), 'Must call getPost with params - 1');
    const fakeRes = {};
    //assert.deepEqual(gen.next(fakeRes).value, put(getPostSuccess(fakeRes)), 'Must handle response in successful');
    assert.end();
});
