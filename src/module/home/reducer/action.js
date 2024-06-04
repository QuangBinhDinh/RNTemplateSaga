import {
    GET_POST,
    GET_POST_DETAIL,
    GET_POST_DETAIL_FAIL,
    GET_POST_DETAIL_SUCCESS,
    GET_POST_FAIL,
    GET_POST_SUCCESS,
} from './actionType';

const getPost = () => ({
    type: GET_POST,
});

const getPostSuccess = data => ({
    type: GET_POST_SUCCESS,
    payload: data,
});

const getPostFail = error => ({
    type: GET_POST_FAIL,
    payload: error,
});

const getPostDetail = id => ({
    type: GET_POST_DETAIL,
    payload: id,
});

const getPostDetailSuccess = data => ({
    type: GET_POST_DETAIL_SUCCESS,
    payload: data,
});

const getPostDetailFail = error => ({
    type: GET_POST_DETAIL_FAIL,
    payload: error,
});

export { getPost, getPostSuccess, getPostFail, getPostDetail, getPostDetailSuccess, getPostDetailFail };
