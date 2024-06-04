import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { GET_POST, GET_POST_FAIL, GET_POST_SUCCESS } from './actionType';

export interface Post {
    id: number;
    title: string;
    image_url: string;
    name: string;
}

interface HomeState {
    post: Post[];
    banner: Post[];
    loading: boolean;
    error_msg: string;
}

const initialState: HomeState = {
    post: [],
    banner: [],
    loading: false,
    error_msg: '',
};

const HomeReducer = (state = initialState, action: PayloadAction<any>) => {
    const { type, payload } = action;
    switch (type) {
        case GET_POST:
            state = { ...state, loading: true };
            break;
        case GET_POST_SUCCESS:
            state = { ...state, loading: false, post: payload };
            break;
        case GET_POST_FAIL:
            state = { ...state, loading: false, error_msg: payload };
            break;
    }
    return state;
};

// const HomeReducer = createSlice({
//     name: 'home',
//     initialState,
//     reducers: {},
// });

export default HomeReducer;
