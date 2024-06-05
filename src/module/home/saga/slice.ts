import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { BaseError } from '@api/axios';

export interface Post {
    id: number;
    title: string;
    image_url: string;
    name: string;
    description: string;
}

interface HomeState {
    post: Post[];
    banner: Post[];
    loading: boolean;
    error_msg: string;
    detail_post: Post | null;
}

const initialState: HomeState = {
    post: [],
    banner: [],
    loading: false,
    error_msg: '',
    detail_post: null,
};

const HomeReducer = createSlice({
    name: 'home',
    initialState,
    reducers: {
        fetchAllPost: state => {
            state.loading = true;
            console.log('start loading');
        },
        fetchAllPostSuccess: (state, { payload }: PayloadAction<Post[]>) => {
            state.loading = false;
            state.post = payload;
            console.log('loading success');
        },
        fetchAllPostError: (state, { payload }: PayloadAction<BaseError>) => {
            state.loading = false;
            state.error_msg = payload.error_msg;
        },

        fetchPostDetail: (state, { payload }: PayloadAction<number>) => {
            state.loading = true;
        },
        fetchPostDetailSuccess: (state, { payload }: PayloadAction<Post>) => {
            state.loading = false;
            state.detail_post = payload;
            console.log('Detail post', payload);
        },
        fetchPostDetailError: (state, { payload }: PayloadAction<BaseError>) => {
            state.loading = false;
            state.error_msg = payload.error_msg;
        },
        clearCurrentPost: state => {
            state.detail_post = null;
        },
    },
});

export const FETCH_ALL_POST = `home/fetchAllPost`;
export const FETCH_POST_DETAIL = 'home/fetchPostDetail';

export const {
    fetchAllPost,
    fetchAllPostSuccess,
    fetchAllPostError,
    fetchPostDetail,
    fetchPostDetailError,
    fetchPostDetailSuccess,
    clearCurrentPost,
} = HomeReducer.actions;
export default HomeReducer.reducer;
